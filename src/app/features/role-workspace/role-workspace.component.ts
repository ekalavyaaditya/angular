import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Account, AccountStatus, AccountType } from '@core/models/account.models';
import { DashboardMetric } from '@core/models/dashboard.models';
import { FraudCase, FraudCaseStatus } from '@core/models/fraud.models';
import { PersonaConfig } from '@core/models/role.models';
import { TransactionRecord, TransactionType } from '@core/models/transaction.models';
import { AccountService } from '@core/services/account.service';
import { FraudService } from '@core/services/fraud.service';
import { NavigationService } from '@core/services/navigation.service';
import { NotificationService } from '@core/services/notification.service';
import { TransactionService } from '@core/services/transaction.service';

@Component({
  selector: 'app-role-workspace',
  standalone: false,
  templateUrl: './role-workspace.component.html',
  styleUrls: ['./role-workspace.component.scss']
})
export class RoleWorkspaceComponent implements OnInit {
  persona!: PersonaConfig;
  selectedAccount: Account | null = null;
  selectedTransaction: TransactionRecord | null = null;
  fraudCases: FraudCase[] = [];

  readonly accountStatuses: AccountStatus[] = ['ACTIVE', 'SUSPENDED', 'CLOSED'];
  readonly accountTypes: AccountType[] = ['SAVINGS', 'CHECKING', 'FIXED_DEPOSIT'];
  readonly fraudStatuses: FraudCaseStatus[] = ['OPEN', 'INVESTIGATING', 'CLEARED', 'CONFIRMED_FRAUD'];
  readonly transactionTypes: TransactionType[] = ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER'];
  readonly recentAccounts$ = this.accounts.recentAccounts$;
  readonly recentTransactions$ = this.transactions.recentTransactions$;

  readonly createAccountForm = this.fb.nonNullable.group({
    ownerName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    accountType: ['SAVINGS' as AccountType, [Validators.required]]
  });

  readonly accountLookupForm = this.fb.nonNullable.group({
    accountId: ['', [Validators.required]],
    amount: [100, [Validators.required, Validators.min(0.01)]],
    status: ['ACTIVE' as AccountStatus, [Validators.required]]
  });

  readonly transactionForm = this.fb.group({
    fromAccountId: [''],
    toAccountId: ['', [Validators.required]],
    amount: [25, [Validators.required, Validators.min(0.01)]],
    type: ['DEPOSIT' as TransactionType, [Validators.required]],
    description: ['']
  });

  readonly transactionLookupForm = this.fb.nonNullable.group({
    transactionId: ['', [Validators.required]]
  });

  readonly fraudForm = this.fb.group({
    status: ['OPEN' as FraudCaseStatus, [Validators.required]],
    notes: ['']
  });

  metrics: DashboardMetric[] = [];

  trackByValue(_index: number, item: string): string {
    return item;
  }

  trackById(_index: number, item: any): string | number {
    return item.id;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly navigation: NavigationService,
    private readonly accounts: AccountService,
    private readonly transactions: TransactionService,
    private readonly fraud: FraudService,
    private readonly notifications: NotificationService
  ) {}

  ngOnInit(): void {
    const routePersona = this.route.snapshot.data['persona'] ?? this.route.parent?.snapshot.data['persona'];
    this.persona = this.navigation.persona(routePersona as string);
    this.metrics = this.buildMetrics();
    this.loadFraudCases();
  }

  createAccount(): void {
    if (this.createAccountForm.invalid) {
      this.createAccountForm.markAllAsTouched();
      return;
    }

    this.accounts.createAccount(this.createAccountForm.getRawValue()).subscribe({
      next: (account) => {
        this.selectedAccount = account;
        this.accountLookupForm.patchValue({ accountId: account.id, status: account.status });
        this.notifications.success('Account created.');
      }
    });
  }

  lookupAccount(): void {
    const accountId = this.accountLookupForm.controls.accountId.value;
    if (!accountId) {
      this.accountLookupForm.controls.accountId.markAsTouched();
      return;
    }

    this.accounts.getAccount(accountId).subscribe({
      next: (account) => {
        this.selectedAccount = account;
        this.accountLookupForm.patchValue({ status: account.status });
      }
    });
  }

