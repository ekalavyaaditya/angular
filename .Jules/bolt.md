## 2026-06-20 - Optimize shell navigation with OnPush and memoization
**Learning:** Calling service methods directly in templates (e.g., `*ngFor="let item of navigation.navItems(user.role)"`) causes redundant executions on every change detection cycle. In this app, a simple navigation flow triggered 35 calls to a relatively simple service method.
**Action:** Always use `ChangeDetectionStrategy.OnPush` combined with memoized observables or signals to ensure expensive or frequently called logic only executes when its inputs actually change.
