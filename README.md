Kyiv Digital is the City of Kyiv's services app: paying fines and utilities, parking, petitions and polls, transport schedules, power-outage schedules, air-raid alerts and shelters. People open it to get one civic task done quickly, often under stress. Design for clarity over delight: one task per screen, plain words, big tap targets, nothing decorative that competes with the data.

The system is iOS (SF Pro, iOS navigation and controls); Android is not built yet. Build every screen in both themes, `light` and `dark`.

Interface copy is Ukrainian. The short rules for screens are the section «Content and copy» (`content.md`); the full copywriting and tone-of-voice rules are «Копірайтинг і тон голосу» (`copywriting.md`). Read them before writing any interface copy.

**Sections of this brand book.** Besides this page, four sections sit as collapsible blocks at the end of Overview; type their name in the sidebar search to jump to one:

| Section | File | Read it for |
|---|---|---|
| «Content and copy» | `content.md` | The short copy rules for screens |
| «Копірайтинг і тон голосу» | `copywriting.md` | Every copy rule, glossary and tone of voice |
| «Моушн і мікроінтеракції» | `motion.md` | Animation principles, motion tokens, KD patterns |
| «Patterns» | `patterns.md` | Recurring layouts, custom pieces, the mini-app checklist |

## Color

Use the semantic tokens (`content-*`, `background-*`, `border-*`, `chart-*`) in UI. The `vibrant-*`, `neutral-*` and `dark-*` tokens are primitives: they exist so the semantic ones have something to point at and change per theme. Reaching for a primitive in a screen breaks dark mode.

- **Layers.** Screen on `background-bg-background`; cards, grouped list sections, fields and sheets on `background-bg-surface`; quiet inner fills on `background-bg-subtle`. In `dark`, `background-bg-subtle` equals the page colour, so a subtle element sitting directly on the page needs `border-border-regular` to stay visible.
- **Text.** `content-content-primary` for everything readable. `content-content-secondary` for captions and metadata, set on `background-bg-surface` (on the gray page it falls to 4.3:1). `content-content-disabled` only on disabled controls.
- **One blue.** `vibrant-vibrant-blue` is the only accent: primary buttons (`background-bg-primary-cta` + `content-content-primary-cta`), links (`content-content-link`), selection and focus (`content-content-accent`, `border-border-accent`, `background-bg-accent-subtle`). Don't introduce a second accent. One primary button per screen.
- **Status.** Red = error or destructive, orange = warning, green = success. Status is always carried by an icon or a word too, never by colour alone: the green is 2.1:1 on white and the orange 3.5:1, too faint for text. Use `background-bg-negative` for destructive buttons; never put text on `background-bg-positive`.
- **Brand navy and accents.** `vibrant-vibrant-dark-blue` is the secondary brand colour for brand surfaces and covers. `vibrant-vibrant-yellow` and `vibrant-vibrant-pink` are decorative accents (weather, highlights), never statuses.
- **Home header.** The top of the Home screen is blue, `background-bg-accent-home`, which dims to the muted blue in dark. Text on it is `content-content-primary-invert`; fills on it are `background-bg-subtle-invert`.
- **Power schedule.** The outage chart uses `chart-chart-power-on`, `chart-chart-power-off` and `chart-chart-power-possible` and nothing else; label each state in words too.

Known contrast gaps in the source, kept as designed: white on the primary button is 3.4:1 and blue links on white are 3.4:1, short of the 4.5:1 that 17px text needs. Don't make it worse: no blue text smaller than 15px, no lighter blues.

## Type

SF Pro on iOS is a system font, never bundled. The scale is Apple's text styles with one tracking value, `-0.4px`, on every style.

| Style | Use for | Never |
|---|---|---|
| `large-title` | Splash, the greeting on Home | Inside cells, cards, modals |
| `title1` | Page names in the large navbar | Body content |
| `title2`, `title3` | Section headers, sheet and modal titles, card titles | Dense lists |
| `headline` | Tab and button labels — one line | Running text |
| `body` | Multi-line descriptions and paragraphs | Tight cells (use `subheadline`) |
| `callout` | Card secondary text, helper messages, input labels | Next to `body` in one zone |
| `subheadline` | Data-row labels, field values | Primary labels |
| `subheadline-emphasized` | Cell labels (`Cell`, `CellSelection`), 15/20 — one line | Running text |
| `footnote` | Timestamps, helper and error text under fields | Interactive labels |
| `caption1`, `caption2` | Captions under cell labels (`caption1`, 12/16), badges, chips, legal fine print | Reading text |

