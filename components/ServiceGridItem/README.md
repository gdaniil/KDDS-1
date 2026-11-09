A tile of the Services screen grid: the service's icon and name on a `background-bg-surface` card with `shadow-elevation`, 72px tall, filling its grid cell.

**Use it for** the grid view of the Services tab (`NavbarMain type="services" view="grid"`). The list view uses `Cell`; quick links and FAQ rows use `ServiceIcon` with `type="link"` or `"faq"`.

**You provide** `label` (the service's name: «Штрафи», «Петиції», «ЖКП»), `icon` (an `ic2_*` service glyph name such as `"Ic2Fine"`, drawn like `ServiceIcon` at 24px in `content-content-primary`, or an `<Icon />` node), `onClick` to open the service, and optionally `badge`: `true` shows the «бета» pill, a string shows that text.

- Lay tiles out in two columns in the 343px content column: `display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2)` (8px), so each tile is 167.5px wide. Figma sets the tile between 160 and 167.5px wide; don't go narrower than 160.
- The tile is always a real button: focusable, Enter/Space open it, 70% opacity while pressed, a 2px `border-border-accent` focus ring outside the card. The visible label is its accessible name.
- The badge sits 4px outside the top-right corner: don't clip the grid (`overflow: hidden`) and leave 4px above the first row.
- Keep names short: the label is `footnote-emphasized` (13/18) and wraps to at most two lines, then truncates.
- Write badge text in lowercase like Figma's «бета» («новий»); it is white on `background-bg-accent`, so keep it to one short word.

Don't put the tile on `background-bg-surface` (it would lose its edge), mix tiles and cells in one grid, or add a chevron or a caption line — Figma has neither.
