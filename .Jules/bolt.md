## 2026-06-27 - Optimizing Angular Template Method Calls

**Learning:** Calling a service method directly in an Angular template (e.g., `*ngFor="let item of navigation.navItems(user.role)"`) causes the method to execute on every single change detection cycle. In this application, a simple toggle interaction triggered ~45 redundant executions of the same logic.

**Action:** Move template method calls to a memoized observable in the component class. By using `distinctUntilChanged()` on the input (like `user.role`), the computation only runs when the underlying data actually changes, even if Angular's change detection runs frequently.

## 2026-06-27 - Component Change Detection Strategy

**Learning:** Most shared and layout components in this app were using the default change detection strategy, causing deep re-checks even for static or pure input-driven components.

**Action:** Default to `ChangeDetectionStrategy.OnPush` for all components that rely primarily on `@Input` or Observables. This significantly reduces the overhead of the Angular change detection tree.
