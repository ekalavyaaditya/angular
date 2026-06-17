## 2026-06-17 - Redundant navigation item calculations in ShellComponent
**Learning:** Calling service methods like `navigation.navItems(role)` directly in Angular templates causes redundant executions on every change detection cycle (~9 calls on initial load).
**Action:** Use a memoized observable with `distinctUntilChanged()` and `shareReplay(1)` combined with `ChangeDetectionStrategy.OnPush` to reduce executions to exactly once per role change.
