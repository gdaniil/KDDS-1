The floating action button on Liquid Glass: a 48px round icon button, or an icon with a label.

**Use it for** the one action that must stay reachable while content scrolls («Нова петиція» on a list of petitions).

**You provide** `icon` (`<Icon name="…" />`), `onClick`, and either `label` or, for the round icon-only form, `aria-label`.

- Position it yourself: fixed over the content, `space-4` from the bottom and right edges, above the home indicator.
- Both forms are 48px tall; the icon is 24px.
- The glass follows the theme on its own.

Don't show more than one per screen or use it for a destructive action.
