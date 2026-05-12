export type TransactionType = 'TRANSFER' | 'DEPOSIT' | 'WITHDRAWAL';
export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REVERSED';

export interface TransactionRecord {
  id: string;
  fromAccountId?: string | null;
  toAccountId?: string | null;
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  description?: string | null;
  metadata?: string | null;
  createdAt: string;
  reversalOfTransactionId?: string | null;
}

export interface CreateTransactionRequest {
  fromAccountId?: string | null;
  toAccountId?: string | null;
  amount: number;
  type: TransactionType;
  description?: string | null;
}
