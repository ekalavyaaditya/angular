## 2026-07-15 - Memoizing Template Calls in Angular
**Learning:** Calling service methods directly from Angular templates (e.g., `*ngFor="let item of service.getItems()"`) causes the method to be executed on every change detection cycle, leading to O(N) performance issues during simple UI interactions.
**Action:** Use observables and the `async` pipe combined with `distinctUntilChanged()` and `shareReplay()` to memoize data and ensure computations only run when relevant state actually changes.
