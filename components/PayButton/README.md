The branded payment button for Apple Pay, Google Pay or Дія, 48px tall.

**Use it for** the payment step only, next to or instead of the primary `Button`.

**You provide** `provider` (`apple`, `google`, `google-dark` or `diia`), `onClick`, and for `diia` the `label` beside the mark. `fullWidth` stretches it like a bottom action.

- Show only the providers the user's device and the service support; Apple Pay on iOS, Google Pay on Android.
- The logos keep their brand colours in both themes; don't recolour or redraw them.
- Figma has no disabled state for these: hide the button instead of disabling it.
