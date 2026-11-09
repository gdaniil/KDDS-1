The date header between groups of feed entries. 34px tall and full-bleed: it fills its container (the whole 375 screen width) with its own 16px side padding.

**Use it for** splitting a `FeedCell` list by day. Captions above grouped settings lists use `ListCaption`.

**You provide** `label`: «Сьогодні», «Вчора», then the date with a lowercase month («23 жовтня»), adding the year only outside the current one («1 вересня 2025»). It is exposed as a heading (`level`, default 3).

- Set it on `background-bg-background` directly above its group's first `FeedCell`, with no gap.
- Known gap kept as designed: `content-content-secondary` on the light page is 4.3:1 (4.96:1 in dark).

Don't add icons, counts or actions to the header.
