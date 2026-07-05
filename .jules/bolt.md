## 2026-07-05 - Navigation Items Template Execution Bottleneck
**Learning:** Calling a service method like `navigation.navItems(role)` directly in an Angular template with default change detection causes the method to execute on every change detection cycle (e.g., mouse moves, clicks), even if the input (role) hasn't changed.
**Action:** Use `ChangeDetectionStrategy.OnPush` and derive data via memoized observables with `distinctUntilChanged()` to ensure expensive or repetitive logic only runs when necessary.
