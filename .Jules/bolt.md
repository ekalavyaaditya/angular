## 2026-06-11 - Optimized Shell Navigation with Memoization and OnPush
**Learning:** Calling a service method directly in an Angular template with default change detection (CheckAlways) results in the method being executed multiple times per change detection cycle (e.g., 5 times on initial load in this app).
**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize derived data into observables using `shareReplay` to ensure expensive logic (like filtering/mapping nav items) only runs when the underlying state (the user role) actually changes.
