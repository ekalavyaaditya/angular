## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-06-23 - Visual feedback for asynchronous authentication actions
**Learning:** Authentication forms (Login/Register) that lack immediate visual feedback during submission can lead to "rage-clicking" or duplicate account creation attempts. Simply disabling the button is insufficient; users need a clear signal (like a spinner) that the system is actively processing their request.
**Action:** Implement a `loading` state UX pattern for all primary action buttons that trigger network requests, including a spinner, button disabling, and descriptive aria-labels.
