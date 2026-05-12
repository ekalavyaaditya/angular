import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: false,
  template: `
    <mat-card class="stat-card" [class]="tone">
      <div class="icon-wrap">
        <mat-icon>{{ icon }}</mat-icon>
      </div>
      <div>
        <p>{{ label }}</p>
        <strong>{{ value }}</strong>
        <span>{{ trend }}</span>
      </div>
    </mat-card>
  `,
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) value = '';
  @Input({ required: true }) icon = 'insights';
  @Input() trend = 'Stable';
  @Input() tone: 'neutral' | 'success' | 'warning' | 'danger' = 'neutral';
}
