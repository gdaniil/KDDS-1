A 1px line in `border-border-regular` that fills its container, with `role="separator"`.

**Use it for** splitting parts of one card (facts from their action, link rows, stacked key-value rows). Cards on a page are separated by space, not by dividers, and rows in a grouped `Card` need none.

**You provide** nothing; `inset` starts the line after the `space-4` side margin, for rows in a `Card padding="list"`.

- Give it the same space above and below (usually `gap={3}` on the card).
- In dark the line is faint by design; don't make it thicker or lighter.

Don't use it as decoration around every block, or between cards.
