## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-08 - Enhancing search feedback in data tables
**Learning:** For tables with search functionality, users expect immediate feedback when a filter returns no results. Using `matNoDataRow` provides a contextual empty state that keeps the user within the table's flow rather than replacing the table with a generic empty state.
**Action:** Implement `matNoDataRow` in all filterable tables to show "No results for '[query]'" messages, and always include a clear button in the search input to allow quick recovery.
