import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

import { TableColumn } from '@core/models/dashboard.models';

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
  private readonly filterSubject = new Subject<string>();
  private readonly destroy$ = new Subject<void>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  get displayedColumns(): string[] {
    return this.columns.map((column) => String(column.key));
  }

  ngOnInit(): void {
    this.filterSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.dataSource.filter = value;
      this.cdr.markForCheck();
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
  }

  applyFilter(value: string): void {
    this.filterSubject.next(value.trim().toLowerCase());
  }

  cellValue(row: T, column: TableColumn<T>): string | number {
    if (column.value) {
      return column.value(row);
    }
    const value = (row as Record<string, unknown>)[column.key];
    return typeof value === 'string' || typeof value === 'number' ? value : '';
  }
}
