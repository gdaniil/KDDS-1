One entry of the activity feed: an icon disc, a title and a description with the time. 56px tall and full-bleed: it fills its container (the whole 375 screen width) and carries its own 16px side padding.

**Use it for** the event feed on Home and in service histories: payments, petitions, alerts, bills. Settings and menus use `Cell`.

**You provide** `title` («Штраф сплачено»), `description` (one line, truncated so the time stays visible), `time` in 24 hours («14:20»), `icon` (an ic2_* name such as `"Ic2Fine"`, or `<Icon name="…" />`) and optionally `tint`: `accent`, `negative` or `warning` for the glyph. Pass `onClick` to make the whole row a real button (focusable, Enter/Space, pressed state) with the chevron; `chevron` overrides that.

- Put the feed straight on `background-bg-background`, not inside a `background-bg-surface` block: the icon disc is `background-bg-surface` and disappears on white. Don't put it in the 343 column; it spans the screen.
- Group entries under a `FeedDate` per day, newest first. The shipped Home puts 8px (`space-2`) between rows and 16px before the next `FeedDate`.
- A tint never carries the status alone: say it in the title too («Штраф сплачено», «Повітряна тривога»). There is no green tint: green is 2.1:1 on the white disc.
- Known gap kept as designed: the `content-content-secondary` description is 4.3:1 on the light page (4.96:1 in dark).

Don't put buttons or switches in a feed row; open the entry instead. The component draws a one-line description only (56px row). The shipped Home also has 72px rows with a two-line description: build that as a custom piece (`FeedCellWrapped` in `ui_kits/kd-app/main-screens.html`).
