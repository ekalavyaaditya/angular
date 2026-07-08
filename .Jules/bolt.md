
## 2026-07-08 - Optimize navigation items rendering
**Learning:** Calling 'NavigationService.navItems(role)' directly in the template caused it to be re-executed on every change detection cycle (24+ times in a short session), returning new array instances and triggering redundant 'mat-nav-list' re-renders.
**Action:** Move template-bound function calls to memoized observables using 'distinctUntilChanged()' and enable 'ChangeDetectionStrategy.OnPush' to minimize change detection cycles.
