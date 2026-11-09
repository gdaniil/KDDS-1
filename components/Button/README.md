The action button: five variants in a 48px regular and a 32px small size.

**Use it for** every tappable action that is not a list row. One `variant="primary"` per screen; put the screen's main action at the bottom with `fullWidth`.

**You provide** `label` (verb first: «Оплатити», «Додати авто»), `onClick`, and optionally `icon` (`<Icon name="…" />`) with `iconPosition` `left`, `right` or `only`. An icon-only button needs `aria-label`.

- `variant`: `primary` for the main action, `secondary` for alternatives, `bezeled` for a tinted secondary, `ghost` for a text action with an icon, `elevated` (small only) on busy surfaces.
- `size="small"` for toolbars, filters and inline actions. It is 32px tall and the 44×44 tap area is not built in: widen the hit area where you place it, with a 44×44 `::after` on the button (give the Button `style={{ position: 'relative' }}`, because its inline `all: unset` ignores a class's `position`) or with padding around it.
- Figma draws no icon-only `ghost` and no regular `elevated`: the button then falls back to a plain blue one («Label», or an empty disc in small). For an icon-only button use `bezeled` or `secondary`.
- `disabled` greys it out; `loading` puts a turning `Ic2Spinner` in the icon slot and ignores clicks. Pressed dims it to 70%. Pressed and loading are not drawn in Figma: they are proposals to confirm with design.
- The button hugs its label unless `fullWidth`; it never wraps its label to a second line: a label wider than the container ends with «…».
- Every regular button uses the same label style (16/21 semibold) and a 24px icon; every small one 13/18 semibold and a 20px icon. Pass a plain `<Icon />`: the button sizes and centres it.

Don't put two primary buttons on one screen, use a button as a list row (use `Cell`), or write «ОК» when a verb fits.
