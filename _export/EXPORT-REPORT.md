# Export report — Kyiv Digital Design System

This folder (`_export/`) was added by the export. Nothing outside it was written or edited: every other file in the archive is the design system's own file, byte for byte, at its own path.

- **Source:** Design System artifact «Kyiv Digital Design System», https://claude.ai/artifact/BnyV8ToWix6ybTUw37cw3X
- **Version exported:** `1794237882-f25c` (index `lastChange.at` 2026-11-07T08:20:00Z, by Daniil)
- **Exported:** 2026-11-09
- **Namespace:** `KyivDigitalDesignSystem_728336` · libraries: react 18, react-dom 18

## What the archive holds

The archive root is the system's `project/` folder (the prefix `project/` is dropped, so the system's own relative paths, such as `components/src/...` in the README or `../../tokens.css` in previews, resolve as written).

| Part | Files | Where |
|---|---|---|
| Index | 1 | `design-system.json` |
| Brand book / guidelines | 5 | `README.md`, `content.md`, `copywriting.md`, `motion.md`, `patterns.md` |
| Design tokens | 5 | `tokens.json` (color 73 in light + dark, type 21 styles in Titles + Text, spacing 6, radius 4, shadow 1, motion 21), `tokens.css`, `tokens/fig-tokens.css`, `tokens/spacing.css`, `tokens/typography.css` |
| Component guidelines + live previews | 32 folders, 63 files | `components/<Name>/README.md` + `preview.html` (31 components; `Cover` has a preview only) |
| Component bundle, styles, types | 3 | `components/bundle.js`, `components/bundle.css`, `components/index.d.ts` |
| Component source | 94 | `components/src/**` (`.jsx` + `.d.ts` per component, `icon-data.js`) |
| UI kit / example screens | 8 | `ui_kits/kd-app/*.html` |
| Asset notes | 4 | `assets/icons/README.md`, `assets/notes/*.md` |
| Legacy manifest | 1 | `_ds_manifest.json` |
| Icon assets (SVG) | 131 | `assets/icons/*.svg` — the Icons asset group, named as recorded in `design-system.json` → `assetGroups.icons.files`; byte sizes match the records |

Total: 184 design-system files + 131 icon SVGs = 315 files. `_export/checksums.sha256` has a SHA-256 for each; `_export/asset-map.csv` maps each SVG to the asset-store id it came from; `_export/file-list.json` lists every path.

## Deliberately left out

These are files of the Design System *artifact type* (the viewer that renders the page), not of this design system: `index.html`, `SKILL.md`, `artifact-type/app.js`, `artifact-type/app.css`, `artifact-type/demo.json`, `artifact-type/run.html`, `artifact-type/third-party-licenses.js`, `artifact-type/reference/*.md`, `artifact-type/reference/sample-seazar-tokens.json`.

## Missing or inaccessible

Everything published in the system was downloaded; no file failed to download. The gaps below are things the system itself names or relies on but does not contain.

### 1. Files listed in `_ds_manifest.json` and `assets/notes/` that are not in the system

`_ds_manifest.json`, `assets/notes/COMPONENTS.md` and `assets/notes/MIGRATION-REPORT.md` describe an earlier layout of the project. Of what they list:

**Present at a new path** (same file name, now under `components/src/`): Icon, ButtonRegular, ButtonSmall, FAB, ProgressBar, Toast, LicensePlate, Search, TextField, Cell, CellDataRow, CellSelection, EditButtonsLight2, Switch, NavbarEnhanced, NavbarMain, NavbarRegular, PageControl, StatusBarIPhone, Ic2Light, LiquidGlassRegularSmall, PaymentMethod, Placeholder, SearchFieldLight, SegmentedControl, WeatherIcon, WeatherItem. Whether their contents match the old files cannot be checked: the old files are not available.

**Not present anywhere in the system** (source `.jsx` and types `.d.ts`):

- `components/buttons/`: BuildingBlocksTabSingleUnit, EditButtonsLight
- `components/lists/`: Caption, CellRegular, Checkboxes, Ic2Chevron, Ic2Copy, IconsCheckIndeterminateSmall, IconsCheckSmall, IconsClose24px, IconsRadioButtonChecked, IconsRadioButtonUnchecked, RadioButtons, Toggle
- `components/navigation/`: Ic2ProfileEmpty, Ic2Sun, Ic2ViewGrid, Ic2ViewList, SegmentedButton, SegmentedControl3
- `components/payment/`: Ic2Tk, PaymentCell, PaymentChip
- `components/shared/`: BuildingBlocksButtonSegmentEnd, BuildingBlocksButtonSegmentMiddle, BuildingBlocksButtonSegmentStart, Ic2AlertFilled2, Ic2Card, Ic2Sun2, Icons02, IconsCheck24px

Some of these may now live inside `components/bundle.js` or as glyphs in `icon-data.js`; the system does not say, so no mapping is claimed here.

**Stylesheets not present:** `styles.css`, `tokens/aliases.css`, `components/navigation/fig-assets.css` (listed in `_ds_manifest.json` → `globalCssPaths` and in the migration report).

**Showcase cards not present** (`_ds_manifest.json` → `cards`): `guidelines/brand-mark.card.html`, `guidelines/colors-neutral.card.html`, `guidelines/colors-semantic.card.html`, `guidelines/colors-vibrant.card.html`, `guidelines/radius-elevation.card.html`, `guidelines/spacing.card.html`, `guidelines/type-data.card.html`, `guidelines/type-scale.card.html`, `components/buttons/buttons.card.html`, `components/feedback/feedback.card.html`, `components/inputs/inputs.card.html`, `components/lists/lists.card.html`, `components/navigation/navigation.card.html`, `components/payment/payment.card.html`, `components/shared/shared.card.html`, `assets/icons/icons.card.html`. (`ui_kits/kd-app/index.html` from the same list is present.)

**Other files named in `assets/notes/MIGRATION-REPORT.md` but not present:** `_ds_bundle.js`, `migration-map.json`.

### 2. Fonts

No font files exist in the system (`tokens.json` → `type.fonts` is empty).

- SF Pro and SF Mono: system fonts; the README says SF Pro is never bundled.
- Inter and Roboto: loaded at runtime from Google Fonts by `tokens/typography.css` (`@import` of fonts.googleapis.com); no files.
- Roboto Mono: `_ds_manifest.json` records it with status `no-face`.

### 3. Logo

The system has no logo file. `README.md` says so and names `Ic2Kd` (in `assets/icons/`) as the only brand mark.

### 4. Not stored as files, so not exported

- The Figma source of truth named in `tokens.json` → `meta.file` (https://www.figma.com/design/ZlBOe8QizzEnPDwnWwQije/_KD---Source-of-truth) and its frames in `meta.frames`. The Figma file is not part of the artifact.
- What the page generates when it is opened: the per-component `api/` cards, `manifest.json`, and the «Consuming» section and card index it may append to the README.
- Comments and the shared database of the live artifact page.
