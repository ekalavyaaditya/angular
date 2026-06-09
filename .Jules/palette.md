## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-06-09 - Improving Data Table Filtering UX
**Learning:** Standard search inputs without a clear button can be frustrating for users who want to quickly reset their view. Additionally, tables that go completely empty without feedback when a filter is too restrictive are confusing.
**Action:** Always provide a "Clear" button in search fields and use the `matNoDataRow` directive in Angular Material tables to provide contextual feedback (e.g., 'No results found for...') when a filter yields no matches.
