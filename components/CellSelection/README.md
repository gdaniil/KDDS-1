The selectable row for single- or multi-choice lists, with a check circle on the left. Fills its container; the height is not fixed: the row hugs its content with a 48px minimum (Figma: vertical hug, min-height 48).

**Use it for** picking one or several options («Поштою», «У ЦНАП»).

**You provide** `label`, `selected` and `onClick`. Keep the selection state yourself: for one-of choices set exactly one row `selected`.

- Group the rows like `Cell`: one `background-bg-surface` block with `radius-control`, a `ListCaption` above naming the question.
- Each row is a `role="option"` that responds to taps; wrap the rows in an element with `role="listbox"`. It has no focus stop yet, so keyboard users cannot reach it: name the gap in handoff.
