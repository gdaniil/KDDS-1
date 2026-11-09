The row of a grouped list: settings, menus and navigation. Fills its container. The height is not fixed: the row hugs its content with a 48px minimum (Figma: vertical hug, min-height 48; the padding stays `space-3` / `space-4`). One line is 48px, a label with a caption 62px, a row with a `switch` 55px, a `segmented` row 52px.

**Use it for** rows that lead somewhere or hold a setting. Choices use `CellSelection`; read-only values use `CellDataRow`.

**You provide** `label`, optionally `caption` (second line), a leading `icon` (`<Icon name="…" />`) and `accessory`: `chevron` for navigation, `switch` with `checked` + `onCheckedChange` for a setting, `segmented` with `segmentOptions` (default «Укр» / «En»), `segmentValue` + `onSegmentChange` for a two-way choice, `none`. Pass `onClick` to make a `none` or `chevron` row a real button (focusable, Enter/Space, pressed state); a `switch` row toggles its switch on a tap anywhere on the row.

- Stack cells with no gap inside one `background-bg-surface` block with `radius-control` and `overflow: hidden`, on `background-bg-background`; put a `ListCaption` above the block.
- The label is `subheadline-emphasized` (15/20), the caption is `caption1` (12/16) in `content-content-secondary`.
- Label and caption stay on one line; keep them short. A longer one ends with «…» and the accessory keeps its place.
- Don't set a fixed `height` on a cell: the 48px minimum comes from the component, and the row grows with its content.

Don't mix chevron rows and switch rows without a reason, or nest a list inside a cell.
