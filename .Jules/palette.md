## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-24 - Restoring focus after clearing input filters
**Learning:** When a user clears a search/filter input using an in-input clear button, they often expect their keyboard focus to remain on the input so they can immediately type a new query. If focus is lost or not explicitly restored, it disrupts the user's keyboard navigation flow and screen readers may lose their context.
**Action:** Always programmatically restore focus to the search/filter input element using `.focus()` immediately after the user triggers a clear action.
