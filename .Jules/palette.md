## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-10 - Optimizing search input layout density
**Learning:** In dense Angular Material layouts, using `subscriptSizing="dynamic"` on `mat-form-field` prevents unnecessary vertical space when no error messages or hints are present, keeping the toolbar compact.
**Action:** Use `subscriptSizing="dynamic"` for search inputs in toolbars or compact headers to maintain a clean, tight UI.
