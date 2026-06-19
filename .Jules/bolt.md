# Bolt's Performance Journal

## 2026-06-19 - Optimize Shell Navigation
**Learning:** Calling a service method directly in an Angular template for a list (`*ngFor`) causes it to be executed on every change detection cycle. During the initial load of the dashboard, `NavigationService.navItems` was called 9 times.
**Action:** Move template method calls to memoized observables with `distinctUntilChanged` and use `ChangeDetectionStrategy.OnPush` to minimize change detection frequency. This reduced the calls from 9 down to 1.
