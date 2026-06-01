## 2026-06-01 - Redundant Navigation Rendering in ShellComponent

**Learning:** Calling a service method directly in the template for an `*ngFor` loop (e.g., `navigation.navItems(user.role)`) causes the method to be executed on every change detection cycle. In this app, a single set of interactions triggered 25 executions of the navigation logic.

**Action:** Always prefer memoized observables (`shareReplay(1)`) and `ChangeDetectionStrategy.OnPush` for layout components that depend on global state like the authenticated user. Use `trackBy` to further optimize list rendering.
