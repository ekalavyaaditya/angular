import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

interface ApiErrorBody {
  error?: string;
  message?: string;
  code?: string;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly auth: AuthService,
    private readonly notifications: NotificationService,
    private readonly router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const message = this.resolveMessage(error);

        if (error.status === 401) {
          this.notifications.error('Your session expired. Please sign in again.');
          this.auth.logout();
        } else if (error.status === 403) {
          this.notifications.error('You do not have access to that workspace.');
          void this.router.navigate(['/errors/forbidden']);
        } else {
          this.notifications.error(message);
        }

        return throwError(() => error);
      })
    );
  }

  private resolveMessage(error: HttpErrorResponse): string {
    const body = error.error as ApiErrorBody | string | null;
    if (typeof body === 'string' && body.trim()) {
      return body;
    }
    if (body && typeof body === 'object') {
      return body.message ?? body.error ?? 'The banking service returned an error.';
    }
    if (error.status === 0) {
      return 'Cannot reach the banking API. Check that Spring Boot is running on port 8084.';
    }
    return 'Something went wrong while processing the request.';
  }
}
