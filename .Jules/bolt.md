## 2026-05-28 - [Optimized Shell Navigation]
**Learning:** Calling a method in an Angular template that returns a new array (like `navigation.navItems(role)`) causes redundant executions on every change detection cycle. In the 'ShellComponent', this resulted in 8 calls during initial load.
**Action:** Use 'ChangeDetectionStrategy.OnPush' and memoize template data into observables (using `map` and `shareReplay(1)`) to ensure logic only runs when source data changes. Combined with 'trackBy' in '*ngFor', this significantly reduces re-renders and computation.