`headline` and `body` are both 17/22: `headline` (semibold) is a single-line label, `body` (regular) is running text — don't swap them. Every style except `headline` (already semibold) has an `-emphasized` twin: bold for `large-title`, `title1` and `title2`; semibold (590) for everything from `title3` down. Android's emphasis is Medium (500).

Every type style is a CSS class in `tokens.css`: `className="headline"`, `"subheadline-emphasized"`, `"footnote"` and so on, each setting family, size, line height, weight and tracking. Set text in screens with these classes, never with inline font sizes. The components use the same classes, so editing a style in `tokens.json` changes every component that uses it. The only type literals left in the component code are Apple-kit chrome (status-bar clock, the iOS segmented control, SF Symbol glyphs) and the licence plate's mono numerals, each in one named `KD_TYPE_*` constant.

## Space and layout

- Spacing steps: `space-1` 4, `space-2` 8, `space-3` 12, `space-4` 16, `space-5` 24, `space-6` 32. Use nothing in between.
- Screens are designed at 375pt wide with a `space-4` side margin, so content is 343pt wide.
- The screen frame is a plain 375×812 rectangle: square corners (no `border-radius`), no border, outline or shadow, no device bezel. Don't round the frame to look like a phone and don't outline it in grey; the page or canvas behind it separates it by fill (`background-bg-background` on `background-bg-surface`). The navbar draws the status bar.
- Cells, fields and toasts: `space-3` vertical and `space-4` horizontal padding. Regular buttons and text fields are 48px tall.
- List rows (`Cell`, `CellSelection`) have no fixed height: they hug their content with a 48px minimum. One line is 48, a label with a caption 62, a row with a switch 55, a segmented row 52. `CellDataRow` is the same idea with a 40px minimum. Never set a fixed row height in a screen.
- Every tappable thing is at least 44×44pt, whatever its text size.
- The components read their padding, gaps and side margins from these tokens, so editing `space-*` on this page changes them; in screens write `var(--space-N)`, not px.

## Shape and depth

- `radius-control` (12px) is the default: buttons, cells, `Card` (grouped list sections and cards), text fields. `radius-card` (20px) for sheets and other large floating surfaces, never for the screen frame itself (it is square, see Space and layout). `radius-sm` (8px) for toasts. `radius-pill` for segmented controls, chips, switches and the FAB.
- `shadow-elevation` is the only shadow. `Card` puts it on every surface block (grouped lists, one card per thing, cards of fields, detail sections), as the shipped screens do: wrap content in `Card` instead of building the block and its shadow by hand. The component spec frames draw those blocks flat, separated by fill alone (`background-bg-surface` on `background-bg-background`); `elevated={false}` gives that look, for a mini-app drawn flat on purpose. `ServiceGridItem` tiles carry their own shadow.
- Borders are 1px `border-border-regular`, used sparingly for dividers and text-field outlines, never as decoration around every card.
- No gradients, textures or photos in UI chrome. The one material effect is iOS Liquid Glass on toasts and floating controls.
- The components read their corner radii from these tokens, so editing `radius-*` on this page changes them; in screens write `var(--radius-control)`, `var(--radius-card)`, `var(--radius-sm)` or `var(--radius-pill)`, not px.

## States

Each component carries its own states (`enabled`, `pressed`, `focused`, `disabled`, `error` where they apply). Disabled = `background-bg-disabled` + `content-content-disabled`. Focus in fields = `border-border-accent` outline and a `content-content-accent` caret. Error = `border-border-negative` outline and a `footnote` message in `content-content-negative` under the field.

## Motion

**When you create or change any animation or micro-interaction, load the `ui-motion` skill and follow it.** The KD rules, tokens and patterns are the section «Моушн і мікроінтеракції» (`motion.md`); the live example is `ui_kits/kd-app/motion.html`.

