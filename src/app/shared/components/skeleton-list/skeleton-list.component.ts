import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skeleton-list',
  standalone: false,
  template: `
    <div class="skeleton-list" aria-hidden="true">
      <div class="skeleton-row" *ngFor="let row of rowsArray"></div>
    </div>
  `,
  styleUrls: ['./skeleton-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonListComponent implements OnChanges, OnInit {
  @Input() rows = 4;
  rowsArray: number[] = [];

  ngOnInit(): void {
    this.updateRowsArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows']) {
      this.updateRowsArray();
    }
  }

  private updateRowsArray(): void {
    this.rowsArray = Array.from({ length: this.rows }, (_, index) => index);
  }
}
