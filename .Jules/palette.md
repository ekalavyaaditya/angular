## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-16 - Search input clear button pattern
**Learning:** Adding a clear button to search filters significantly improves user efficiency. For a smooth experience, the clear button should only appear when the input is not empty, and it MUST return focus to the input element after being clicked to maintain keyboard flow.
**Action:** Implement `clearFilter` patterns in data tables using `matSuffix` and template reference variables (e.g., `#searchInput`) to manage focus.
