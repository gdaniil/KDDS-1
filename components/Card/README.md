The white surface block that holds content on the gray page: a grouped list of rows, one card per thing, a card of fields or a section of a detail page.

**You provide** the `children`, a `padding` that matches the content, and a `gap` when the children are not rows. Optional: `caption` (a `ListCaption` above the block), `elevated={false}` for a flat block, `onClick` to make the whole card one button, `as` for the element. It fills its container: put it in the 343px column.

The values are the shipped ones, measured on the real-app example pages, where this block was built by hand four times (`Group`, `Section`, `FieldCard`, `ItemCard`): `background-bg-surface`, `radius-control`, `shadow-elevation`. The Figma spec frames draw grouped blocks flat; the shipped screens add the shadow, so it is on by default.

| What you put in | Props | Seen in |
|---|---|---|
| A grouped list: `Cell`, `CellSelection`, `CellDataRow` rows, no gap between them | `padding="list"` (4px top and bottom, none at the sides), `caption` for its heading | Profile and Services lists, a switch row in a form, a choice of document |
| One thing of the user's: an address, a car, a request, a status | `padding="regular"` (16, the default), `gap={4}` (`gap={3}` for a tighter request card) | `lists.html` |
| A group of related fields | `padding="regular"`, `gap={4}` between `TextField`s; `gap={5}` when a text area, photos and a button share the card | `forms.html` |
| A section of a detail page: status, steps, facts, links | `padding="large"` (24), `gap` 2–4 inside, `as="section"` | `content-pages.html` |
| A result that opens something | `onClick`, usually `padding="large"` and `gap={4}`: status, chevron, title, tags | the «Result card» |

**Gaps between cards** (set them on the parent, not on the card): one card per thing `space-3` (12) apart; stacked sections of a detail page `space-1` (4) apart; grouped blocks on a root tab `space-4` (16) apart, `space-6` (32) before a captioned group. The caption sits `space-2` (8) above its block.

- One idea per card. Don't nest a card in a card, and don't put dividers between cards: the gap separates them.
- A grouped list is one card with rows, not a card per row. A thing with a status, a second line of facts or its own action gets its own card.
- Fields always sit in a card, never straight on the page background. Related fields share one card.
- A clickable card is one tap target: put only text and icons inside (no `Button`, link, `Switch` or field), and say where it goes with a chevron. Need several actions? Use a plain card with real buttons inside.
- A grid of `ServiceGridItem` or `QuickAccessItem` tiles is not wrapped in a card: each tile is its own surface. A caption over a grid is a `ListCaption` on its own.
- Keep the shadow. Use `elevated={false}` only where a mini-app is drawn flat on purpose (blocks separated by fill alone).
- Dark theme: the surface is lighter than the page and the shadow nearly disappears, so blocks stay apart by fill. `background-bg-subtle` equals the page colour in dark: a subtle disc or tile inside a card needs `border-border-regular`.
- A one-off padding goes in `style` (`style={{ padding: "var(--space-4) var(--space-5)" }}`), always from the `space-*` steps.
