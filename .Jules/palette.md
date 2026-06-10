## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-05-22 - Distinguishing validation states in forms
**Learning:** Generic validation messages (e.g., "Invalid input") or overlapping error indicators can frustrate users. Specifically, when a field has multiple constraints like 'required' and 'minLength', showing context-specific messages improves the user's ability to self-correct quickly.
**Action:** Use conditional rendering (like Angular's mat-error with specific error keys) to show the most relevant error message based on the current validation state.
