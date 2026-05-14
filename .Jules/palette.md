## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-14 - Enhancing search input accessibility and UX
**Learning:** Using `type="search"` on inputs often results in a native browser "clear" icon that can conflict or overlap with custom UI elements. Additionally, when a custom clear button is provided, focus must be returned to the input field after clicking to maintain keyboard flow and screen reader context.
**Action:** Use `type="text"` for search inputs when providing a custom clear button, and explicitly call `.focus()` on the input element in the clear handler.
