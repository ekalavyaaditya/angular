# Bolt's Performance Journal

## 2026-07-11 - [Template Getter Memoization]
**Learning:** In Angular, template getters that perform array transformations (like `.map()`) or return new object/array references cause redundant O(N) operations and unnecessary allocations on every change detection cycle. This also breaks identity stability for child components.
**Action:** Use `ngOnChanges` to cache the results of expensive operations in private properties and return the cached value from the getter.
