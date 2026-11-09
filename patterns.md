# Patterns

Kyiv Digital is a super app: a shell around many small apps (parking, library, radiation map, power schedule, petitions, blood donation, 1551 requests…). Each mini-app may look very different from the next. This page says what stays the same everywhere and what is yours to design, then lists the patterns that recur in the shipped app. The real screens are rebuilt in `ui_kits/kd-app/`: `main-screens.html`, `lists.html`, `content-pages.html`, `forms.html`, `custom-designs.html` and `empty-states.html` (plus the synthetic `index.html`).

## The contract: tokens are fixed, shapes are free

The components are shortcuts, not a fence. If a screen needs something the system has no component for, build it. Build it from tokens and it belongs to the system; build it from loose hex values and it does not.

**Fixed everywhere (the contract)**

- Colour, type, space, radius and shadow come from tokens only: `content-*`, `background-*`, `border-*`, `vibrant-*`, `--space-1…6`, `--radius-*`, `--shadow-elevation`, the type-style classes. No hex, no px font sizes, no new shadows.
- Both themes work (`data-theme="light"` and `"dark"`). Check every custom piece in dark before calling it done.
- The screen frame is a plain 375×812 rectangle: square corners (no `border-radius` on the frame), no border, outline or shadow, no device bezel. Don't round it to look like a phone and don't outline it in grey. The page or canvas behind it separates it by fill alone (`background-bg-background` on `background-bg-surface`). Rounded corners belong to what is inside the screen (cards, sheets), never to its frame.
- Every tappable thing is at least 44×44, with a visible focus ring for keyboard users.
- Copy follows `copywriting.md`: Ukrainian, plain words, a button names its result, an error says what went wrong and what to do next.
- A screen starts with a navbar (`NavbarMain` on the three root tabs, `NavbarRegular` or `NavbarEnhanced` everywhere else). The navbars own the status bar. There is no tab bar yet: leave it out.
- Status is never shown by colour alone: pair it with a word or an icon.
- Native first: alerts, menus, pickers, share and system sheets come from the platform, not from our components (see Native first below).

**Free (your call)**

- Layout and composition: cards, grids, hero blocks, maps, full-bleed images, a different rhythm from the standard 343px column.
- Imagery and illustration, including a mini-app's own identity: cover art, a map, a brand colour from the `vibrant-*` palette.
- Your own components: small, named, built from tokens (below).
- Density and shape within the radius and space scales: a mini-app may be tighter or airier than the shell.

### How to go custom without leaving the system

1. **Look for a native control first, then a component.** If the platform has one, use it as is (see Native first). If a component exists, use it with props. Do not draw a look-alike of either.
2. **Build the missing piece as one small named function** (`function TimeSlot(...)`) with a one-line comment: `/* custom: TimeSlot — Figma 4067:4633 */`. Style it with tokens and type classes.
3. **Declare a one-off value once**, as a local CSS variable at the top of the screen, with the comment `/* from Figma, not a system token */`. Never scatter literals. A map overlay, a book-cover tint or a 16px sheet corner are fine this way. If the value differs per theme, declare it on the frame that carries `data-theme`, not on `:root`, so it resolves with the right theme.
4. **Photos, covers, maps, illustrations and partner logos are assets**, not tokens. Use a neutral token-coloured placeholder with an `aria-label` until the asset exists.
5. **Say what you built.** A custom piece that appears on three screens, or in two mini-apps, is a candidate for a component (see the register below).

If a screen breaks one of the fixed rules on purpose, write the reason next to it in the code. That is the only way to keep both the freedom and the consistency.

## Native first

When the platform has a control for the job, we use the native one and don't design our own. Native controls follow every OS update for free (Liquid Glass on iOS 26 arrived without a line of our code), already handle VoiceOver, Dynamic Type, dark mode, haptics and the keyboard, and people know them from every other app. A custom look-alike starts to age with the next OS release, and we have to maintain it.

