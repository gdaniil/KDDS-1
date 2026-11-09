An unfilled inline mark: a 16px glyph or status dot and a `footnote` label, 8px apart.

**Use it for** metadata and quiet states inside cards and on detail pages. `type="regular"`: a fact with a glyph in `content-secondary` («23 жовтня», «Шевченківський»). `type="status"`: where something stands, a coloured dot and a `content-primary` label («В роботі», «Виконано»), as in the status header of a detail page. For the one urgent state of a card, use a filled `Badge`.

**You provide** `label`; for `regular` an `icon` (an `ic2_*` name or a node); for `status` a `tone`: `accent` (default, as drawn), `positive`, `warning`, `negative`, `neutral`.

- One line; the label ends with «…» when it does not fit. Several tags in a row sit `space-4` apart.
- The dot never says the state alone: the label always names it.

Don't make a tag tappable; a choice the person taps is a `Chip`.
