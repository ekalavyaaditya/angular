## 2026-05-16 - [OnPush and Async Subscriptions]
**Learning:** Enabling `ChangeDetectionStrategy.OnPush` on components that update state within asynchronous RxJS subscriptions (like those fetching data from a service) will prevent the UI from updating unless `ChangeDetectorRef.markForCheck()` is called.
**Action:** Always inject `ChangeDetectorRef` and call `markForCheck()` inside async callbacks when using `OnPush`, or stick to the default strategy if the component is complex and has many side effects.

## 2026-05-16 - [Lockfile Management]
**Learning:** Running `pnpm install` in the sandbox environment might generate a massive `pnpm-lock.yaml` if it was missing. Including this in a PR for a small optimization violates the "one small improvement" rule and clutters the review.
**Action:** Always check `git status` before committing and explicitly exclude `pnpm-lock.yaml` unless instructed otherwise.
