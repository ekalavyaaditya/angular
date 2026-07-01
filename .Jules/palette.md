## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2025-07-01 - Optimizing toolbar search UX and feedback
**Learning:** Toolbar-embedded search fields in Angular Material often face space constraints. Using `mat-label` alongside a `placeholder` can cause layout shifts or overlapping text. Additionally, users need immediate feedback when a filter returns no results to avoid confusion with empty data states.
**Action:** Use `subscriptSizing="dynamic"` and prefer a `placeholder` over a `mat-label` for search inputs in dense toolbars. Always implement a `*matNoDataRow` to provide contextual feedback for empty filter results.
