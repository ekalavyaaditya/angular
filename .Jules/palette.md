## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-19 - Implementation of "Clear search" in data tables
**Learning:** When adding a custom clear button to a search field, use `type="text"` instead of `type="search"` to avoid double clear icons (native + custom). Programmatic focus should be returned to the input field after clearing to maintain user flow and accessibility.
**Action:** Use `type="text"` for search inputs with custom clear buttons and call `.focus()` on the input after the clear action.
