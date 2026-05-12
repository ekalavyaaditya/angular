import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { CreateTransactionRequest, TransactionRecord } from '../models/transaction.models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly recentTransactionsSubject = new BehaviorSubject<TransactionRecord[]>([]);
  readonly recentTransactions$ = this.recentTransactionsSubject.asObservable();

  constructor(private readonly api: ApiService) {}

  createTransaction(request: CreateTransactionRequest): Observable<TransactionRecord> {
    return this.api.post<TransactionRecord, CreateTransactionRequest>('/transactions', request).pipe(tap((transaction) => this.upsertRecent(transaction)));
  }

  getTransaction(id: string): Observable<TransactionRecord> {
    return this.api.get<TransactionRecord>(`/transactions/${id}`).pipe(tap((transaction) => this.upsertRecent(transaction)));
  }

  getTransactionsForAccount(accountId: string): Observable<TransactionRecord[]> {
    return this.api.get<TransactionRecord[]>(`/transactions/account/${accountId}`).pipe(tap((transactions) => this.recentTransactionsSubject.next(transactions)));
  }

  reverseTransaction(id: string): Observable<TransactionRecord> {
    return this.api.post<TransactionRecord, Record<string, never>>(`/transactions/${id}/reverse`, {}).pipe(tap((transaction) => this.upsertRecent(transaction)));
  }

  private upsertRecent(transaction: TransactionRecord): void {
    const withoutExisting = this.recentTransactionsSubject.value.filter((item) => item.id !== transaction.id);
    this.recentTransactionsSubject.next([transaction, ...withoutExisting].slice(0, 50));
  }
}