**Use the native control for**

| Job | iOS | Android | Not this |
|---|---|---|---|
| Confirm or cancel an action: a question, one or two sentences, two buttons | Alert (`.alert`, `UIAlertController`) | Material dialog (`AlertDialog`) | A `Modal` with two `Button`s |
| Pick one of a short list (who you are to the child, a request topic, a sort order) | Pull-down or pop-up menu (`Menu`, `Picker` with `.menu`, `UIMenu`) | Dropdown menu (`ExposedDropdownMenu`) | A `Modal` of `CellSelection` rows |
| Actions on one item (edit, share, delete) | Context menu or action sheet | Overflow menu or bottom-sheet menu | A custom popover |
| Date and time | `DatePicker` | Material date and time pickers | A drawn calendar grid |
| Share | Share sheet (`ShareLink`, `UIActivityViewController`) | Android sharesheet | Our own list of messengers |
| Photo, camera, file | `PHPicker`, camera, document picker | Photo picker, system file picker | Our own gallery |
| Sheet presentation | System sheet with detents; our content inside | `ModalBottomSheet` | A hand-made slide-up animation |
| Permissions, keyboard types, pull to refresh, swipe actions | System | System | Anything drawn |

**What stays ours inside a native control**

- The words. The title is a question («Скасувати звернення?»), the buttons name the result («Так, скасувати» / «Ні, залишити»), by `copywriting.md`.
- Roles, not colours. An action that loses data or can't be undone gets the platform's destructive role (red on iOS); the way out gets the cancel role. Button order, fills and placement are the platform's.
- The tint. The app sets its accent once as the global tint; don't recolour single alerts or menus.

**Go custom only when**

- The platform has nothing for the job: a licence-plate input, an hour grid, a map sheet.
- The decision needs content a native control can't hold: an amount with `CellDataRow`s, an illustration, a field. That is a `Modal`.
- The list is long or needs search (more than about 10 options). That is a `Modal size="full"` with `Search`, or a pushed screen.

Write the reason next to the custom piece in the code, as with any other broken rule.

**In mockups** draw native controls from the current Apple and Material UI kits, not from our components, and name the layer `native / alert`, `native / menu` and so on, so it's clear nothing needs to be built. In the HTML kits under `ui_kits/` a native control is a look-alike picture marked `/* native: menu */`: it shows the screen, it is not a component to ship.

## Screen archetypes

The shipped screens fall into five kinds. The first four are tight and repeat; the fifth is open.

| Archetype | Skeleton | Built from | Page |
|---|---|---|---|
| Root tab (Home, Services, Profile) | Large `NavbarMain` that collapses on scroll, content on a rounded sheet or captioned groups | `NavbarMain`, `QuickAccessItem`, `FeedCell`, `ServiceGridItem`, `Cell`, `ListCaption` | `main-screens.html` |
| List of things | Navbar (back plus one action, or tabs), one intro line, cards or a grouped block, an add row last | `NavbarRegular`, `NavbarEnhanced`, `Cell`, `Button`, `FAB` | `lists.html` |
| Detail page | Transparent navbar, a stack of full-width surface cards: status, steps, facts, links | `NavbarRegular`, `Cell`, `Button`, `Toast` | `content-pages.html` |
| Enter or edit data | Navbar with a progress bar, field cards, one primary action pinned to the bottom | `NavbarRegular`, `TextField`, `CellSelection`, `Modal`, `Button` | `forms.html` |
| Mini-app, custom | No fixed skeleton. Keep the navbar, the tokens, both themes and the 44px rule; design the rest | Anything, plus named custom pieces | `custom-designs.html` |

## Recurring patterns

Each row is something that repeats across screens. The recipe uses components and tokens; the rule is the one thing to remember. Numbers are the shipped values, already expressed as `space-*` steps.

### Chrome and navigation

