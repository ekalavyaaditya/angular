## 2026-07-09 - Memoizing Template Calls
**Learning:** Calling service methods directly in Angular templates causes them to re-execute on every change detection cycle, even if inputs haven't changed. In this app, `navItems()` was called ~9 times during initial load.
**Action:** Always move template-bound calculations into memoized observables with `distinctUntilChanged()` and use `ChangeDetectionStrategy.OnPush` where possible.
