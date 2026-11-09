A field that opens the platform's own menu: `TextField`'s label, 48px box and states, with the chosen value and an `Ic2Selector` glyph.

**Use it for** picking one of a short list inside a form: who you are to the child, a request topic, a district. Native first: the menu is the system one (iOS pull-down menu, the browser's picker here), never a drawn list. More than about 10 options, or a search: a `Modal size="full"` of `CellSelection` rows or a pushed screen.

**You provide** `label`, `options` (`{ value, label }` or plain strings) and either `value` + `onChange` or `defaultValue`. `onChange` receives the chosen value first, the event second. Optional: `placeholder` (default «Оберіть»), `helperText`, `state="error"` with `message`, `disabled`.

- Nothing chosen: the placeholder in `content-secondary`, so an empty field never looks filled.
- Focus, error and disabled look exactly like `TextField`. The error says what to choose: «Оберіть район, щоб продовжити».
- A real `<select>` lies over the box, invisible: tap and keyboard open the picker and the label is its accessible name.
- Stack it with other fields in one `Card`, `gap={4}`.

Don't use `TextField` for a value that can't be typed, or a `Modal` for a two- or three-item choice.
