The on/off switch, 51×31: on is the brand blue, off the iOS grey track.

**Use it for** a setting that takes effect at once. Inside a list row use `Cell` `accessory="switch"`, which draws this switch.

**You provide** `checked`, `onChange` (gets the new value) and `aria-label` naming what it turns on.

Don't use it for choices that need a confirm or save step; use `CellSelection` or a button instead.
