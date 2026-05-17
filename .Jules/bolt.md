## 2026-05-17 - [DataTable Performance Bottleneck]
**Learning:** Shared components like `DataTableComponent` without `OnPush` and with heavy getters (like `.map` on every change detection) create significant overhead as the application grows.
**Action:** Always implement `ChangeDetectionStrategy.OnPush` and memoize derived properties in `ngOnChanges` for high-frequency UI components. Use RxJS debouncing for user inputs that trigger data processing or filtering.
