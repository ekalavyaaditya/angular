## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-11 - Enhancing data table filter feedback and controls
**Learning:** Empty tables after filtering can be confusing without explicit feedback. Using `matNoDataRow` provides immediate confirmation that the search was active but yielded no results. Additionally, clear buttons in search inputs significantly improve interaction speed but must manage focus to keep the keyboard flow intact.
**Action:** Implement `matNoDataRow` for all searchable tables and ensure clear buttons programmaticially restore focus to the input element.
