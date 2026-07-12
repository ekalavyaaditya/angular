## 2026-07-12 - Optimize ShellComponent navigation items
**Learning:** Calling a service method directly in an Angular template's `*ngFor` loop causes it to execute on every change detection cycle, leading to hundreds of redundant calls during simple UI interactions.
**Action:** Always memoize template-bound data using observables and use `ChangeDetectionStrategy.OnPush` combined with `trackBy` to minimize redundant computations and DOM updates.
