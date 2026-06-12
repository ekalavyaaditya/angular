## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-12 - Handling Empty vs No-Results states in MatTable
**Learning:** Using `*ngIf="dataSource.data.length"` on a table wrapper prevents `matNoDataRow` from displaying because the table is removed from the DOM when filtering results in zero matches.
**Action:** Use `*ngIf="dataSource.data.length || filterValue"` (or similar state tracking) to keep the table in the DOM during active filtering, allowing `matNoDataRow` to provide specific feedback.
