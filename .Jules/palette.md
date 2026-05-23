## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-23 - Enhancing data table search UX
**Learning:** Generic "No records found" messages are frustrating when a user has an active filter. Providing contextual feedback like "No results found for '[filter]'" helps users realize their search is too narrow. Combining this with a dedicated "Clear" button and proper focus management (returning focus to the input) makes the filter interaction feel much smoother and more accessible.
**Action:** When implementing filtering on data tables, always include a clear button that returns focus to the input, and provide specific empty state messaging when a filter is active.
