# Bolt's Journal - Performance Optimizations

## 2026-06-04 - Redundant Method Calls in Angular Templates
**Learning:** Calling methods like `NavigationService.navItems(role)` directly in Angular templates causes them to be re-executed on every change detection cycle. In this codebase, it was called 9 times during a single dashboard load.
**Action:** Use `OnPush` change detection strategy and memoize derived data into observables (using `shareReplay(1)`) or cached properties. In the `ShellComponent`, moving the nav items to a `navItems$` observable reduced calls from 9 to 1.

## 2026-06-04 - Template Getters as Bottlenecks
**Learning:** Getters in templates that return new array or object instances (e.g., `this.columns.map(...)`) trigger redundant change detection cycles because the reference changes every time.
**Action:** Replace template getters with cached properties that are updated only when inputs change (using `ngOnChanges` or `ngOnInit`). This was applied to `DataTableComponent.displayedColumns`.
