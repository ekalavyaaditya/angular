## 2025-05-15 - Improving accessibility for icon-only buttons
**Learning:** Icon-only buttons (like theme toggles or menu triggers) are common in modern UI but are often inaccessible to screen reader users if they lack descriptive ARIA labels. Tooltips are not enough as they don't always map to the accessible name.
**Action:** Always ensure `aria-label` or `aria-labelledby` is present on any button that does not contain visible text.

## 2026-07-19 - Keyboard navigation focus recovery and descriptive filtered states
**Learning:** In interactive data tables with search filters, clearing the filter often causes keyboard users to lose focus, forcing them to re-tab through the layout. Additionally, when active filtering yields zero matches, screen readers and visual users need immediate, contextual feedback within the table itself rather than absolute empty states.
**Action:** Always use template reference variables to programmatically restore focus to the search input element after a clear action. Use the `matNoDataRow` directive to show a clean descriptive "No records matching..." feedback row within the table boundaries for active filtering empty states, while keeping absolute empty states for base recordsets of zero length.
