## 2025-05-15 - Redundant Method Calls in Templates
**Learning:** Calling service methods directly in Angular templates (e.g., `navigation.navItems(role)`) causes them to execute on every change detection cycle. In `ShellComponent`, this led to 11+ redundant executions during initial load.
**Action:** Always memoize derived template values using RxJS observables (with `shareReplay(1)`) or cached properties, and prefer `ChangeDetectionStrategy.OnPush` to minimize change detection frequency.
