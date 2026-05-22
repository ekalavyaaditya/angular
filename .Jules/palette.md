## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-22 - Search Input "Clear" UX Pattern
**Learning:** Browser-native "clear" icons in `type="search"` inputs often overlap with Angular Material suffix icons or custom styling, leading to a cluttered UI. Implementing a custom clear button with `type="text"` provides more control and a consistent look.
**Action:** Use `type="text"` for search inputs when adding a custom clear button. Ensure the button is accessible (`aria-label`, `matTooltip`) and programmatically returns focus to the input after clearing to maintain user flow.
