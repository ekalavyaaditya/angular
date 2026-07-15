## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-20 - Providing feedback for zero-match filters
**Learning:** In data-heavy applications, filtering results to an empty set without explicit feedback can be confusing, as users might assume a system error or simply lose track of their state. Using `matNoDataRow` (or similar) provides a clear "no records matching" message that validates the user's action.
**Action:** Always implement an "empty state" or "no results" message for tables and lists that can be filtered, ensuring the user is never left with an empty container without context.
