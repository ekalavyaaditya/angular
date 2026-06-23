## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-23 - Providing Feedback During Authentication
**Learning:** Users lack confidence during authentication if the submit button doesn't provide immediate feedback for asynchronous requests. Using a loading state that disables the button, shows a spinner, and updates labels improves both perceived performance and accessibility.
**Action:** Implement a 'loading' boolean and use the RxJS 'finalize' operator to ensure the UI state resets correctly after authentication attempts, regardless of success or failure.
