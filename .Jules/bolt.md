## 2026-05-22 - Navigation Items Memoization in ShellComponent

**Learning:** Calling a method like `NavigationService.navItems(role)` directly in an Angular template with default change detection causes it to be executed multiple times per change detection cycle. In this app, it was called 7 times on initial load and 4 times per simple navigation.

**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize the data using RxJS observables (e.g., `user$.pipe(map(...))`) and the `async` pipe. Additionally, use `trackBy` in `*ngFor` to optimize DOM re-rendering. This reduced the calls from 7 to 1 on initial load and to 0 during subsequent navigations if the user role didn't change.
