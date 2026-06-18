# Bolt's Performance Journal

## 2026-06-18 - Optimized Navigation in ShellComponent
**Learning:** Calling service methods like `navigation.navItems(role)` directly in the Angular template caused it to execute ~9 times on initial load. This is a common performance bottleneck in Angular due to default change detection.
**Action:** Always prefer memoized observables or signals over direct method calls in templates. Combine with `ChangeDetectionStrategy.OnPush` to further minimize redundant executions.