- Motion explains a change: every motion has a cause, keeps the object, and stops. Feedback starts on pointer-down within `duration-press`; nothing waits for a flourish.
- Native iOS first: push and pop, sheets, alerts, menus, swipe actions and pull-to-refresh stay system transitions. The tokens are for custom pieces inside a screen.
- Tokens by job: `duration-*`, `ease-*`, `scale-*`, one `motion` family in `tokens.json` (the Motion page) (`var(--duration-roll)`, `var(--ease-out)`). Never one curve for everything; `linear` only for a spinner.
- Alerts, outages and errors never pulse or blink: a banner arrives once and holds; the icon and the word carry the meaning, never motion alone.
- Respect Reduce Motion: drop travel, scale and roll, keep a `duration-state` crossfade or the final state.
- The components have no transitions yet (pressed jumps to 70%, `Switch` and `SegmentedControl` jump): a known gap, listed in `motion.md`.

## Icons

One custom set, `ic2_*`: 131 single-colour 24×24 glyphs, grouped as service, misc, weather, profile, privilege and air-raid alerts. Every icon in a component or screen is `<Icon name="Ic2Fine" size={24}/>` from `components/src/assets/icons/Icon.jsx`; there are no per-icon components. Icons take the colour of their text (`currentColor`), so set the colour on the parent with a `content-*` token. The full list, the exceptions (brand-coloured and two-tone icons) and the look-alike pairs are in `assets/icons/README.md`; the original SVGs are the Icons asset group. Don't mix in another icon set, emoji or Unicode symbols; if a glyph is missing, leave an empty 24×24 slot and name the gap.

There is no logo file. Write the product name in plain type: in Ukrainian copy it is Київ Цифровий — both words capitalised, no quotes, never declined (the short form Цифровий is declined: «у Цифровому»); see «Копірайтинг і тон голосу». `Ic2Kd` is the only brand mark. Never draw or approximate a logo.

## Components

Thirty-one public components, all on `window.KyivDigitalDesignSystem_728336` from `components/bundle.js`. Each has a `.d.ts` beside its source in `components/src/components/` with every prop documented, all of them collected in `components/index.d.ts`, and a guideline and live preview in `components/<Comp>/`; read it before using the component. Props are semantic (`variant`, `size`, `label`, `icon`, `disabled`, `checked`, `value`), and anything that holds an icon takes `<Icon name="…" />`. Build screens only from these; `components/src/components/internal/` holds the Figma parts they are made of and is not exported.

