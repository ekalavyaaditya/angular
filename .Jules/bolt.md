## 2026-07-25 - ShellComponent template service method call anti-pattern
**Learning:** Calling service methods or methods that generate arrays directly from Angular templates for data iterating directives like `*ngFor` causes redundant O(N) re-computations during every change detection cycle.
**Action:** Always move the dataset projection into a memoized observable stream using operators like `distinctUntilChanged` to emit changes only when the source state changes, reducing service calls from numerous checks to exactly O(1) invocation. Use `trackBy` to optimize DOM updates further.
