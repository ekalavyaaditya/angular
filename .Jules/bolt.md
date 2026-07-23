## 2026-05-18 - Avoid calling service methods inside data iterating templates
**Learning:** Calling service methods directly from Angular templates (such as inside `*ngFor` directives) causes redundant O(N) re-computations during layout updates and user interactions because the template re-evaluates on every change detection cycle.
**Action:** Always map complex or dynamic service data queries into a memoized or reactive observable stream (e.g. `navItems$`) utilizing operators like `distinctUntilChanged` to prevent redundant emissions and re-renders.
