export type AccountType = 'SAVINGS' | 'CHECKING' | 'FIXED_DEPOSIT';
export type AccountStatus = 'ACTIVE' | 'SUSPENDED' | 'CLOSED';

export interface Account {
  id: string;
  ownerName: string;
  email: string;
  balance: number;
  accountType: AccountType;
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAccountRequest {
  ownerName: string;
  email: string;
  accountType: AccountType;
}

export interface AdjustBalanceRequest {
  amount: number;
}

export interface BalanceResponse {
  balance: number;
}
