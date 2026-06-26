## 2026-06-26 - Optimized Shell and DataTable Components
**Learning:** Calling service methods directly from Angular templates, especially those returning new array/object instances, causes redundant executions (e.g., 22+ calls for a simple navigation) due to Angular's change detection. `ChangeDetectionStrategy.OnPush` combined with memoized observables or cached properties significantly reduces this overhead.
**Action:** Always prefer `OnPush` change detection and ensure template bindings use cached properties or observables to avoid redundant calculations.
