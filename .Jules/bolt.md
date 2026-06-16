# Bolt Performance Journal

## 2026-06-16 - Shell Navigation Optimization
**Learning:** Calling service methods directly in Angular templates with the default change detection strategy causes redundant executions (e.g., 7x for nav items on load). Moving these to a memoized observable with `distinctUntilChanged` and enabling `ChangeDetectionStrategy.OnPush` reduces this to a single execution.
**Action:** Always use `OnPush` and memoize derived data in observables for high-level components like the App Shell to avoid layout-driven performance degradation.
