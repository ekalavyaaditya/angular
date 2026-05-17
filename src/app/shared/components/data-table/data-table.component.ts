import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, debounceTime, takeUntil } from 'rxjs';

import { TableColumn } from '@core/models/dashboard.models';

/**
 * A reusable data table component using Angular Material Table.
 * Performance optimizations:
 * - OnPush change detection to reduce cycle frequency
 * - Debounced search input (300ms) to reduce filtering overhead during typing
 * - Memoized displayedColumns to avoid redundant map calls in getters
 * - trackBy for optimized DOM reconciliation
 */
@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T = unknown> implements AfterViewInit, OnChanges, OnInit, OnDestroy {
  @Input({ required: true }) title = '';
  @Input() emptyText = 'No records found.';
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];

  readonly dataSource = new MatTableDataSource<T>([]);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  private readonly destroy$ = new Subject<void>();
  private readonly filterSubject = new Subject<string>();

  ngOnInit(): void {
    // Debounce search to improve performance during rapid typing
    this.filterSubject.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.dataSource.filter = value.trim().toLowerCase();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }

    if (changes['columns']) {
      // Memoize displayed columns to avoid redundant map calls in template/getters
      this.displayedColumns = this.columns.map((column) => String(column.key));
    }
  }

  applyFilter(value: string): void {
    this.filterSubject.next(value);
  }

  trackByColumn(_: number, column: TableColumn<T>): string {
    return String(column.key);
  }

  cellValue(row: T, column: TableColumn<T>): string | number {
    if (column.value) {
      return column.value(row);
    }
    const value = (row as Record<string, unknown>)[column.key];
    return typeof value === 'string' || typeof value === 'number' ? value : '';
  }
}
