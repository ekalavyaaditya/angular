import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TableColumn } from '@core/models/dashboard.models';

/**
 * Optimized data table component.
 *
 * Performance Improvements:
 * 1. Switched to ChangeDetectionStrategy.OnPush to reduce unnecessary change detection cycles.
 * 2. Replaced template getter 'displayedColumns' with a cached property updated only on input changes.
 *    - Reduces mapping operations from O(N) per change detection cycle to O(1).
 */
@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T = unknown> implements AfterViewInit, OnChanges {
  @Input({ required: true }) title = '';
  @Input() emptyText = 'No records found.';
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];

  readonly dataSource = new MatTableDataSource<T>([]);
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator ?? null;
    this.dataSource.sort = this.sort ?? null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
    if (changes['columns']) {
      this.updateDisplayedColumns();
    }
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  cellValue(row: T, column: TableColumn<T>): string | number {
    if (column.value) {
      return column.value(row);
    }
    const value = (row as Record<string, unknown>)[column.key];
    return typeof value === 'string' || typeof value === 'number' ? value : '';
  }

  private updateDisplayedColumns(): void {
    this.displayedColumns = this.columns.map((column) => String(column.key));
  }
}
