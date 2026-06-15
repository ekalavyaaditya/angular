## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-15 - Coordinating Empty States with matNoDataRow
**Learning:** In components using `matNoDataRow`, a simple `*ngIf="dataSource.data.length"` on the table container will prevent the "no results" row from appearing because the table is removed from the DOM.
**Action:** Use a condition like `*ngIf="dataSource.data.length || filterValue"` to ensure the table remains in the DOM when a search is active, allowing `matNoDataRow` to provide feedback.