| Group | Component | Use it for | Key props |
|---|---|---|---|
| Actions | `Button` | Every action. One `variant="primary"` per screen; `fullWidth` for the bottom action | `variant` primary · secondary · bezeled · ghost · elevated, `size` regular (48) · small (32), `label`, `icon`, `iconPosition` left · right · only, `disabled`, `loading`, `fullWidth`, `onClick` |
| | `PayButton` | Branded payment | `provider` apple · google · google-dark · diia, `label` (Дія only), `fullWidth` |
| | `FAB` | One floating action over content | `icon`, `label` |
| Inputs | `TextField` | Form input with label, hint and error message; `multiline` for free text that grows | `label`, `value` / `defaultValue`, `onChange`, `placeholder`, `helperText`, `message`, `icon`, `state` default · focus · error, `disabled`, `type`, `inputMode`, `multiline`, `rows` |
| | `Select` | Picking one of a short list in a form; opens the platform menu | `label`, `options`, `value` / `defaultValue`, `onChange`, `placeholder`, `helperText`, `message`, `state`, `disabled` |
| | `Chip` | Filters and quick choices: a selectable 32px pill | `label`, `selected`, `onClick`, `icon`, `disabled` |
| | `Search` | Search on the blue Home header | `value` / `defaultValue`, `onChange`, `onSubmit`, `onClear`, `onCancel` |
| | `LicensePlate` | Entering a car's plate | `region`, `value` / `defaultValue`, `onChange` |
| | `Switch` | Instant on/off setting | `checked`, `onChange`, `aria-label` |
| Lists | `Cell` | Settings, menu and navigation rows | `label`, `caption`, `icon`, `accessory` none · chevron · switch · segmented, `checked`, `onCheckedChange`, `onClick`, `segmentOptions`, `segmentValue`, `onSegmentChange` |
| | `CellSelection` | One-of or many-of choices | `label`, `selected`, `onClick` |
| | `CellDataRow` | Read-only label/value pairs | `label`, `value`, `icon` (true = copy), `iconLabel`, `onIconClick` |
| | `ListCaption` | Caption above a list section | `label`, `indent` |
| | `QuickAccessItem` | Shortcut tiles in the Home quick-access row: a service, a live QR-ticket or parking status, «Усі сервіси» | `type` regular · all · qr-active · parking-active, `label`, `status`, `icon`, `onClick` |
| | `ServiceGridItem` | Tiles of the Services tab grid view (2 columns, `space-2` gap) | `label`, `icon` (ic2_* name or node), `badge` (true = «бета» or text), `onClick` |
| | `FeedCell` | Event feed entries (payments, petitions, alerts, bills), full-bleed on the page | `title`, `description`, `time`, `icon` (name or node), `tint` default · accent · negative · warning, `chevron`, `onClick` |
| | `FeedDate` | Day header between groups of `FeedCell`s | `label`, `level` |
| Layout | `Card` | The white surface block: a grouped list of rows, one card per thing, a card of fields, a section of a detail page, a whole-card link | `caption`, `padding` list · regular · large · none, `gap` (space step), `elevated`, `onClick`, `as` |
| | `Divider` | A 1px line between parts of one card | `inset` |
| Status | `Badge` | The one urgent state of a card, filled: «Відхилено», «до 15:00 немає світла», «бета» | `label`, `tone` accent · neutral · positive · warning · negative · dark, `icon` |
| | `Tag` | Metadata with a glyph, or a quiet state with a dot | `label`, `type` regular · status, `icon`, `tone` |
| Navigation | `NavbarMain` | Top of the Home, Services and Profile tabs | `type` home · services · profile, `scrolled`, `date`, `greeting`, `temperature`, `weatherIcon`, `aqi`, `showWeather`, `showPowerStatus`, `avatar` (URL or node), `title`, `userName`, `phone`, `view` grid · list, `onSearch`, `onAvatarClick`, `onWeatherClick`, `onAqiClick`, `onPowerStatusClick`, `onViewChange`, `onHomeClick`, `onEdit` |
| | `NavbarRegular` | Pushed screens; `transparent` for detail pages | `variant` back · back-action · two-icons, `title`, `onBack`, `onClose`, `leadingAction` / `trailingAction` `{ icon, label, onClick }` (44×44 buttons), `actionLabel`, `onAction`, `transparent`, `inverted`, `showProgress` |
| | `NavbarEnhanced` | List screens: centred title with a search field or tabs | `type` search · tabs, `title`, `searchValue` / `defaultSearchValue`, `onSearchChange`, `onSearchSubmit`, `onSearchClear`, `searchPlaceholder`, `tabs`, `selectedTab`, `onTabChange`, `onBack`, `onClose`, `leadingAction` / `trailingAction` `{ icon, label, onClick }` |
| | `SegmentedControl` | Switching between 2–5 views of the same content | `options`, `value`, `onChange` |
| | `PageControl` | Carousel and onboarding position | `count`, `selected` (from 0), `platter` |
| Feedback | `Toast` | Short-lived success or error; always at the top of the screen, never at the bottom | `type` success · error, `label` |
| | `ProgressBar` | Progress of a step or upload | `value` 0–1, `indeterminate` |
| Overlays | `Modal` | Bottom sheet for one decision or short content: pay confirmation, petition signing, filters | `open`, `onClose`, `title`, `description`, `illustration`, `children`, `actions` (Buttons), `showClose`, `dismissible`, `alert`, `size` auto · full, `inline` (previews only) |
| Media | `Icon` | Any glyph | `name`, `size` |
| | `ServiceIcon` | A service's icon in a grid, FAQ row or link | `icon`, `type` default · faq · link |

