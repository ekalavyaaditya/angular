## 2026-05-24 - Navigation items memoization
**Learning:** Calling a service method directly in an Angular template with default change detection (CheckAlways) causes that method to execute on every change detection cycle (e.g., 7+ times for a simple sidebar).
**Action:** Use `ChangeDetectionStrategy.OnPush` and memoize data using RxJS observables with `shareReplay(1)` to ensure the logic runs only when dependencies (like the user role) actually change.
