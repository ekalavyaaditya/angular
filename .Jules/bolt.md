## 2026-05-20 - [Performance Optimization] ShellComponent Navigation Items
**Learning:** Calling `NavigationService.navItems(role)` directly in the template caused it to execute ~23 times during initial load and simple interactions (like toggling a menu) due to Angular's default change detection.
**Action:** Implemented `ChangeDetectionStrategy.OnPush` and memoized the navigation items into a `navItems$` observable in the component class. Used `trackBy` in the `*ngFor` loop to further optimize rendering. This reduced the number of method executions from 23 to 1.
