A 108×112 shortcut tile for the Home screen's quick-access row: a service, a live QR-ticket or parking status, or the «Усі сервіси» tile.

**Use it for** the horizontal quick-access row under the Home header. The full services grid uses `ServiceIcon` with a `caption1` label; settings and menus use `Cell`.

**You provide** `type` and `onClick` (the tile is always a real button):
- `regular`: `label` (the service's name, «Штрафи») and `icon` (an `ic2_*` name or `<Icon/>`, `Ic2Fine` for «Штрафи»). Light tile `background-bg-quick-access`, ink `neutral-neutral-gray100`.
- `all`: navy tile with `Ic2Kd`, label «Усі сервіси» on two lines by default. The shipped Home puts it first in the row; the light frame labels it «Міські сервіси».
- `qr-active`: pink tile, red ink, `Ic2Qr`; `label` «QR-квитки» and `status` the count, «(5 шт.)».
- `parking-active`: yellow tile, orange ink, `Ic2Park` in a 4px ring; `label` the car's plate («КА 1234 ІР») and `status` the session timer («00:32», tabular digits). Give it an `aria-label` that says what the numbers are.

- Lay tiles out in one row with an 8px (`space-2`) gap and a `space-5` side padding as the shipped Home does; the row scrolls sideways, it does not wrap, and the next tile peeks out by at least 24px to show that it scrolls.
- The label wraps at 84px to two lines (one line plus `status` on the active looks) and is clipped after that: keep names to one or two short words. `"\n"` forces a break.
- The light tile is `#f7f7f7`, the same as the page in light, and white 80% in dark: set the row on `background-bg-surface`, as in the preview, or it shows only by its shadow.
- The ink stays `neutral-neutral-gray100` in dark too, because the tile turns light there (`content-content-primary` would fall to 1.4:1).
- Pressed dims the tile to 70% (not drawn in Figma, the system's button convention); focus shows the 2px `border-border-accent` ring.

Known contrast gaps in the source, kept as designed: red on the pink QR tile is 2.2:1 and orange on the yellow parking tile is 2.2:1 in both themes, short of 4.5:1 for 13px text and 3:1 for the icons. Don't add more text to these tiles or make it smaller.

Don't use the active looks for anything but a live QR-ticket or parking session, give `regular` a `status` line, or recolour a tile.