| Pattern | Recipe | Rule |
|---|---|---|
| Root tabs without a tab bar | `NavbarMain type="services" \| "profile"` with `onHomeClick`; the page dots show the position. | One `NavbarMain` per root tab. Don't draw a tab bar or add a fourth root screen. |
| Large header that collapses | Expanded `NavbarMain scrolled={false}` as the first child of the scroll area; a collapsed `scrolled` bar pinned on top, shown once `scrollTop` passes (expanded height − collapsed height). | Swap exactly under the collapsed bar so nothing jumps. Measure the heights; don't copy Figma's 98. |
| The navbar action tells the list's job | `NavbarRegular back-action` with «Змінити» for editable lists; the trailing info icon for informational ones; a plus-circle when the list grows. | One trailing action per bar. |
| Tabs in the bar split one list | `NavbarEnhanced type="tabs"` (active / archive, people / sessions). | Two tabs of the same list; each tab owns its empty state. |
| Wizard chrome | `NavbarRegular` plus a thin progress bar on its bottom edge, a close or back glyph, the next action pinned below. | Show real progress. Pick close or back once per flow and keep it in the same corner. |
| Transparent detail navbar | Back and share on the page background, no fill, no title: `NavbarRegular transparent` with `onBack` and a share `trailingAction`. | Both glyphs are real buttons with labels. |

### Grouping and cards

| Pattern | Recipe | Rule |
|---|---|---|
| One grouped block of rows | `<Card padding="list" caption="…">` with `Cell`, `CellSelection`, `CellDataRow` stacked inside, no gap. The surface, `radius-control`, 4px top and bottom and `shadow-elevation` come with `Card`. | Rows that only navigate or toggle go in a block. |
| One card per thing | `<Card gap={4}>` (padding `space-4` and `shadow-elevation` by default); cards `space-3` apart, set on the parent. | Anything with a status, a second line of facts or its own action gets its own card. |
| Entity card anatomy | 40px icon disc (or avatar) → eyebrow (provider, car name, party) in secondary → title (address, plate, name) → one footer that carries the status. | The identifier people look for is the title. Category goes above, status goes below. |
| Stacked sections on a page | A detail page is full-width `<Card padding="large" as="section">`s (24 inside) 4px apart, the gap set on the parent. | One idea per card. Don't nest cards or put dividers between them. |
| Captioned groups | `Card caption` (a 26px `ListCaption` 8px above the block); 32px between captioned sections, 16px between plain groups. | One caption per block. |
| Intro, things, add row | One centred secondary sentence saying why the list exists, then the cards, then an add row in its own block. | The add row is link-coloured, starts with a verb («Додати адресу»), and comes last. |
| Fields in a surface card | Related `TextField`s share one `<Card gap={4}>` (padding `space-4`, 16px between fields); `Card` carries the shadow. | One card per group of related fields. Don't put a field straight on the page background. |

### Status

| Pattern | Recipe | Rule |
|---|---|---|
| Three status footers | A pill badge when one urgent state; hairline-separated status rows when several; a quiet check and a date when just confirmed. | Every status has a word and an icon. Green means fine, orange means ends soon. |
| Status header | The first card of a detail page says where it stands: a dot and a word, or a hero icon and one sentence. | One status per card. |
| Step timeline | Done, current, pending markers; the date goes with the step. | Current step in accent. The state word is in the `aria-label`. |
| Proof first | Approved and valid states open with the QR or the plate and one sentence, then the steps or facts. | Proof first, explanation after. |

### Actions

