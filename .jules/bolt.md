## 2026-06-09 - Template method call performance bottleneck
**Learning:** Calling methods directly in Angular templates, especially within `*ngFor`, causes them to be executed on every change detection cycle (e.g., 7+ times for a simple nav list on dashboard load).
**Action:** Use memoized observables with the `async` pipe and `ChangeDetectionStrategy.OnPush` to minimize redundant logic execution and improve rendering performance.
