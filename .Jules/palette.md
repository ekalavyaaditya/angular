## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-10-24 - Handling filtered empty states in Angular Material
**Learning:** Using `*ngIf` on the table container to show an empty state template will hide the entire table, including headers. Using the `matNoDataRow` directive allows the table structure (headers) to remain visible while providing contextual feedback for filtered results that yield no matches.
**Action:** Use `matNoDataRow` for filter-driven empty states and `*ngIf` only for initial data-loading states where the table structure is not yet relevant.
