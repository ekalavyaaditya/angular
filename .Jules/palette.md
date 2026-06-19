## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-19 - Standardized empty states for filtered tables
**Learning:** When a table's data is filtered to zero results, simply showing a blank table or the general "No records found" empty state can be confusing. Users need explicit confirmation that the *filter* is what caused the empty state.
**Action:** Use `matNoDataRow` to provide a contextual message like "No results matching the filter '[value]'" and ensure the message wraps properly (`white-space: normal`) to avoid truncation in narrow columns.
