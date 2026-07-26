## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-26 - Dense toolbar search clear and empty states
**Learning:** Dynamic toolbar search fields require compact layouts and immediate feedback. Combining 'subscriptSizing="dynamic"' with a 'matSuffix' clear button and programmatic focus restoration ensures high UX density and keyboard accessibility. Additionally, providing a 'matNoDataRow' inside tables ensures searchers are never left wondering if the app froze when zero matches return.
**Action:** For search/filter inputs, implement a clear button with template reference focus restoration, and always pair it with custom 'matNoDataRow' markup for empty states.
