## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-16 - Enhancing search accessibility and flow
**Learning:** When providing a clear button for search inputs, it's crucial to programmatically return focus to the input after clearing. This maintains the user's flow, especially for keyboard and screen reader users who would otherwise lose their place in the UI.
**Action:** Use template reference variables to capture the search input element and call `.focus()` in the clearing logic.
