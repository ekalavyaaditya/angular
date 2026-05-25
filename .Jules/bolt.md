## 2026-05-25 - [Redundant Template Method Calls]
**Learning:** Calling `NavigationService.navItems(role)` directly in the template's `*ngFor` caused the method to be executed 6-8 times during the initial dashboard load due to Angular's default change detection.
**Action:** Memoize template-bound data using RxJS observables (e.g., `user$.pipe(map(...), shareReplay(1))`) and switch to `ChangeDetectionStrategy.OnPush` to minimize redundant evaluations and change detection cycles.
