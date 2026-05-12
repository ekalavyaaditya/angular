import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { Account, AccountStatus, AdjustBalanceRequest, BalanceResponse, CreateAccountRequest } from '../models/account.models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly recentAccountsSubject = new BehaviorSubject<Account[]>([]);
  readonly recentAccounts$ = this.recentAccountsSubject.asObservable();

  constructor(private readonly api: ApiService) {}

  createAccount(request: CreateAccountRequest): Observable<Account> {
    return this.api.post<Account, CreateAccountRequest>('/accounts', request).pipe(tap((account) => this.upsertRecent(account)));
  }

  getAccount(id: string): Observable<Account> {
    return this.api.get<Account>(`/accounts/${id}`).pipe(tap((account) => this.upsertRecent(account)));
  }

  getBalance(id: string): Observable<BalanceResponse> {
    return this.api.get<BalanceResponse>(`/accounts/${id}/balance`);
  }

  updateStatus(id: string, status: AccountStatus): Observable<Account> {
    return this.api.patch<Account, { status: AccountStatus }>(`/accounts/${id}/status`, { status }).pipe(tap((account) => this.upsertRecent(account)));
  }

  credit(id: string, request: AdjustBalanceRequest): Observable<Account> {
    return this.api.put<Account, AdjustBalanceRequest>(`/accounts/${id}/balance`, request).pipe(tap((account) => this.upsertRecent(account)));
  }

  private upsertRecent(account: Account): void {
    const withoutExisting = this.recentAccountsSubject.value.filter((item) => item.id !== account.id);
    this.recentAccountsSubject.next([account, ...withoutExisting].slice(0, 25));
  }
}
