# Bolt's Journal

## 2025-05-22 - Identifying common Angular performance pitfalls
**Learning:** Found multiple instances of method calls and array-allocating getters in templates (`navItems` in `ShellComponent`, `displayedColumns` in `DataTableComponent`, `rowsArray` in `SkeletonListComponent`). These cause redundant calculations and unnecessary `*ngFor` re-evaluations on every change detection cycle.
**Action:** Replace template method/getter calls with memoized properties or observables, especially for `*ngFor` sources.

## 2025-05-22 - Search input without debouncing
**Learning:** `DataTableComponent` triggers a filter operation on every keystroke. For large datasets, this can cause jank.
**Action:** Implement `debounceTime` using RxJS `Subject` for search inputs to reduce processing frequency.
