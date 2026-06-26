## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-26 - Providing feedback for empty search results
**Learning:** When a user filters a data table and no results are found, simply showing an empty table or a generic "no data" message can be confusing. Using `*matNoDataRow` to display a specific message that includes the filter value confirms that the search was executed and precisely what it was looking for.
**Action:** Implement `*matNoDataRow` in all searchable tables to provide contextual feedback for zero-match states.
