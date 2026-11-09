A bottom sheet over a dimmed backdrop, for one short decision or a small piece of content on top of the current screen. Fills the screen width, rises from the bottom, `radius-card` corners.

**Use it for** a confirmation before a consequential step (pay a fine, sign a petition), a short explanation with one or two actions («Паркування стало платним»), and short pickers such as filters. Long flows and forms get their own pushed screen with `NavbarRegular`.

**You provide** `title` (sentence case; a question for a confirmation, «Підписати петицію?»), optionally `description`, an `illustration` (the 64–80px service picture above the title), `children` for content between the text and the actions (`CellDataRow`s with the amount, `CellSelection`s), and `actions`: our `Button`s, primary first, then `secondary` «Скасувати». Buttons stretch to the sheet width. Wire `open` + `onClose`; `onClose` receives `"backdrop"`, `"escape"` or `"close"`.

- **Live screens:** render `<Modal open={open} onClose={() => setOpen(false)}>` at the screen root and leave `inline` off. It covers the viewport (`position: fixed`), moves focus into the sheet, keeps Tab inside it, closes on a backdrop tap and Escape, locks page scroll, and returns focus to the button that opened it.
- **Previews and docs:** `inline` draws it statically inside the nearest positioned parent (a phone frame with `position: relative`): no focus move or trap, no Escape, no scroll lock. Never ship `inline` in a real screen.
- `showClose` adds the 44×44 Liquid Glass close button at the top left (Figma «close button=true») and tightens the gaps from 24 to 12; use it when the sheet has no «Скасувати» action or holds a long list.
- `dismissible={false}` when the person must answer with an action (backdrop and Escape do nothing); `alert` sets `role="alertdialog"` for confirmations that interrupt the task.
- `size="full"` for long content (Figma «radiation – fullscreen»): the sheet stops 62px below the top and its content scrolls. `auto` sheets are as tall as their content, up to the same limit.
- Full-bleed rows (`CellDataRow`, `CellSelection`) go in a wrapper with `margin: 0 -16px` so their text lines up with the title.
- The bottom keeps 21px for the home indicator, or the device's `safe-area-inset-bottom` when larger. Use standard iOS sheet motion; the file defines none, so the component has no animation.

Don't put more than one primary button in a sheet, open a sheet from a sheet (close the first, then open the next), or use it for a status message that needs no answer (use `Toast`).
