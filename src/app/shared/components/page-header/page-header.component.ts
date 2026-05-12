import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: false,
  template: `
    <header class="page-header">
      <div>
        <span *ngIf="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p *ngIf="description">{{ description }}</p>
      </div>
      <ng-content></ng-content>
    </header>
  `,
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
}
