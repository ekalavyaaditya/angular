## 2026-05-30 - [Input Property Caching and Lifecycle Hooks]
**Learning:** When replacing expensive template getters with cached properties in Angular, relying solely on `ngOnChanges` for initialization is insufficient. `ngOnChanges` only triggers when data-bound inputs are explicitly provided or changed by the parent. If a component is instantiated using its default `@Input()` values, `ngOnChanges` may not fire on initialization, leading to uninitialized cached properties.

**Action:** Always initialize cached properties in `ngOnInit` to handle default values, and use `ngOnChanges` to keep them synchronized with subsequent input updates.
