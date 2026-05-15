# Bolt's Journal - Critical Learnings

## 2025-05-15 - Initial Performance Audit
**Learning:** The application lacks basic Angular performance optimizations like `ChangeDetectionStrategy.OnPush` and debouncing for user inputs.
**Action:** Prioritize implementing `OnPush` strategy and `debounceTime` for search filters in shared components to reduce unnecessary change detection cycles.
