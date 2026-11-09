A selectable 32px pill for filters and quick choices: a real toggle button with `aria-pressed` and a 44px tap area.

**Use it for** a row of filters over a list (topics in 1551 requests, «Сьогодні», «Поруч»), or a short one-of choice right on the screen. Switching between views of the same content is a `SegmentedControl`; a choice inside a form is a `Select` or `CellSelection` rows.

**You provide** `label`, `selected` and `onClick` (the parent keeps the state); optionally `icon` and `disabled`.

- Off: `background-bg-secondary-cta`, `content-primary`. On: `background-bg-primary-cta`, `content-primary-cta`. Label `footnote-emphasized`, padding `space-2` / `space-3`, `radius-pill`.
- Chips sit `space-2` apart. A filter row scrolls sideways and bleeds off the right edge rather than wrapping; a short set may wrap.
- The 32px pill keeps a 44px tap height through the `kd-hit` rule in `bundle.css`, so keep at least `space-2` between rows of chips.
- Disabled is not drawn in Figma; it uses `background-bg-disabled` and `content-disabled`.

Don't use a chip for an action («Додати»): that is a small `Button`.
