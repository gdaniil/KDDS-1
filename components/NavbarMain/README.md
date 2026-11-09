The top bar of the three root tabs, Home, Services and Profile, with the status bar.

**You provide** `type` (`home`, `services` or `profile`) and the content for that tab; every prop falls back to the Figma sample.

- **Home:** `date` («23 жовтня», month lowercase), `greeting` («Доброго дня!»), `temperature` («23°»), `weatherIcon` (`Ic2Sun`, `Ic2Cloud`, `Ic2Rain`, `Ic2Snow`, `Ic2Fog`, `Ic2Night`, or a node), `aqi` (47; `null` hides it), `showWeather`, `showPowerStatus` for the power-outage mark, and `avatar`.
- **Services:** `title` (collapsed «Сервіси», expanded «Міські сервіси») and `view` (`grid` or `list`) for the view toggle.
- **Profile:** `userName`, which is also the collapsed title unless you set `title`; `phone` and `avatar` on the expanded card.
- `avatar` is an image URL or a node, clipped to the circle. Without it the circle shows `Ic2ProfileEmpty`; `avatar="sample"` shows the Figma sample photo for mock-ups.
- `scrolled={false}` is the expanded header. On Home it is white on `background-bg-accent-home`: put that blue behind the bar and the content under it. The default, `scrolled`, is the collapsed bar.
- **Handlers.** `onSearch`, `onAvatarClick`, `onPowerStatusClick`, `onWeatherClick`, `onAqiClick` (Home), `onViewChange` (Services toggle), `onHomeClick` (the «Головна» pill or chevron on Services and Profile) and `onEdit` (Profile). A part with a handler becomes a real button with a Ukrainian `aria-label`, focus ring, 44×44 hit area and 70% pressed state; without one it stays decorative and is skipped by the keyboard.
- Fills its container (375px on a phone); a long `greeting`, `date`, `title`, `userName` or `phone` ends with «…».
