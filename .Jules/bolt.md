# Bolt's Performance Journal

## 2025-05-15 - ShellComponent Navigation Optimization
**Learning:** Calling a method that returns a new array in a template `*ngFor` causes redundant executions and DOM churn on every change detection cycle. In this app, `NavigationService.navItems(role)` was called 8 times during initial load.
**Action:** Use a memoized observable with `shareReplay(1)` and switch to `ChangeDetectionStrategy.OnPush` to minimize re-renders. Use `trackBy` to further optimize `*ngFor`.
**Impact:** Reduced `navItems` calls from 8 to 1 per initial load.
