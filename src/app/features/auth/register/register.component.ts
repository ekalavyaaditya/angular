import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BACKEND_ROLES, BackendRole, roleDisplayName } from '@core/models/role.models';
import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['../auth-pages.scss']
})
export class RegisterComponent implements OnInit {
  private readonly defaultRole: BackendRole = 'CUSTOMER';
  readonly roleDisplayName = roleDisplayName;
  availableRoles: BackendRole[] = BACKEND_ROLES;

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(72)]],
    role: [this.defaultRole, [Validators.required]]
  });

  hidePassword = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly auth: AuthService,
    private readonly notifications: NotificationService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.auth.roles().subscribe({
      next: (roles) => {
        this.availableRoles = roles.length ? roles : BACKEND_ROLES;
      }
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.notifications.success('Account created and signed in.');
        void this.router.navigate(['/dashboard']);
      }
    });
  }
}
