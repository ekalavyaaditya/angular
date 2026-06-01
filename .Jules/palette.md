## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-01 - Enhancing data table search with clear action and feedback
**Learning:** Adding a "Clear" button to search inputs in data tables significantly improves the "filter-and-reset" workflow. When combined with a dedicated "No results found" row (using `matNoDataRow`), it provides immediate and clear feedback when a filter is too restrictive.
**Action:** Always include a clear button for search inputs and implement a contextual "No results" state for filtered lists or tables.
