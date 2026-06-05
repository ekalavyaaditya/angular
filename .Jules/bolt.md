# Bolt's Performance Journal ⚡

## 2025-05-14 - Redundant navigation calculations in ShellComponent
**Learning:** Calling `NavigationService.navItems(role)` directly in the template within an `*ngFor` loop causes the navigation array to be re-calculated and re-rendered on every change detection cycle, even if the user role remains the same.
**Action:** Move derived template data into memoized observables using `shareReplay(1)` and enable `ChangeDetectionStrategy.OnPush` to minimize redundant processing.
