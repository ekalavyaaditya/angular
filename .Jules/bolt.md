## 2026-06-13 - [Angular Template Optimization]
**Learning:** Direct method calls and getters in Angular templates are executed on every change detection cycle, causing significant overhead in complex components like Shell and DataTables.
**Action:** Always prefer memoized observables or computed signals over direct method calls in templates. Use OnPush change detection to minimize change detection frequency.
