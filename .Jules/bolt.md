# Bolt's Journal - Critical Performance Learnings

This journal contains critical learnings about performance optimizations in this codebase.

## 2025-05-15 - Initial Assessment
**Learning:** The application uses Angular 21 with Angular Material. Key performance patterns already identified include `ChangeDetectionStrategy.OnPush`, `trackBy`, and `debounceTime`.
**Action:** Always check for these patterns when reviewing new or existing components.
