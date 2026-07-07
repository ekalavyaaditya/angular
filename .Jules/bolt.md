## 2025-05-15 - Optimize Navigation Item Calculation
**Learning:** Calling service methods directly in Angular templates causes them to execute on every change detection cycle, leading to significant overhead in layout components.
**Action:** Use `OnPush` change detection and memoize expensive or frequently called logic into observables using `distinctUntilChanged()` to ensure computations only run when necessary.
