## 2026-07-13 - [Angular Template Function Anti-pattern]
**Learning:** Calling service methods like `navigation.navItems(role)` directly in Angular templates causes them to execute on every change detection cycle (e.g., mouse moves, clicks, timers), even if the inputs haven't changed. This is particularly expensive when combined with default change detection.
**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize data-heavy template inputs into Observables using `shareReplay(1)`. Always use `trackBy` with `*ngFor` to minimize DOM churn.
