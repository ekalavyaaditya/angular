## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-07 - Restoring focus after clearing search
**Learning:** When a user clicks a "clear" button in a search field, they often expect to immediately type a new search. If focus is lost, it creates friction for keyboard and screen reader users.
**Action:** Always programmatically return focus to the input element after clearing its value via a button interaction.
