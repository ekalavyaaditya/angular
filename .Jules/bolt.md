## 2026-06-25 - Template Method Execution Bottleneck
**Learning:** Calling service methods (like `navigation.navItems(role)`) directly in Angular templates with the default change detection strategy leads to massive redundancy. In a simple dashboard load, a single nav list triggered 9 executions.
**Action:** Always move template logic into memoized observables or cached properties and switch to `ChangeDetectionStrategy.OnPush` to ensure stable and efficient rendering.
