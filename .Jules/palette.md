## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-24 - Search Input Interaction Pattern
**Learning:** For a pleasant search experience, providing a "Clear" button is essential, but it must be paired with immediate focus management. If the user clicks "Clear", they likely want to start a new search immediately.
**Action:** When implementing a clear filter button, always return focus to the input element programmatically to maintain flow and keyboard accessibility.
