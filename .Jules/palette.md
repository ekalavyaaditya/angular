## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-04 - Enhancing search and empty states in data tables
**Learning:** Providing a "No records matching" feedback with the search term during filtering reduces user confusion compared to a generic "No data" message. Focus management (returning focus to the input after clearing) is critical for a smooth keyboard experience.
**Action:** Use `matNoDataRow` for contextual filter feedback and ensure the clear button returns focus to the input element.
