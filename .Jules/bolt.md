## 2026-06-24 - Navigation items memoization in Shell
**Learning:** Calling a service method like `navigation.navItems(role)` directly in an Angular template with default change detection leads to excessive redundant executions (39+ times for simple interactions).
**Action:** Always move such logic to a memoized observable in the component and use `ChangeDetectionStrategy.OnPush` to minimize change detection frequency.
