## 2026-06-07 - [Redundant navigation rendering]
**Learning:** Calling a service method like `navigation.navItems(user.role)` directly in an Angular template within `*ngFor` causes redundant execution on every change detection cycle (e.g., mouse moves, clicks).
**Action:** Use `ChangeDetectionStrategy.OnPush` and move logic into a memoized observable (using `shareReplay(1)`) or a signal to ensure calculations only run when inputs actually change.
