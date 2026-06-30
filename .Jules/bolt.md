## 2025-05-15 - Memoizing Navigation Items in Shell
**Learning:** Calling a service method directly in an Angular template (e.g., `*ngFor="let item of navigation.navItems(role)"`) causes it to execute on EVERY change detection cycle. In this app, a simple navigation and theme toggle triggered over 30 redundant executions.
**Action:** Always wrap service calls that return arrays or objects in memoized observables (using `distinctUntilChanged` on the input) and use `OnPush` change detection to minimize execution frequency.
