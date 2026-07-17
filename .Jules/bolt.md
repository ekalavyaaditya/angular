## 2026-07-17 - Avoid calling service methods directly from templates in *ngFor
**Learning:** Calling service methods directly from Angular templates for data iterating directives like `*ngFor` causes redundant O(N) re-computations during every change detection run triggered by interactions (like toggling theme, closing drawers, or hover/focus events).
**Action:** Always derive iterating collections as a memoized or cached observable stream (using `distinctUntilChanged` and `shareReplay`) in the component class, and bind to them via the `async` pipe.
