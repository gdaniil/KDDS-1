The `ic2_*` set: 131 glyphs exported from the Figma Icons page, all drawn on a 24×24 grid with a 2px stroke or solid fill in one ink, `#343137` (`neutral-neutral-gray100`).

## Using them

- **In components and screens, use `<Icon name="Ic2Fine" size={24} />`** (`components/src/assets/icons/Icon.jsx`). It draws from `components/src/assets/icons/icon-data.js`, where the ink is `currentColor`, so the icon takes the text colour of its parent: set the colour with a `content-*` token (`content-content-primary` by default, `content-content-secondary` for quiet icons, `content-content-accent` for selected ones). `components/src/assets/icons/Icon.d.ts` lists every valid `name`.
- **The SVG files in this group are the originals as exported**, for download or `<img>`. An `<img>` cannot recolour them: they always render in `#343137`, so they suit light surfaces only.
- Size: 24px is the drawn size and the default. The components use 20px for chevrons and view toggles in cells and navbars, 16px for the small power-status mark, and 32px for the card icon in payment methods.
- Keep a 44×44 tap area around any icon that is a button.

## Exceptions

- **Fixed brand colours**, which ignore `currentColor`: `Ic2FlagUa` (Ukrainian flag), `Ic2Dtek` (DTEK yellow and black), `Ic2DonationBlood` (red drop). Don't recolour them.
- **Two-tone:** `Ic2ProfileEmpty` draws with `content-content-secondary`, `background-bg-subtle` and `border-border-regular`, so it follows the theme on its own.
- **`Ic2ProfileFilled`** is the avatar shape. In Figma it is filled with a sample photo, which isn't part of the set: in `icon-data.js` it's a solid disc in `currentColor`, and the stored SVG shows an empty outlined circle. The app puts the user's photo in this shape.
- **`Ic2AlertAirraid`** is the triangle warning from the air-raid section. Figma names it `ic2_alert` too, the same as the round alert in misc; it was renamed here (file `ic2_alert_airraid.svg`, exported as `ic2_alert-1.svg`) so the two can be told apart.
- **`IcFileText`** has no `2` in its Figma name (`ic_file_text`); kept as named.
- Typos carried from Figma so names match the file: `Ic2QuickAsscess`, `Ic2SpinerFilled`, `Ic2Balistik`.

## By section (as grouped in Figma)

- **service (37)**, the city services grid and service cards: Ic2Air, Ic2Bikes, Ic2BrokenBuilding, Ic2Community, Ic2Deputat, Ic2Disabled, Ic2DonationBlood, Ic2Dtek, Ic2Evacuation, Ic2Events, Ic2Fine, Ic2FlagUa, Ic2Help, Ic2HourlyPark, Ic2Kd, Ic2KyivAi, Ic2Light, Ic2Markets, Ic2Mental, Ic2MonthPark, Ic2Osbb, Ic2Park, Ic2Petition, Ic2Pets, Ic2Poll, Ic2Qr, Ic2Roads, Ic2School, Ic2Shelter, Ic2Tk, Ic2TransportSchedule, Ic2Tsnap, Ic2Utilities, Ic2Volunteer, Ic2Wallet, Ic2Wc, Ic2Zerowaste
- **misc (60)**, interface actions and states: Ic2AddCalendar, Ic2Adjust, Ic2Alert, Ic2AlertFilled, Ic2ArrowLeft, Ic2ArrowRightFilled, Ic2Call, Ic2CancelFilled, Ic2Centre, Ic2Chat, Ic2Check, Ic2CheckFilled, Ic2Chevron, Ic2ChevronDown, Ic2ChevronLeftDouble, Ic2ChevronRightDouble, Ic2ChevronUp, Ic2Close, Ic2Copy, Ic2Delete, Ic2DocUsed, Ic2Donation, Ic2Edit, Ic2ExternalLink, Ic2Female, Ic2FileDownload, Ic2Hand, Ic2Heart, Ic2HeartFilled, Ic2Image, Ic2InfoFilled, Ic2Keyboard, Ic2LocationFill, Ic2Mc, Ic2Minus, Ic2More, Ic2Plus, Ic2PlusCircle, Ic2Receipt, Ic2Refresh, Ic2Route, Ic2Search, Ic2Selector, Ic2ShieldCheckmark, Ic2ShieldQuest, Ic2ShieldXmark, Ic2Sort, Ic2Sparkles, Ic2SpinerFilled, Ic2Spinner, Ic2Star, Ic2StarFilled, Ic2Time, Ic2User, Ic2UserPic, Ic2Video, Ic2ViewGrid, Ic2ViewList, Ic2Visa, IcFileText
- **weather (8)**: Ic2Aqi, Ic2Cloud, Ic2Fog, Ic2Night, Ic2Radiation, Ic2Rain, Ic2Snow, Ic2Sun
- **profile (16)**, profile and settings rows: Ic2Address, Ic2Car, Ic2Card, Ic2Faq, Ic2Info, Ic2Language, Ic2Maps, Ic2Notification, Ic2ProfileEmpty, Ic2ProfileFilled, Ic2QuickAsscess, Ic2Scan, Ic2Security, Ic2Settings, Ic2ShareAndroid, Ic2ShareIos
- **privilege (3)**, benefit categories: Ic2Kyiv, Ic2Old, Ic2Ubd
- **alert airraid (7)**, air-raid alert types and the all-clear: Ic2AlertAirraid, Ic2Balistik, Ic2Cab, Ic2Clear, Ic2Mig, Ic2Rocket, Ic2Shahed

Pairs that look alike and mean different things: `Ic2Alert` (round, a general warning) vs `Ic2AlertAirraid` (triangle, an air-raid alert); `Ic2Spinner` (loading) vs `Ic2SpinerFilled`; `Ic2Info` (outline, in profile rows) vs `Ic2InfoFilled` (inline notices); `Ic2ShareIos` vs `Ic2ShareAndroid` — use the one for the platform.
