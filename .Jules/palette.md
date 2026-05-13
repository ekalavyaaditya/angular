## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-13 - Enhancing Search UX with Clear Buttons
**Learning:** Custom 'clear' buttons in search fields should always use `type="text"` for the input to prevent visual conflicts with native browser clear icons. Additionally, the clear action should programmatically return focus to the input field to ensure a seamless experience for keyboard and screen reader users.
**Action:** Implement `input.focus()` in clear button handlers and prefer `type="text"` over `type="search"` when providing a custom clear UI.