  creditAccount(): void {
    if (this.accountLookupForm.invalid) {
      this.accountLookupForm.markAllAsTouched();
      return;
    }

    const { accountId, amount } = this.accountLookupForm.getRawValue();
    this.accounts.credit(accountId, { amount }).subscribe({
      next: (account) => {
        this.selectedAccount = account;
        this.notifications.success('Balance updated.');
      }
    });
  }

  updateAccountStatus(): void {
    if (this.accountLookupForm.controls.accountId.invalid || this.accountLookupForm.controls.status.invalid) {
      this.accountLookupForm.markAllAsTouched();
      return;
    }

    const { accountId, status } = this.accountLookupForm.getRawValue();
    this.accounts.updateStatus(accountId, status).subscribe({
      next: (account) => {
        this.selectedAccount = account;
        this.notifications.success('Account status updated.');
      }
    });
  }

  createTransaction(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    const raw = this.transactionForm.getRawValue();
    this.transactions.createTransaction({
      fromAccountId: raw.fromAccountId || null,
      toAccountId: raw.toAccountId || null,
      amount: Number(raw.amount),
      type: raw.type ?? 'DEPOSIT',
      description: raw.description || null
    }).subscribe({
      next: (transaction) => {
        this.selectedTransaction = transaction;
        this.transactionLookupForm.patchValue({ transactionId: transaction.id });
        this.notifications.success('Transaction processed.');
        this.loadFraudCases();
      }
    });
  }

  lookupTransaction(): void {
    if (this.transactionLookupForm.invalid) {
      this.transactionLookupForm.markAllAsTouched();
      return;
    }

    this.transactions.getTransaction(this.transactionLookupForm.controls.transactionId.value).subscribe({
      next: (transaction) => {
        this.selectedTransaction = transaction;
      }
    });
  }

  reverseTransaction(): void {
    if (this.transactionLookupForm.invalid) {
      this.transactionLookupForm.markAllAsTouched();
      return;
    }

    this.transactions.reverseTransaction(this.transactionLookupForm.controls.transactionId.value).subscribe({
      next: (transaction) => {
        this.selectedTransaction = transaction;
        this.notifications.success('Transaction reversed.');
      }
    });
  }

  loadTransactionsForAccount(): void {
    const accountId = this.accountLookupForm.controls.accountId.value;
    if (!accountId) {
      this.accountLookupForm.controls.accountId.markAsTouched();
      return;
    }
    this.transactions.getTransactionsForAccount(accountId).subscribe();
  }

  loadFraudCases(status?: FraudCaseStatus): void {
    this.fraud.getCases(status).subscribe({
      next: (cases) => {
        this.fraudCases = cases;
        this.metrics = this.buildMetrics();
      }
    });
  }

  updateFraudCase(caseId: number): void {
    if (this.fraudForm.invalid) {
      this.fraudForm.markAllAsTouched();
      return;
    }
    const raw = this.fraudForm.getRawValue();
    this.fraud.updateStatus(caseId, { status: raw.status ?? 'OPEN', notes: raw.notes || null }).subscribe({
      next: () => {
        this.notifications.success('Fraud case updated.');
        this.loadFraudCases();
      }
    });
  }

  private buildMetrics(): DashboardMetric[] {
    const openCases = this.fraudCases.filter((item) => item.status === 'OPEN').length;
    return [
      { label: 'Persona action', value: this.persona?.primaryAction ?? 'Operate', icon: this.persona?.icon ?? 'work', trend: 'Role-scoped workflow', tone: 'neutral' },
      { label: 'Fraud cases', value: String(this.fraudCases.length), icon: 'policy', trend: `${openCases} open`, tone: openCases ? 'warning' : 'success' },
      { label: 'Account status', value: this.selectedAccount?.status ?? 'None', icon: 'account_balance_wallet', trend: this.selectedAccount ? this.selectedAccount.accountType : 'Awaiting lookup', tone: 'neutral' },
      { label: 'Last transaction', value: this.selectedTransaction?.status ?? 'None', icon: 'receipt_long', trend: this.selectedTransaction ? `$${this.selectedTransaction.amount}` : 'No activity yet', tone: 'success' }
    ];
  }
}
