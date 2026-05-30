## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-05-30 - Standardizing clearable search inputs
**Learning:** Browser-native 'type="search"' clear icons are difficult to style consistently and lack accessible descriptors (ARIA labels) or tooltips. Using a custom 'matSuffix' button provides a consistent UX across browsers and allows for full control over accessibility features.
**Action:** Replace native search inputs with custom clearable patterns in Angular Material to ensure high-quality micro-interactions and screen reader support.