How they behave:

- **Width.** Everything except buttons, `Chip`, `Badge`, `Tag`, `Switch`, `LicensePlate`, `PageControl` and `QuickAccessItem` (108×112) fills its container: put content in a 343px column (375 minus two `space-4` margins), navbars, `Search`, `FeedCell` and `FeedDate` in the full 375. `ServiceGridItem` fills a cell of a 2-column grid with a `space-2` gap. Buttons hug their label unless `fullWidth`. Nothing grows past its container: one-line labels (cell and button labels, tab names, navbar titles and actions) end with «…» and accessories (chevron, switch, segmented control, icon slots) keep their place; descriptions, list captions, error messages, toasts and `CellDataRow` values wrap.
- **Grouped lists.** Stack `Cell`, `CellSelection` and `CellDataRow` with no gap inside one `<Card padding="list">` on `background-bg-background`; its `caption` sets a `ListCaption` 8px above the block. `Card` carries the shipped look (`background-bg-surface`, `radius-control`, 4px inner top and bottom padding, `shadow-elevation`); the cells add none of it, so don't build the block by hand. Cards of other content: `padding="regular"` (16) for one card per thing and for fields, `"large"` (24) for the sections of a detail page; see `components/Card/README.md` for the gaps between cards.
- **Theme.** Everything follows `data-theme="light" | "dark"` on the root, including the Liquid Glass of `FAB` and `Toast`. Colours come from tokens; the literals left in the code are Apple-kit system colours and payment-brand logos.
- **Real controls.** `TextField` (and its multiline textarea), `Select` (a real `<select>`), `Search`, `LicensePlate` and the `NavbarEnhanced` search field are real inputs: pass `value` + `onChange` to control them, or `defaultValue` to let them keep their own text; their focus look follows real focus. `onChange` handlers receive the new value first, the event second. Buttons, `Chip` (with `aria-pressed`), `Switch`, `SegmentedControl`, `Cell` and `Card` with `onClick` and `CellDataRow`'s icon are real buttons with a visible focus ring (`border-border-accent`, 2px) for keyboard users. `CellSelection` rows respond to taps but have no focus stop yet.
- **Button states.** Pressed dims a button to 70%; `loading` turns the icon slot into a spinning `Ic2Spinner` and ignores clicks. Figma draws neither: both are proposals to confirm with design.
- **Accessibility.** Icon-only buttons and every `Switch` need an `aria-label`; tap targets stay at least 44×44.

To use them on a design canvas, copy these files in full to the same paths under the canvas's `project/ds/<folder>/`, and load the stylesheets in this order before the script: `tokens.css`, `components/bundle.css`, then `components/bundle.js`. Mount a component with `<x-import component-from-global-scope="KyivDigitalDesignSystem_728336.<Comp>" …>`.

## Super app: tokens are the contract

Kyiv Digital is a shell around many small apps (parking, library, radiation map, power schedule, petitions, blood donation), and their screens can look very different. The system does not fix a layout; it fixes the tokens. Use a component where one exists. Where none does, build a small named piece from tokens (`var(--space-*)`, `var(--radius-*)`, `content-*` and `background-*` colours, the type classes), declare any one-off value once as a local variable with a comment, and use a placeholder for a photo, map or illustration. Both themes, 44×44 tap targets and Ukrainian copy per `copywriting.md` always hold. Components are shortcuts, not a fence. The patterns that recur in the real app, the register of custom pieces that could become components, and a checklist for a new mini-app screen are in `patterns.md`.

## Example screens

