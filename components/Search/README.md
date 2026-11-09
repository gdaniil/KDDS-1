The search bar of the blue Home header: a white field and a white «Закрити». Fills its container (375px).

**Use it for** search at the top of Home, on `background-bg-accent-home`. On other screens use `NavbarEnhanced` `type="search"`.

**You provide** `value` + `onChange`, or `defaultValue`; `onSubmit` (Enter), `onClear` (the × in the field, after it clears) and `onCancel` («Закрити», a text-only button: clears, drops focus, then calls you).

- The focused look follows real focus; `focused` forces it.
- Its white «Закрити» only reads on the blue header: never place it on `background-bg-background` or `background-bg-surface`.
