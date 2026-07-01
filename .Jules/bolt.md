## 2026-07-01 - Shell navigation optimization
**Learning:** Calling a service method directly in an Angular template (e.g., `*ngFor="let item of navigation.navItems(role)"`) causes the method to be executed on every change detection cycle, even if the inputs haven't changed.
**Action:** Use a memoized observable with `distinctUntilChanged()` and `ChangeDetectionStrategy.OnPush` to ensure expensive calculations only happen when necessary.