Eight pages in `ui_kits/kd-app/`, every frame 375px wide, in light and dark with a theme switch (the system's own `SegmentedControl`). Six rebuild the real app from the Figma pages "Examples" (27 frames, grouped by meaning) and "empty states" (2 frames); each uses public components where they exist and small named functions marked `/* custom: … */` where they do not. Photos, covers, maps, illustrations and logos are placeholders, and the screens leave out the tab bar the system lacks. `Modal` is `inline` only because several phones share a page; never ship `inline`.

- `main-screens.html`: the three root tabs, Home, Services and Profile. `NavbarMain` starts expanded and collapses into a compact bar as the content scrolls. Home has the blue header, quick-access row and day-grouped feed, Services toggles grid and list, Profile has grouped cells.
- `lists.html`: six lists of the user's own things: addresses, cars, confirmed statuses, 1551 requests, blood-donor appointments and saved deputies. It contrasts a grouped `Cell` block with one card per item, a link-coloured add row, status badges, tabs, favourites and a filter `FAB`.
- `content-pages.html`: six detail pages: a report in progress, a council session, a library book queue, a library place, an approved impound release and a valid insurance policy. Each stacks surface cards under a status header, steps, key-value fields and link rows.
- `forms.html`: four steps of data-entry flows: free text with photos, a required field in error with a Дія shortcut, manual entry after a failed lookup, and a choice of document. Fields sit in surface cards and the primary `Button` is pinned to the bottom.
- `custom-designs.html`: five mini-app screens that standard layouts do not cover: an outage schedule, a library ticket, a radiation map sheet, parking with glass controls and a translucent search overlay. Free in layout and shape, fixed in colour, type, theme and tap size.
- `empty-states.html`: two empty states: a list whose filters match nothing, and a search with no result. One centred explanation, no card and no button; the next step is the filter `FAB` or the search field. The illustration, the search toolbar and the keyboard are placeholders or native look-alikes; the dot on the `FAB` is a custom `FilterDot`.
- `motion.html`: three micro-interactions on the motion tokens: a wallet top-up (press, waiting in the same button, a rolling amount, a toast after its cause), a chip filter whose rows close and open their own height, and a power status that rolls. Speed and Reduce Motion switches for review.
- `index.html`: six synthetic screens built only from the components that existed before `Card`, to exercise them. Where it differs from the real-app pages, for example flat grouped blocks without the shipped shadow, follow the real-app pages and use `Card`.

## Notes

Usage notes and the typography table paraphrase the Figma file's own guidance. `tokens.json` → `meta.figmaNodes` maps every component and foundation to its Figma node id, for re-sync.

This system is iOS only: the Android sets in Figma (FAB, three navbars, toast and four list sets) are not built. There is no bottom tab bar component: leave it out and name the gap rather than drawing one by hand.

**Drawn in Figma, not built here:**

- Payment: `payment-method`, `payment-chip`, `payment-cell` and the summary (page "payment / old").
- Illustrations: about 20 service pictures and the push icon sets (page Illustration). No illustration assets ship.
- The hidden «beta» badge on list cells (use `Badge label="бета"` beside the label; `ServiceGridItem` has its own); a checkbox (loose instances only); `services-fab`, probably an icon-and-label FAB (unverified).
- Sizes that differ: `FeedCell` is 56px here, 72px in some home examples (built custom in `main-screens.html`); the Button spec says 56px, but the drawn variants and ours are 48px.
- Motion: the file defines no durations or easing. The motion tokens and rules (`motion.md`) are ours, from the `ui-motion` skill; native screens and sheets keep standard iOS transitions. Dark variants of the Figma components were not compared.

**Built here, not drawn in Figma:** Button pressed and loading, `QuickAccessItem` pressed, keyboard focus rings, `PageControl`, a standalone `Switch` and `SegmentedControl` (Figma draws them only inside cells, and only two segments), and `Ic2AlertAirraid`. Radius has no Figma variables: the values come from text in the spec frames. The `-0.4px` tracking is ours; the spec frame leaves letter spacing at the platform default (to verify).

**Found by building the real screens:** the shipped app uses pieces the system does not have as components, listed with their counts in `patterns.md` ("Custom pieces register"; since then the card wrapper became `Card`, the navbar slots real buttons, and badges, tags, chips, the divider, the multi-line and the picker field `Badge`, `Tag`, `Chip`, `Divider`, `TextField multiline` and `Select`, from the Figma frame «missed components» 4078:10105): link and destructive `Cell` tones, stacked key-value rows, steps and a real progress bar, a pinned action bar, avatars and covers, glass controls, a persistent sheet. The same page lists the component bugs and doc fixes that came with them (a small `Button` is 32px, not 44; the Services and Profile page dots are invisible in light).
