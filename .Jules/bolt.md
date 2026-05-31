# Bolt's Performance Journal

## 2026-05-31 - ShellComponent Navigation Optimization
**Learning:** Calling `NavigationService.navItems(role)` directly in the template of `ShellComponent` (which used default change detection) resulted in 8 redundant calls on initial load. Moving this to a memoized `navItems$` observable and switching to `OnPush` reduced this to exactly 1 call.
**Action:** Always prefer memoized observables or computed signals over method calls in templates, especially for components that wrap the entire application like `ShellComponent`.
