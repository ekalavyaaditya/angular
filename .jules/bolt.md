# Bolt's Performance Journal

## 2025-05-15 - Initial Performance Audit
**Learning:** Identified redundant method execution in Angular templates. `ShellComponent` calls `navigation.navItems(user.role)` in an `*ngFor` and `DataTableComponent` uses a getter `displayedColumns` that returns a new array on every cycle.
**Action:** Use memoized observables or cached properties combined with `ChangeDetectionStrategy.OnPush` to reduce change detection overhead.
