The read-only label/value row: document numbers, amounts, dates. Fills its container.

**Use it for** showing facts about a fine, a payment or a document.

**You provide** `label` (left, `content-content-secondary`), `value` (right, `content-content-primary`) and optionally `icon`: `true` shows the copy icon, or pass your own node. The icon is a real button with a 44×44 tap area: wire it with `onIconClick`, and name it with `iconLabel` when it isn't a copy action (default «Копіювати»).

- A long label ends with «…». The value is never cut: past 60% of the row it wraps, right-aligned, and the row grows from 40px.
- Write values in the system's formats: `1 250,00 ₴`, `23 жовтня`, `АА 1234 ВВ`.
- Copy the value in `onIconClick` yourself and confirm it with a `Toast`.
- Group rows in one `background-bg-surface` block, like `Cell`.
