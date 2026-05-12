import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  readonly user$ = this.auth.user$;
  readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required]],
    emailAlerts: [true],
    highRiskAlerts: [true]
  });

  constructor(
    private readonly auth: AuthService,
    private readonly fb: FormBuilder,
    private readonly notifications: NotificationService
  ) {}

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.notifications.success('Profile preferences saved locally.');
  }
}
