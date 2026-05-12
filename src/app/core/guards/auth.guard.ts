import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.authorize();
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> {
    return this.authorize();
  }

  private authorize(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (!this.auth.token) {
      return this.router.createUrlTree(['/auth/login']);
    }

    if (this.auth.currentUser) {
      return true;
    }

    return this.auth.me().pipe(
      map(() => true),
      catchError(() => of(this.router.createUrlTree(['/auth/login'])))
    );
  }
}
