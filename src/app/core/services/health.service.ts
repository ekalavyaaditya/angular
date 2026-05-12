import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface HealthResponse {
  status?: string;
  application?: string;
  timestamp?: string;
}

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private readonly http: HttpClient) {}

  status(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(environment.healthUrl);
  }
}
