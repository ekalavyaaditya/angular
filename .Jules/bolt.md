# Bolt's Journal - Critical Learnings

## 2026-05-23 - [Initial Assessment]
**Learning:** The codebase has several components (ShellComponent, DataTableComponent) that call methods or getters in their templates, leading to redundant calculations on every change detection cycle. ShellComponent is not using OnPush, which exacerbates this.
**Action:** Implement ChangeDetectionStrategy.OnPush and memoize template-bound data to reduce CPU cycles and improve UI responsiveness.
