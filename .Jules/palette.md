## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-23 - Search Input Clear Action Focus Flow
**Learning:** Clearing a text-search filter with an icon-button disrupts keyboard users if focus is not programmatically restored back to the text input, forcing them to re-tab back to continue querying.
**Action:** Always use a template reference variable (e.g., `#searchInput`) and call `.focus()` inside the click handler of search input clear buttons.
