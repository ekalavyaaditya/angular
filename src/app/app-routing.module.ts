import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { RoleGuard } from './core/guards/role.guard';
import { CRYPTO_ROLES, FINTECH_PARTNER_ROLES, INVESTMENT_ROLES, PAYMENT_ROLES } from './core/models/role.models';
import { ShellComponent } from './layout/shell.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [GuestGuard],
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./features/profile/profile.module').then((m) => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule)
      },
      {
        path: 'customer',
        canActivate: [RoleGuard],
        data: { persona: 'customer', allowedRoles: ['CUSTOMER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'admin',
        canActivate: [RoleGuard],
        data: { persona: 'admin', allowedRoles: ['ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'employee',
        canActivate: [RoleGuard],
        data: { persona: 'employee', allowedRoles: ['TELLER', 'MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'manager',
        canActivate: [RoleGuard],
        data: { persona: 'manager', allowedRoles: ['MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'auditor',
        canActivate: [RoleGuard],
        data: { persona: 'auditor', allowedRoles: ['FRAUD_ANALYST', 'MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'support',
        canActivate: [RoleGuard],
        data: { persona: 'support', allowedRoles: ['TELLER', 'MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'merchant',
        canActivate: [RoleGuard],
        data: { persona: 'merchant', allowedRoles: [...PAYMENT_ROLES, 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'loan-officer',
        canActivate: [RoleGuard],
        data: { persona: 'loan-officer', allowedRoles: ['TELLER', 'MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'investment',
        canActivate: [RoleGuard],
        data: { persona: 'investment', allowedRoles: [...INVESTMENT_ROLES, 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'insurance',
        canActivate: [RoleGuard],
        data: { persona: 'insurance', allowedRoles: ['CUSTOMER', 'MANAGER', 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'cryptocurrency',
        canActivate: [RoleGuard],
        data: { persona: 'cryptocurrency', allowedRoles: [...CRYPTO_ROLES, 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'payment-gateway',
        canActivate: [RoleGuard],
        data: { persona: 'payment-gateway', allowedRoles: [...PAYMENT_ROLES, 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'fintech-partner',
        canActivate: [RoleGuard],
        data: { persona: 'fintech-partner', allowedRoles: [...FINTECH_PARTNER_ROLES, 'ADMIN'] },
        loadChildren: () => import('./features/role-workspace/role-workspace.module').then((m) => m.RoleWorkspaceModule)
      },
      {
        path: 'errors',
        loadChildren: () => import('./features/errors/errors.module').then((m) => m.ErrorsModule)
      }
    ]
  },
  { path: '**', redirectTo: 'errors/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
