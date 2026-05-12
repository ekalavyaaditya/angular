import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FraudCase, FraudCaseStatus, UpdateFraudCaseStatusRequest } from '../models/fraud.models';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class FraudService {
  constructor(private readonly api: ApiService) {}

  getCases(status?: FraudCaseStatus): Observable<FraudCase[]> {
    return this.api.get<FraudCase[]>('/fraud/cases', { status });
  }

  getCase(id: number): Observable<FraudCase> {
    return this.api.get<FraudCase>(`/fraud/cases/${id}`);
  }

  updateStatus(id: number, request: UpdateFraudCaseStatusRequest): Observable<FraudCase> {
    return this.api.patch<FraudCase, UpdateFraudCaseStatusRequest>(`/fraud/cases/${id}/status`, request);
  }

  getAccountHistory(accountId: string): Observable<FraudCase[]> {
    return this.api.get<FraudCase[]>(`/fraud/account/${accountId}`);
  }
}
