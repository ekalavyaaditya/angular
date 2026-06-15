# Bolt Performance Journal

## 2026-06-15 - Redundant method calls in Angular templates
**Learning:** Calling service methods like `navigation.navItems(role)` directly in templates causes them to re-execute on every change detection cycle. In this app, it resulted in 8+ executions for a single page load.
**Action:** Memoize derived data using observables or signals and prefer `ChangeDetectionStrategy.OnPush`.
