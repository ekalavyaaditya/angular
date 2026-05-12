import { Component, Input } from '@angular/core';

import { DashboardMetric } from '@core/models/dashboard.models';
import { PersonaConfig } from '@core/models/role.models';

@Component({
  selector: 'app-role-dashboard',
  standalone: false,
  templateUrl: './role-dashboard.component.html',
  styleUrls: ['./role-dashboard.component.scss']
})
export class RoleDashboardComponent {
  @Input({ required: true }) persona!: PersonaConfig;
  @Input() metrics: DashboardMetric[] = [];
}
