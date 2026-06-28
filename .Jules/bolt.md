## 2026-06-28 - Optimize Shell navigation and DataTable change detection
**Learning:** Calling service methods like `navigation.navItems(role)` directly in Angular templates causes redundant executions on every change detection cycle (e.g., 32 calls for a single login/interaction flow).
**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize such calculations using reactive streams (Observables with `distinctUntilChanged` and `shareReplay`) or `ngOnChanges` to ensure they only run when inputs actually change.
