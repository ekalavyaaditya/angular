## 2026-05-26 - Optimized ShellComponent Navigation
**Learning:** Calling `NavigationService.navItems(role)` directly in templates caused redundant executions (6 calls on initial load) due to Angular's change detection. Memoizing this as an observable and using `OnPush` reduces calls to 1 on initial load.
**Action:** Always memoize method results used in templates, especially those derived from observables like `auth.user$`, and prioritize `ChangeDetectionStrategy.OnPush`.