| Pattern | Recipe | Rule |
|---|---|---|
| Primary action pinned to the bottom | One `Button variant="primary" fullWidth` fixed above the home-indicator zone, with an optional 48px secondary back button before it. | Forms pin the action and keep it enabled; show the error instead of disabling it. |
| Inline actions on detail pages | A bezeled `Button` with two icon-only secondaries on one row, or a link row. Feedback by `Toast`. | Detail pages don't pin an action. If one must stay visible, build a sticky bar on purpose. |
| Corner toggle | A 32px icon-only `Button` in the card's top-right: primary and filled star means saved, secondary and outline star means not. | State is in the variant and the glyph; the `aria-label` says what the next tap does. |
| Floating filter | `FAB` centred 40px above the bottom; the list gets bottom padding so the last card clears it. | One FAB per screen. Centred for filter or sort, right-aligned for create. |

### Forms

| Pattern | Recipe | Rule |
|---|---|---|
| Validate on press, fix inline | `TextField state="error"` with one line under the field; the same wording for every required field; clear it as soon as the value is valid. | Say what went wrong and what to do. Don't flag a field the person hasn't reached. |
| Lookup next to typing | A shortcut («Є цей документ у Дії?») under the manual field. A failed lookup falls back to the same fields, prefilled. | Say what was not found and what to do next. Keep what the person typed. |
| Pick from a list | A field that looks like `TextField` with a chevron; it opens the native menu. More than about 10 options, or a search: a `Modal` of `CellSelection` rows or a pushed screen. | Draw an unselected value differently from a chosen one. Don't use `TextField` for what can't be typed. |
| Choose a type, then enter its number | The question as a caption above a card of `CellSelection` rows, then the value field in its own card. | Keep the question a caption, not a heading. |
| Free text with attachments | One card: text area, a 3-column photo grid with a close button on each tile, a secondary «Додати зображення». | Cap the grid and disable the add button at the cap. The add button is not the step's primary action. |

### Content and lists

| Pattern | Recipe | Rule |
|---|---|---|
| Stacked key and value | Label (footnote, secondary) over value (subheadline, emphasized), with a trailing action such as copy. | Stacked when values are long; `CellDataRow` when both fit on one line. |
| Links out | Hairline-divided rows with an external-link or chevron glyph; contact rows with a link-coloured icon. | One contact per row: the value is the label, the kind is the caption. |
| Result card | `<Card onClick padding="large" gap={4}>`, one real button: status line, chevron, title, tag pills. | The card is one tap target. Don't put a link inside it. |
| Feed grouped by day | `FeedDate`, then `FeedCell`s 8px apart, groups 16px apart. | Newest first; the title says the event; no buttons or switches in a feed row. |
| Quick-access row that peeks | A horizontal row of 108×112 tiles; the next tile shows 24px or more. | Don't wrap the row. |
| Grid and list of one catalogue | One data array; `ServiceGridItem` in two columns, or `Cell`s with a chevron. | Same labels and order in both views; never mix tiles and cells in one group. |
| Destructive row alone | «Вийти» in its own block, red label, no icon. | Destructive actions are away from navigation rows, and red always has a verb. |
| Assets are placeholders | A neutral `background-bg-subtle` block, `role="img"`, `aria-label`, a code comment. | Keep the slot size. Don't fake a photo. |

### Empty and no-result states

Drawn in Figma for two cases (4117:14098, 4117:15264), rebuilt in `empty-states.html`. An empty state is one explanation in the middle of the free area. It has no card and no button of its own: the next step is a control that is already on the screen.

| Pattern | Recipe | Rule |
|---|---|---|
| Empty list after filters | The navbar stays. Under it, one centred paragraph (`subheadline`, `content-content-secondary`, at most 327px wide) below an optional illustration slot of 280×228, with 48px between them (`space-6` + `space-4`). The filter `FAB` stays at its place; a 6px accent dot on its icon says that filters are applied. | The text says what was not found and which control to use. The FAB keeps a label that names the control, and its `aria-label` says that filters are on, because the dot is not read. |
| Search with no result | The query stays in the search field, with a close button beside it and the keyboard up. The paragraph is centred in the space above them. | Keep what the person typed so they can fix it. The text says what was not found and what to check. |
| Where it sits | Centred between the navbar and the bottom controls, with the home-indicator zone kept clear. | Don't pin it to the top and don't scroll it. |
| The picture | An illustration is an asset: a neutral token-coloured placeholder with `role="img"` and an `aria-label` keeps the slot until it exists. | The state is always in words. The picture adds nothing the text lacks. |
| Copy | By `copywriting.md`, section 6: «Порожній стан» is the state plus a step that is available, «Немає результатів» is what was not found plus what to check. | Don't start with «На жаль» out of habit. Don't promise content the screen doesn't offer. |

