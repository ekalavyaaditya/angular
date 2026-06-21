## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-24 - Consistent Loading Feedback in Auth Flows
**Learning:** Authentication buttons (Login/Register) are high-intent actions where users expect immediate feedback. Simply disabling the button is not enough; adding a spinner and updating the button text (e.g., "Signing in...") provides clear state communication. Using the RxJS `finalize` operator ensures the loading state is always cleaned up, even on network errors.
**Action:** Implement a standard `loading` pattern using a boolean flag, `mat-spinner`, and text updates for all primary action buttons in the app.
