## 2026-05-27 - [Angular Template Optimization]
**Learning:** Calling a service method directly in an Angular template (e.g., `*ngFor="let item of service.getItems()"`) causes it to execute on every change detection cycle, even if inputs haven't changed.
**Action:** Memoize such data as an Observable using `shareReplay(1)` and consume it with the `async` pipe, combined with `ChangeDetectionStrategy.OnPush`.

## 2026-05-27 - [Template Getter Bottleneck]
**Learning:** Getters used in templates that return new object/array instances (e.g., `get displayedColumns() { return columns.map(...) }`) trigger redundant change detection cycles in Angular because the reference changes every time.
**Action:** Replace template getters with cached properties updated only in `ngOnChanges`.
