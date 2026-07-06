## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-06 - Dynamic feedback for filtered tables
**Learning:** Using the `matNoDataRow` directive is superior to generic empty states when filtering datasets because it keeps the table's header and structure intact, providing better context and a more stable layout for the user.
**Action:** Prefer `matNoDataRow` with specific, quoted search terms (e.g., "No results for '...'") to provide clear, actionable feedback during searches.
