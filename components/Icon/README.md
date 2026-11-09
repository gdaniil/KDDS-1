One glyph of the `ic2_*` set, drawn in the text colour of its parent.

**You provide** `name` (one of the 131 names in `components/index.d.ts`, `IconName`) and `size` in px (default 24, the drawn size).

- Set the colour on the parent with a `content-*` token: `content-content-primary` by default, `content-content-secondary` for quiet icons, `content-content-accent` for selected ones.
- Components take icons as `<Icon name="…" />` in their `icon` props.
- `Ic2FlagUa`, `Ic2Dtek` and `Ic2DonationBlood` keep their brand colours; `Ic2ProfileEmpty` is two-tone. The list, the sections and the look-alike pairs are in `assets/icons/README.md`.
- `Ic2Kd` is the only brand mark: set it beside the product name in plain type, never draw a logo.

Don't mix in another icon set, emoji or Unicode symbols; if a glyph is missing, leave an empty 24×24 slot and name the gap.
