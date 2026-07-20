## 2026-07-20 - Memoizing template calculations for list iterations
**Learning:** Calling service methods or calculations directly inside Angular templates (e.g. `*ngFor="let item of navigation.navItems(user.role)"`) executes them on every single change detection cycle. This creates O(N) re-computations during any user interactions (like menu/theme toggles).
**Action:** Move service-based computations to a memoized or cached RxJS observable (e.g., `user$.pipe(distinctUntilChanged(), map(...))`) and use `trackBy` for `*ngFor` directives to prevent redundant layout cycles and rendering updates.
