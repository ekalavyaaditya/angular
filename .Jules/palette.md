## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-06 - Enhanced Data Table Filtering and Empty States
**Learning:** When implementing filtering in data tables, users need a clear way to reset the view and immediate feedback when a filter returns no results. Using `matNoDataRow` inside `mat-table` provides a more integrated experience than a separate empty state container when some data exists but is filtered out.
**Action:** Always include a 'clear' button in search fields and implement a 'no results' row in tables to maintain context during filtering.
