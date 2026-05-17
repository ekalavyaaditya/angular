## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-17 - Accessible Search Clear Pattern
**Learning:** Custom 'clear' buttons in search fields should return focus to the input element after being clicked. This maintains the user's flow and is critical for keyboard and screen reader accessibility. Additionally, changing the input type from 'search' to 'text' prevents browser-native clear icons from overlapping with the custom UI.
**Action:** When implementing clear buttons, programmatically call `.focus()` on the input and use `type="text"`.
