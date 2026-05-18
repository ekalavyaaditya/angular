## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-18 - Enhancing search fields with custom clear buttons
**Learning:** Using `type="search"` in inputs can cause visual overlap between native browser clear icons and custom suffix buttons. Transitioning to `type="text"` and providing a custom clear button improves consistency across browsers.
**Action:** Use `type="text"` for search fields when adding a custom clear button, and ensure focus is programmatically returned to the input after clearing to maintain a smooth user flow.
