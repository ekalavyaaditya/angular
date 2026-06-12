## 2026-06-12 - Optimizing ShellComponent Navigation
**Learning:** Calling a method that returns a new array directly in an Angular template `*ngFor` expression causes it to be re-evaluated on every change detection cycle, leading to redundant logic execution and potentially UI flickering.
**Action:** Always prefer memoized observables with `async` pipe or cached properties, and combine with `ChangeDetectionStrategy.OnPush` and `trackBy` to minimize change detection frequency and DOM churn.
