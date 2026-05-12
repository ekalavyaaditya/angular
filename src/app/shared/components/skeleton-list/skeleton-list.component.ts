import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  standalone: false,
  template: `
    <div class="skeleton-list" aria-hidden="true">
      <div class="skeleton-row" *ngFor="let row of rowsArray"></div>
    </div>
  `,
  styleUrls: ['./skeleton-list.component.scss']
})
export class SkeletonListComponent {
  @Input() rows = 4;

  get rowsArray(): number[] {
    return Array.from({ length: this.rows }, (_, index) => index);
  }
}
