## 2026-06-14 - Shell navigation performance optimization
**Learning:** Calling `NavigationService.navItems(role)` directly in the template caused 9 redundant executions during initial dashboard load because the method returns a new array instance every time, triggering Angular's change detection to re-evaluate and re-render.
**Action:** Move service calls that return new objects/arrays from templates to memoized observables (using `shareReplay`) and enable `ChangeDetectionStrategy.OnPush` on the component.
