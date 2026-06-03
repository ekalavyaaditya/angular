# Bolt's Performance Journal

## 2026-06-03 - Journal Initialized
**Learning:** Initializing the performance journal for the BankOps project.
**Action:** Always document critical performance insights here.

## 2026-06-03 - Optimized Navigation Rendering
**Learning:** Calling `NavigationService.navItems(role)` directly in the template caused 5 redundant executions during initial dashboard load (on top of triggering further re-renders).
**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize navigation items using an RxJS observable (`navItems$`) with `shareReplay(1)` and `trackBy` to reduce calls to 1 and optimize DOM updates.
