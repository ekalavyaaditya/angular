## 2026-05-13 - [OnPush and Async State Updates]
**Learning:** When using `ChangeDetectionStrategy.OnPush`, updates to the component state that happen within asynchronous callbacks (like RxJS subscriptions) will not automatically trigger change detection in Angular.
**Action:** Use `ChangeDetectorRef.markForCheck()` after updating state in async callbacks to ensure the view reflects the changes when using `OnPush`.
