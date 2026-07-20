## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-20 - Restoring Keyboard Focus on Filter Clearing and Contextual Empty States
**Learning:** When users clear a search filter via an icon button, they expect keyboard focus to remain on or return to the input so they can immediately resume typing. Additionally, using standard empty states for empty search result views can confuse users; using targeted filtered empty-state messages (`matNoDataRow`) retains the context of the empty table and clarifies that the table is filtered rather than fully empty.
**Action:** Always use programmatic focus restoration on the search input when clear buttons are clicked, and provide specific contextual feedback for empty search result states.