### Mini-app screens (free layouts)

These come from the `misc / custom designs` section. They keep the tokens and drop the standard layout.

| Pattern | Recipe | Rule |
|---|---|---|
| Map-first screen | A full-bleed map is the screen. A 144–200px top fade (`background-bg-background` to transparent), a transparent navbar cropped to the 54px status area, a row of glass controls at 62px, and a sheet or glass card at the bottom. | Reserve the 54px status area. Keep every control 44px. Don't put text straight on a map without a fade or a glass fill. |
| Persistent bottom sheet | `background-bg-surface`, 38px top corners, 36×5 grabber, `space-3` gap, inner scroll with a hidden scrollbar, no backdrop. | `Modal` is for a decision. A persistent sheet is for when the map stays the main thing. |
| Glass over imagery | Translucent fill from `bg-surface` (about 78%), `backdrop-filter: blur(20px)`, a 1px rim, `shadow-elevation`. Declare fill, blur and rim as local variables on the themed frame. | Build glass from a system surface token and one declared blur. Never hard-code a white or black rgba in a rule. |
| Translucent search overlay | A scrim (blur plus a per-theme tint) over the blurred previous screen, the system `Search` on top, result-type chips, captioned sections of 48px rows. | Declare the tint per theme. Ink on the scrim is fixed white, so don't put `Cell` on it. |
| State grid | `SegmentedControl` (7 days) plus a 4-column grid of 48px tiles, one per hour, coloured from `chart-*`, with a legend of 16px dots below. | Use `chart-*` tokens for data colours so both themes work. Each tile says its state in words. |
| Horizontal shelves | Title plus a ghost «Всі» button, then a row of 104px items that bleeds off the right edge. | Let it bleed to show it scrolls, and give every shelf a way to see all. |
| Cover from tokens | Items with no photo get a typographic cover from a small palette (`vibrant-*`), spine strips, the `Ic2Kd` mark and a three-line title. | A photo belongs to the mini-app. The fallback is built from tokens, never an invented illustration. |
| Facts card with one action | Header (asset, title, address, small icon button), a divider, four key-value rows, one full-width primary `Button`. | One primary action per card. Secondary actions are icon buttons in the header. |

## Checklist for a new mini-app screen

1. Pick the archetype. If none fits, say so in a code comment; that is allowed.
2. Start with the navbar. Keep the screen at 375pt and use the `space-*` scale for every gap. Draw the frame square, with no border or outline.
3. Reach for a native control, then a component, then a pattern from the tables above, then a custom piece.
4. Write each custom piece as a named function with the `/* custom: … */` comment; declare one-off values as local variables with `/* from Figma, not a system token */`.
5. Use placeholders for photos, maps, covers and logos, each with an `aria-label`.
6. Show both themes. Look at the dark one: `background-bg-background-invert` does not flip, and thin borders get faint.
7. Check 44×44 on every tappable thing, including icons in navbar slots and small buttons.
8. Write the copy by `copywriting.md`: a button says what happens, an error says what to do.
9. Design the empty, error and expired states (Empty and no-result states above). Figma draws almost none of them.
10. List what you built, so the repeated pieces can be promoted.

## Custom pieces register

Across 27 frames there are about 70 named custom pieces. About 15 of them repeat across sections; those are the candidates to become components. The rest stay local on purpose.

**Candidates to promote** (seen in more than one section; the "Seen" counts are uses in the rebuilt frames)

