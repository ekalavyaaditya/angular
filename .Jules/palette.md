## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-16 - Async loading states in Material Buttons
**Learning:** When adding loading spinners to `mat-raised-button`, using a small diameter (e.g., `diameter="18"`) ensures the button height remains consistent and prevents layout shifts. Additionally, using `aria-label` to communicate the active state (e.g., "Signing in...") provides essential feedback for screen reader users during the wait time.
**Action:** Use `mat-spinner` with `diameter="18"` inside buttons and dynamically update `aria-label` during async operations.
