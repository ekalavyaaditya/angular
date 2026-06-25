import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TableColumn } from '@core/models/dashboard.models';

@Component({
  selector: 'app-data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  // Performance: Use OnPush change detection to minimize change detection frequency.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T = unknown> implements AfterViewInit, OnChanges {
  @Input({ required: true }) title = '';
  @Input() emptyText = 'No records found.';
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];

  readonly dataSource = new MatTableDataSource<T>([]);
  // Performance: Cache the displayed columns list to avoid mapping in the template getter.
  private _displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  get displayedColumns(): string[] {
    return this._displayedColumns;
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
      // Performance: Map columns once and cache the result.
      this._displayedColumns = this.columns.map((column) => String(column.key));
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
}
