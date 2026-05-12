import { Component, OnInit } from '@angular/core';

import { DashboardMetric } from '@core/models/dashboard.models';
import { PersonaConfig } from '@core/models/role.models';
import { AccountService } from '@core/services/account.service';
import { AuthService } from '@core/services/auth.service';
import { FraudService } from '@core/services/fraud.service';
import { HealthResponse, HealthService } from '@core/services/health.service';
import { NavigationService } from '@core/services/navigation.service';
import { TransactionService } from '@core/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  readonly user$ = this.auth.user$;
  readonly accounts$ = this.accounts.recentAccounts$;
  readonly transactions$ = this.transactions.recentTransactions$;
  readonly chartBars = [
    { label: 'Accounts', className: 'accounts' },
    { label: 'Transfers', className: 'transfers' },
    { label: 'Fraud', className: 'fraud' },
    { label: 'Payments', className: 'payments' }
  ];

  personas: PersonaConfig[] = [];
  health: HealthResponse | null = null;
  fraudOpenCount = 0;

  metrics: DashboardMetric[] = [
    { label: 'API status', value: 'Checking', icon: 'monitor_heart', trend: 'Spring Boot health endpoint', tone: 'neutral' },
    { label: 'Recent accounts', value: '0', icon: 'account_balance', trend: 'Cached from API calls', tone: 'neutral' },
    { label: 'Recent transactions', value: '0', icon: 'swap_horiz', trend: 'Cached from API calls', tone: 'success' },
    { label: 'Open fraud cases', value: '0', icon: 'policy', trend: 'Live fraud API', tone: 'warning' }
  ];

  constructor(
    private readonly auth: AuthService,
    private readonly accounts: AccountService,
    private readonly transactions: TransactionService,
    private readonly fraud: FraudService,
    private readonly healthService: HealthService,
    private readonly navigation: NavigationService
  ) {}

  ngOnInit(): void {
    const user = this.auth.currentUser;
    if (user) {
      this.personas = this.navigation.personasForRole(user.role);
    }

    this.healthService.status().subscribe({
      next: (health) => {
        this.health = health;
        this.metrics[0] = { ...this.metrics[0], value: health.status ?? 'UP', tone: 'success' };
      },
      error: () => {
        this.metrics[0] = { ...this.metrics[0], value: 'Offline', tone: 'danger' };
      }
    });

    this.accounts.recentAccounts$.subscribe((accounts) => {
      this.metrics[1] = { ...this.metrics[1], value: String(accounts.length) };
    });

    this.transactions.recentTransactions$.subscribe((transactions) => {
      this.metrics[2] = { ...this.metrics[2], value: String(transactions.length) };
    });

    this.fraud.getCases('OPEN').subscribe({
      next: (cases) => {
        this.fraudOpenCount = cases.length;
        this.metrics[3] = { ...this.metrics[3], value: String(cases.length), tone: cases.length ? 'warning' : 'success' };
      }
    });
  }
}
