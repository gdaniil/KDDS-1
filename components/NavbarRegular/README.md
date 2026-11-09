The bar of a pushed screen: back button, centred title and an optional action, with the status bar.

**You provide** `title` and a `variant`: `back`, `back-action` with `actionLabel` («Готово») and `onAction`, or `two-icons`. Wire the leading slot with `onBack` (back arrow, «Назад») or `onClose` (close glyph, «Закрити», for flows that close), or pass any `leadingAction={{ icon, label, onClick }}`. Put one trailing glyph with `trailingAction={{ icon: "Ic2ShareIos", label: "Поділитися", onClick }}`; it works on `back` and `two-icons` (on `back-action` the text action owns that corner). `label` is the button's `aria-label`: plain Ukrainian words.

- Every slot is a real `<button>`: the 24px glyph stays where Figma draws it and the tap area is 44×44 around it, with the focus ring (`border-border-accent`, 2px) and 70% while pressed, like `Button`. The default back arrow is a button even without `onBack`; pass `onBack` to make it do something. The glyph takes the bar's ink: `content-content-primary`, or `content-content-primary-invert` when `inverted`.
- `transparent` for detail pages: no fill and no bottom border, the glyphs sit on the page background, and the title is left out unless you pass one. Use it with `onBack` and a share `trailingAction` («Transparent detail navbar» in `patterns.md`).
- `inverted` for white content on a coloured header (`background-bg-accent-home`).
- `showProgress` adds the thin progress bar for multi-step flows. It is a fixed-length bar: there is no `value` prop yet, so it cannot show «Крок 2 з 3».
- The title is always centred on the bar's full width; a title too long for the space between the slots ends with «…». Keep it to one short line.
- The action sits on the title's baseline; with `onAction` it is a real button with a 44px-tall tap area. A very long action ends with «…» so the title keeps at least 64px.
- `leadingIcon` and `trailingIcon` (two-icons only) still take a node and draw it as given, and `false` still empties a slot. Don't wrap your own button in them any more: use the props above.