| Piece (names used on the pages) | Seen | What it is | Proposed shape |
|---|---|---|---|
| Surface block (`Group`, `Section`, `FieldCard`, `ItemCard`) | 20 / 22 / 6 / 12 | The white block on the page: `radius-control`, `shadow-elevation`, 4px or `space-4`–`space-5` padding **Done: `Card`** with `caption`, `padding` (list · regular · large · none), `gap`, `elevated`, `onClick`; no grid layout (tiles are their own surfaces). The kit pages use it. |
| Navbar slot buttons (`NavIcon`, `IconButton`, `NavIconButton`, `DetailNav`) | 4, 13, 3, 5 | A 24px glyph in a navbar slot with a 44px tap area | Done: `onBack` / `onClose` / `leadingAction` / `trailingAction={{ icon, label, onClick }}` on both navbars, plus `NavbarRegular transparent`; the example pages use them |
| Cell tones (`AddRow`, `LinkRow`, `ActionRow`, `OutRow`, `ContactCell`, the red «Вийти» row) | 3, 4, 3, 4 | A row whose whole label is an action: link blue, destructive red | `Cell tone="default" \| "link" \| "negative"`; trailing `external-link`, `value`; a 40px lead |
| Key-value rows (`DetailField`, `KeyValueRow`, `FactRow`, `MetaRows`) | 12, 4, 5, 2 | Label over value, or a compact row with a 20px glyph | `CellDataRow layout="stacked"`, `density="compact"`, leading icon and tone |
| Status marks (`StatusBadge`, `StatusLine`, `TagPill`) | 2, 6, 2 | A pill, or a dot and a word | Done: `Badge { label, tone, icon }` (filled pill) and `Tag type="status" { label, tone }` (dot and word), from Figma 4078:9583 and 4081:10515; the example pages still use their local pieces |
| Steps (`TimelineStep`, `StepRow`, `StepProgress`) | 5, 3, 4 | Done, current and pending markers; a real-width progress bar | `Steps { items }`; `NavbarRegular progress` (0–1) instead of the fixed `showProgress` |
| Chips (`MetaChip`, `OverlayChip`, the library's topic chips) | 6, 4, 2 rows | A 32px pill, selectable, on a surface or on a scrim | Done on a surface: `Chip { label, selected, onClick, icon }` (Figma 4078:10093). Still open: the `inverted` chip on a scrim |
| Divider (`Hairline`) | 9 | 1px `border-regular`, optionally outset | Done: `Divider { inset }` (Figma 4078:9699). The outset version stays local |
| Field variants (`TextArea`, `SelectField`) | 1, 3 | A multi-line field; a field that opens a picker | Done: `TextField multiline` (Figma 4078:10080) and a separate `Select` (Figma 4078:10057, a real `<select>`, placeholder in secondary) |
| `ActionBar` | 4 | The pinned primary `Button`, optional 48px back button, safe-area padding | `BottomActions` with `onBack`; one primary only |
| Images (`BookCover`, `CoverPhoto`, photo and avatar placeholders) | 8, 6, 6 | A cover or a round photo, or a placeholder when there is no asset | `Avatar { src, size }` and `ImageSlot { src, fallback }` |
| Glass family (`GlassButton`, `GlassCard`) | 4, 1 | Controls and cards over a map or blurred screen | `Button variant="glass"` at 44px and 32px; `Surface variant="glass"` shared with `FAB` and `Toast` |
| Floating search (`.glass-field` with a close button, `empty-states.html`) | 1 | A pill search field with a round close button over a screen, bottom of the screen | `Search variant="glass"` with `onClose`; shares the glass tokens with the glass family |
| `MapSheet` | 1 | A persistent sheet with no backdrop | `Modal modal={false}` with `radius` and detents |
| `TimeSlot` plus `LightGlyph` | 24, 25 | A tile per hour with a bolt glyph | `TimeSlot { hour, state }`; export the glyphs as `Ic2LightOn` and `Ic2LightOff` |
| `CollapsingTab`, `FeedCellWrapped`, `ValueCell`, `PillSearch`, `PlateDisplay` | 6, 4, 1, 1, 1 | Gaps in `NavbarMain`, `FeedCell`, `Cell`, `Search`, `LicensePlate` | `NavbarMain scrollRef`; `FeedCell lines`; `Cell accessory="value"`; `Search variant="neutral"`; `LicensePlate readOnly size="sm"` |
| `EmptyState` | 2 | The centred explanation with an optional illustration slot (280×228), no card, no button | `EmptyState { art, text }`; the illustration comes from the mini-app |
| `FilterDot` | 1 | A 6px accent dot on a `FAB` icon: filters are applied | `FAB` prop for the dot (`indicator`), with the state in the `aria-label` |

**Stay local** (a mini-app's own look, or an asset): `FeedSheet`, `RightsFooter`, `PhotoTile`, `VoteBar`, `AvatarStack`, `MapPin`, `ZoneBar`, `StationRow`, `LevelInfo`, `TopCard`, `PromoTile`, `PromoRow`, `QrPlaceholder`, `SummaryRow`, `ResultCard`.

## Gaps in the components, found while building the examples

Ordered by how much they hurt. None of these was changed in the code; the READMEs now say what is true.

**Touch and keyboard**

- Done: both navbars draw the back arrow and the slot icons as real buttons (44×44, `aria-label`, focus ring) through `onBack`, `onClose`, `leadingAction` and `trailingAction`. Screens no longer wrap them.
- A small `Button` is 32px tall and has no 44px hit area. `className` can't position it, because the inline `all: unset` wins: give it `style={{ position: 'relative' }}` before adding an `::after`.
- `SegmentedControl` segments are 28px tall (40×28 with seven options). The `onAction` button of `NavbarRegular` was 43px; it is 44px now.
- `TextField` takes focus only on its 20px input line, not on the 48px box or the label. `CellSelection` has no focus stop. `Button` has no `aria-pressed`, so a favourite star has to change its `aria-label` instead.

**Bugs**

- `NavbarMain` page dots on the light Services and Profile bars are invisible; the AQI glyph on the collapsed Home bar is invisible in light.
- `NavbarRegular` is 99px tall (Figma 98). `StatusBarIPhone` is laid out for 393px, so at 375px its right block is clipped.
- White ink on yellow is 1.6:1 and on green 2.1:1 where status pills use it as drawn; `background-bg-background-invert` does not flip in dark, so done badges are weak there.

**Missing props and variants**

- `NavbarMain`: the return pill says «Головна», the shipped frames say «Новини» with a double chevron; no `scrollRef`; the dark Home draws an older header.
- `NavbarRegular`: `showProgress` is a fixed 26px bar. Done: the `transparent` variant, and `trailingAction` on every variant but `back-action`.
- `Cell`: no link or destructive tone, no trailing value, no 40px lead. `CellDataRow` is horizontal only. `FeedCell` has one description line.
- `TextField`: its error line is 13/18 where the frame draws 12/16. Done: `multiline`, and the picker field as `Select`.
- `Search` has the white Home field only. `LicensePlate` is an input only. `Modal` has no persistent sheet. `SegmentedControl` takes seven options, though the docs say 2–5.
- **Floating glass search (Liquid Glass):** `Search` exists only on the blue Home header and inside `NavbarEnhanced`. The pill field at the bottom of a screen, with a round close button beside it (Figma 4117:15266), is built on each page from a one-off translucent fill with a blur. A hard-coded white fill breaks in dark, because there is no Liquid Glass token. `empty-states.html` derives the fill from `bg-surface` at 78% per theme as a stopgap; that is not a system value. Needs: glass tokens (fill, rim, blur, per theme) and `Search variant="glass"` with a close button.
- No `Avatar`, `Steps` or `ActionBar` (the action bar is not drawn in Figma yet). Done: `Badge`, `Tag`, `Chip` and `Divider`. The `Ic2Light` on and off glyphs are not public, and the map pin, car-gear and heart-health glyphs are missing.

**Docs the examples corrected:** the small-button tap area, the `Cell` height with a caption, `FeedCell` gaps and the two-line row, the `QuickAccessItem` position and side padding, and the flat grouped lists (shipped blocks have 4px padding and a shadow). They are fixed in `README.md` and in the component READMEs.

## Values outside the tokens

Each of these sits in a declared local variable on its page. Where a value is wanted by more than one screen, ask for a token.

| Value | Where | Suggestion |
|---|---|---|
| Sheet corner 38px, glass card 34px, feed sheet 16px | map sheet, parking, Home | A `radius-sheet` token, or stay local |
| Glass fill (about 78% of `bg-surface`), rim, blur 20px | map screens, bottom search field | `glass-fill`, `glass-rim` and a blur, per theme |
| Search scrim: blur 32px, black at 64% (light), 72% (dark, not drawn in Figma) | search overlay | A per-theme `scrim-translucent` |
| Status area 54px; home-indicator zone 34px or 21px | all frames | `status-bar-height`; use `env(safe-area-inset-bottom)` in the app |
| Icon disc 40px, tint disc 32px, status dot 16px, cover 104×160 | lists, content, library | Stay local |
| «No power» pill fill borrows `chart-chart-power-off`; green tint behind the heart is `vibrant-green-10`; the pink «on moderation» dot | lists | Semantic status tokens (`bg-status-off`, `bg-positive-subtle`), or a decision on pink |
| 24px side gutter on one service landing | donor frame | `space-5`; keep 16px as the default |
| Figma type styles that are not in the scale (19/590, 13/16, 15/510, 11/14) | content pages | Fold into the existing scale |
| Empty state: illustration slot 280×228, text width 327px, 48px between them; keyboard 307px and search toolbar 64px (native) | empty states | Stay local |

## Open questions for design

Left as drawn in Figma; each needs a decision.

- **Copy against `copywriting.md`:** three apostrophes in use (ʼ, ’ and '), the README uses ’; «Добрий день!» in Figma against «Доброго дня!» in `NavbarMain`; «Е-квиток» against «QR-квиток»; «Всі» against «Усі»; an exclamation in «Забирайте своє авто!»; the Home pill «Новини» against «Головна».
- **Formats:** «680 ₴» and «1720 ₴» against «680,00 ₴» and «1 720 ₴»; numeric dates (20.04.2022) against «23 жовтня»; «см3» against «см³»; two separators (⋅ and ·).
- **Typos in the Figma copy:** «Транпортна карта» and «Психологічна стан повітря» were corrected on the pages; «громадськму», «питаннь», «по окремим станціям» and «випромінювання не перевищують» were kept as drawn.
- **Plates** in several frames may use Latin look-alike letters (`KA 1345 OP`); the system format is Cyrillic.
- **Colour:** yellow as a status colour on the radiation screen (the README keeps yellow for decoration, warning is orange); accent text at 11–13px on tags and small buttons (the README says nothing blue under 15px); the contrast of white ink on yellow and green.
- **Missing states:** Figma draws almost no error or expired states for lists and detail pages, and only two empty ones (a list after filters, a search with no result; see Empty and no-result states). The pages add a few lines of copy for the rest, marked in each page's analysis. Still undrawn: an empty list with nothing added yet, an error with retry, offline.
- **The two empty states as drawn:** the filtered list says other books may be of interest but offers no way to see them or to clear the filters; both texts start with «На жаль»; the text is `content-content-secondary` on `background-bg-background`, 4.3:1 in light, under the 4.5:1 that 15px text needs; the FAB sits 42px above the bottom where the floating-filter pattern says 40.
