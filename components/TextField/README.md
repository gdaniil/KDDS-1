The text input: label above, value inside, hint or error under it. Single-line by default, 48px tall; `multiline` for free text. Fills its container.

**Use it for** any typed value in a form. For a car's plate use `LicensePlate`; for search use `Search`; for a value picked from a list use `Select`.

**You provide** `label`, and either `value` + `onChange` (controlled) or `defaultValue` (the field keeps its own text). `onChange` receives the new text first, the event second. Optional: `placeholder`, `helperText`, a trailing `icon`, `type`, `inputMode`, `name`, `autoComplete`, `maxLength`.

- Focus turns on by itself while the field has focus (`border-border-accent` outline, `content-content-accent` caret); `state="focus"` forces it.
- Errors: `state="error"` with `message`, one line saying what went wrong and what to do: «Невірний номер. Перевірте формат: АА 1234 ВВ». The hint is hidden while the error shows.
- `disabled` greys label, value and outline.
- Put it in a 343px column; stack fields `space-3` apart.

**Multiline** (Figma 4078:10080 «text-field / multiple lines»): `multiline` turns the input into a textarea in `subheadline` (15/20) that starts at `rows` lines (default 3) and grows with its text; no fixed height and no trailing icon. Same label, states, hint and error. Use it for a description or a comment («Опис проблеми»); give a limit with `maxLength` and say it in `helperText`.

Don't use the placeholder as the label, or show an error before the person has finished typing.
