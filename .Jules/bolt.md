# Bolt's Journal - Critical Learnings

## 2025-05-15 - Redundant Navigation Item Generation
**Learning:** Calling a method like `navigation.navItems(role)` directly in an Angular template with default change detection causes the method to execute on every change detection cycle (e.g., 8+ times on initial load). This is particularly impactful in the app shell.
**Action:** Use `ChangeDetectionStrategy.OnPush` combined with memoized observables (using `shareReplay(1)`) and `trackBy` for `*ngFor` to minimize executions and DOM manipulations.
