## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-15 - Feedback for zero-match filtering in data tables
**Learning:** In data-dense applications, filtering a table to zero results without explicit feedback can lead users to believe the application has frozen or failed to load. Using the `matNoDataRow` directive in Angular Material allows for a consistent UX that remains within the table's structural context while providing clear, contextual feedback.
**Action:** Always implement a "No results found" state for searchable tables, ideally including the search term in the feedback message to confirm the filter was applied.
