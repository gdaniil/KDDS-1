# Move report: `Kyiv Digital Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Kyiv Digital Design System` — a design-system project (namespace `KyivDigitalDesignSystem_728336`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 58 components (0 with a card in the project); 0 starter template(s) kept aside; 150 files in the system’s table (3.4 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `81 files outside the layout, kept as is (listed under Claude’s context, no section of their own): components/buttons/BuildingBlocksTabSingleUnit.jsx, components/buttons/ButtonRegular.jsx, components/buttons/ButtonSmall.jsx, components/buttons/EditButtonsLight.jsx, components/buttons/FAB.jsx, components/buttons/buttons.card.html, components/feedback/ProgressBar.jsx, components/feedback/Toast.jsx, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 1 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (the move writes no components/bundle.js and no components/bundle.css: a page of the project loads the bundle and the stylesheets it links, as it did before the move)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- the move writes no components/bundle.css: the system’s stylesheets `styles.css`, `tokens/fig-tokens.css`, `tokens/aliases.css`, `tokens/typography.css`, `tokens/spacing.css`, `components/navigation/fig-assets.css` are carried as written, at `project/styles.css`, `project/tokens/fig-tokens.css`, `project/tokens/aliases.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/components/navigation/fig-assets.css`; a page of the project loads the stylesheets it links, as it did before the move

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `Icon` | ✓ | — | — (listed without an example) | ✓ |
| `BuildingBlocksTabSingleUnit` | ✓ | — | — (listed without an example) | ✓ |
| `ButtonRegular` | ✓ | — | — (listed without an example) | ✓ |
| `ButtonSmall` | ✓ | — | — (listed without an example) | ✓ |
| `EditButtonsLight` | ✓ | — | — (listed without an example) | ✓ |
| `FAB` | ✓ | — | — (listed without an example) | ✓ |
| `ProgressBar` | ✓ | — | — (listed without an example) | ✓ |
| `Toast` | ✓ | — | — (listed without an example) | ✓ |
| `LicensePlate` | ✓ | — | — (listed without an example) | ✓ |
| `Search` | ✓ | — | — (listed without an example) | ✓ |
| `TextField` | ✓ | — | — (listed without an example) | ✓ |
| `Caption` | ✓ | — | — (listed without an example) | ✓ |
| `Cell` | ✓ | — | — (listed without an example) | ✓ |
| `CellDataRow` | ✓ | — | — (listed without an example) | ✓ |
| `CellRegular` | ✓ | — | — (listed without an example) | ✓ |
| `CellSelection` | ✓ | — | — (listed without an example) | ✓ |
| `Checkboxes` | ✓ | — | — (listed without an example) | ✓ |
| `EditButtonsLight2` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Chevron` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Copy` | ✓ | — | — (listed without an example) | ✓ |
| `IconsCheckIndeterminateSmall` | ✓ | — | — (listed without an example) | ✓ |
| `IconsCheckSmall` | ✓ | — | — (listed without an example) | ✓ |
| `IconsClose24px` | ✓ | — | — (listed without an example) | ✓ |
| `IconsRadioButtonChecked` | ✓ | — | — (listed without an example) | ✓ |
| `IconsRadioButtonUnchecked` | ✓ | — | — (listed without an example) | ✓ |
| `RadioButtons` | ✓ | — | — (listed without an example) | ✓ |
| `Switch` | ✓ | — | — (listed without an example) | ✓ |
| `Toggle` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2ProfileEmpty` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Sun` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2ViewGrid` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2ViewList` | ✓ | — | — (listed without an example) | ✓ |
| `NavbarEnhanced` | ✓ | — | — (listed without an example) | ✓ |
| `NavbarMain` | ✓ | — | — (listed without an example) | ✓ |
| `NavbarRegular` | ✓ | — | — (listed without an example) | ✓ |
| `PageControl` | ✓ | — | — (listed without an example) | ✓ |
| `SegmentedButton` | ✓ | — | — (listed without an example) | ✓ |
| `SegmentedControl3` | ✓ | — | — (listed without an example) | ✓ |
| `StatusBarIPhone` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Tk` | ✓ | — | — (listed without an example) | ✓ |
| `PaymentCell` | ✓ | — | — (listed without an example) | ✓ |
| `PaymentChip` | ✓ | — | — (listed without an example) | ✓ |
| `BuildingBlocksButtonSegmentEnd` | ✓ | — | — (listed without an example) | ✓ |
| `BuildingBlocksButtonSegmentMiddle` | ✓ | — | — (listed without an example) | ✓ |
| `BuildingBlocksButtonSegmentStart` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2AlertFilled2` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Card` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Light` | ✓ | — | — (listed without an example) | ✓ |
| `Ic2Sun2` | ✓ | — | — (listed without an example) | ✓ |
| `Icons02` | ✓ | — | — (listed without an example) | ✓ |
| `IconsCheck24px` | ✓ | — | — (listed without an example) | ✓ |
| `LiquidGlassRegularSmall` | ✓ | — | — (listed without an example) | ✓ |
| `PaymentMethod` | ✓ | — | — (listed without an example) | ✓ |
| `Placeholder` | ✓ | — | — (listed without an example) | ✓ |
| `SearchFieldLight` | ✓ | — | — (listed without an example) | ✓ |
| `SegmentedControl` | ✓ | — | — (listed without an example) | ✓ |
| `WeatherIcon` | ✓ | — | — (listed without an example) | ✓ |
| `WeatherItem` | ✓ | — | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (147 files; the map lists every one):
- 59 × component source
- 58 × component types
- 9 × foundations page
- 7 × showcase page
- 6 × global stylesheet
- 2 × stylesheet
- 2 × kit piece
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output
- 1 × image

## Kept aside

Nothing.

## Dropped

Nothing.
