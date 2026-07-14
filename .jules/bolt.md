## 2026-07-14 - Redundant mapping in template getters
**Learning:** Template getters that perform array transformations (like `map`) execute on every change detection cycle. In components with default change detection, this can lead to hundreds of redundant operations during standard user interactions.
**Action:** Use `ChangeDetectionStrategy.OnPush` where possible and replace expensive template getters with cached properties updated in `ngOnChanges`.
