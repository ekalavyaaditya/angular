export type FraudCaseStatus = 'OPEN' | 'INVESTIGATING' | 'CLEARED' | 'CONFIRMED_FRAUD';
export type AlertType = 'LARGE_TRANSFER' | 'RAPID_SUCCESSION' | 'NEW_ACCOUNT_RISK' | 'ROUND_NUMBER';

export interface FraudCase {
  id: number;
  transactionId: string;
  accountId: string;
  alertType: AlertType;
  riskScore: number;
  status: FraudCaseStatus;
  triggeredRules: string[];
  flaggedAt: string;
  resolvedAt?: string | null;
  notes?: string | null;
}

export interface UpdateFraudCaseStatusRequest {
  status: FraudCaseStatus;
  notes?: string | null;
}
