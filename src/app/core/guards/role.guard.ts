import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

import { BackendRole } from '../models/role.models';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const allowedRoles = (route.data['allowedRoles'] ?? []) as BackendRole[];
    return this.auth.hasAnyRole(allowedRoles) ? true : this.router.createUrlTree(['/errors/forbidden']);
  }
}
