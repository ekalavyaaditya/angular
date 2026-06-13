## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-16 - Async loading states and ARIA attributes
**Learning:** Adding a loading spinner to a button is not just a visual cue; it must be coupled with `aria-busy` and dynamic `aria-label` to inform assistive technologies that an action is in progress. Using RxJS `finalize` ensures the loading state is always reset, preventing "stuck" UI.
**Action:** When implementing async actions, always pair visual loading indicators with `aria-busy="true"` and a descriptive `aria-label` (e.g., "Signing in..."), and use `finalize` to handle cleanup.
