/* Kyiv Digital Design System — props of every public component on window.KyivDigitalDesignSystem_728336.
   Sources: components/src/. Documentation, not type-checked. */
import * as React from 'react';

/** Every icon in components/src/assets/icons/icon-data.js. */
export type IconName =
  | "Ic2AddCalendar"
  | "Ic2Address"
  | "Ic2Adjust"
  | "Ic2Air"
  | "Ic2Alert"
  | "Ic2AlertAirraid"
  | "Ic2AlertFilled"
  | "Ic2Aqi"
  | "Ic2ArrowLeft"
  | "Ic2ArrowRightFilled"
  | "Ic2Balistik"
  | "Ic2Bikes"
  | "Ic2BrokenBuilding"
  | "Ic2Cab"
  | "Ic2Call"
  | "Ic2CancelFilled"
  | "Ic2Car"
  | "Ic2Card"
  | "Ic2Centre"
  | "Ic2Chat"
  | "Ic2Check"
  | "Ic2CheckFilled"
  | "Ic2Chevron"
  | "Ic2ChevronDown"
  | "Ic2ChevronLeftDouble"
  | "Ic2ChevronRightDouble"
  | "Ic2ChevronUp"
  | "Ic2Clear"
  | "Ic2Close"
  | "Ic2Cloud"
  | "Ic2Community"
  | "Ic2Copy"
  | "Ic2Delete"
  | "Ic2Deputat"
  | "Ic2Disabled"
  | "Ic2DocUsed"
  | "Ic2Donation"
  | "Ic2DonationBlood"
  | "Ic2Dtek"
  | "Ic2Edit"
  | "Ic2Evacuation"
  | "Ic2Events"
  | "Ic2ExternalLink"
  | "Ic2Faq"
  | "Ic2Female"
  | "Ic2FileDownload"
  | "Ic2Fine"
  | "Ic2FlagUa"
  | "Ic2Fog"
  | "Ic2Hand"
  | "Ic2Heart"
  | "Ic2HeartFilled"
  | "Ic2Help"
  | "Ic2HourlyPark"
  | "Ic2Image"
  | "Ic2Info"
  | "Ic2InfoFilled"
  | "Ic2Kd"
  | "Ic2Keyboard"
  | "Ic2Kyiv"
  | "Ic2KyivAi"
  | "Ic2Language"
  | "Ic2Light"
  | "Ic2LocationFill"
  | "Ic2Maps"
  | "Ic2Markets"
  | "Ic2Mc"
  | "Ic2Mental"
  | "Ic2Mig"
  | "Ic2Minus"
  | "Ic2MonthPark"
  | "Ic2More"
  | "Ic2Night"
  | "Ic2Notification"
  | "Ic2Old"
  | "Ic2Osbb"
  | "Ic2Park"
  | "Ic2Petition"
  | "Ic2Pets"
  | "Ic2Plus"
  | "Ic2PlusCircle"
  | "Ic2Poll"
  | "Ic2ProfileEmpty"
  | "Ic2ProfileFilled"
  | "Ic2Qr"
  | "Ic2QuickAsscess"
  | "Ic2Radiation"
  | "Ic2Rain"
  | "Ic2Receipt"
  | "Ic2Refresh"
  | "Ic2Roads"
  | "Ic2Rocket"
  | "Ic2Route"
  | "Ic2Scan"
  | "Ic2School"
  | "Ic2Search"
  | "Ic2Security"
  | "Ic2Selector"
  | "Ic2Settings"
  | "Ic2Shahed"
  | "Ic2ShareAndroid"
  | "Ic2ShareIos"
  | "Ic2Shelter"
  | "Ic2ShieldCheckmark"
  | "Ic2ShieldQuest"
  | "Ic2ShieldXmark"
  | "Ic2Snow"
  | "Ic2Sort"
  | "Ic2Sparkles"
  | "Ic2SpinerFilled"
  | "Ic2Spinner"
  | "Ic2Star"
  | "Ic2StarFilled"
  | "Ic2Sun"
  | "Ic2Time"
  | "Ic2Tk"
  | "Ic2TransportSchedule"
  | "Ic2Tsnap"
  | "Ic2Ubd"
  | "Ic2User"
  | "Ic2UserPic"
  | "Ic2Utilities"
  | "Ic2Video"
  | "Ic2ViewGrid"
  | "Ic2ViewList"
  | "Ic2Visa"
  | "Ic2Volunteer"
  | "Ic2Wallet"
  | "Ic2Wc"
  | "Ic2Zerowaste"
  | "IcFileText";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon to draw. */
  name: IconName;
  /** Width and height in px; defaults to 24, the size the set is drawn at. */
  size?: number | string;
}
/** One glyph of the ic2_* set, drawn in currentColor. */
export declare const Icon: React.FC<IconProps>;

/** Action button in two sizes and five variants. Dims to 70% while pressed (not drawn in Figma: a proposal). */
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** primary: the one main action per screen; secondary: alternatives; bezeled: tinted; ghost: text-only (with an icon); elevated: small only. */
  variant?: "primary" | "secondary" | "bezeled" | "ghost" | "elevated";
  /** regular: 48px tall; small: 32px, for toolbars and inline actions. */
  size?: "regular" | "small";
  label?: string;
  /** Glyph, usually <Icon name="…" />. */
  icon?: React.ReactNode;
  /** left and right with a label; only for an icon button (regular: icon left only). */
  iconPosition?: "left" | "right" | "only";
  disabled?: boolean;
  /** Spinner in the icon slot; clicks are ignored. Not drawn in Figma: a proposal. */
  loading?: boolean;
  /** Stretch to the container width, e.g. the bottom action of a screen. */
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  'aria-label'?: string;
}
export declare const Button: React.FC<ButtonProps>;

/** Branded payment button: Apple Pay, Google Pay or Дія. 48px tall. Figma has no disabled state for these. */
export interface PayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Payment provider; google-dark is the dark Google Pay button. */
  provider?: "apple" | "google" | "google-dark" | "diia";
  /** Text beside the Дія mark; diia only (Figma shows the placeholder "Label"). */
  label?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  'aria-label'?: string;
}
export declare const PayButton: React.FC<PayButtonProps>;

/** Floating action button on Liquid Glass: icon only (48px circle) or icon + label. */
export interface FABProps {
  className?: string;
  style?: React.CSSProperties;
  /** Glyph, usually <Icon name="…" />. */
  icon?: React.ReactNode;
  /** Text next to the icon; omit for the round 48px icon-only button. */
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Required when there is no label. */
  'aria-label'?: string;
}
export declare const FAB: React.FC<FABProps>;

/** Single-line text input, 48px tall, fills its container. A real <input>: controlled with value + onChange, or uncontrolled with defaultValue. */
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  /** Label above the field; also its accessible name. */
  label?: string;
  /** Controlled value. Omit it (and use defaultValue) to let the field keep its own state. */
  value?: string;
  defaultValue?: string;
  /** Called on every keystroke with the new text. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** Hint under the field, in content-secondary; hidden in the error state. */
  helperText?: string;
  /** Error text under the field, in content-negative; shown when state="error". */
  message?: string;
  /** Trailing 24px icon, e.g. <Icon name="Ic2Close" />. */
  icon?: React.ReactNode;
  /** The focus look also turns on by itself while the field has focus. */
  state?: "default" | "focus" | "error";
  /** Free text: a <textarea> that starts at `rows` lines and grows with its text (Figma «text-field / multiple lines»). No trailing icon. */
  multiline?: boolean;
  /** multiline only: the starting height in lines (20px each). Default 3. */
  rows?: number;
  disabled?: boolean;
  type?: "text" | "email" | "tel" | "number" | "password" | "url";
  inputMode?: "text" | "numeric" | "decimal" | "tel" | "email" | "url" | "search";
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const TextField: React.FC<TextFieldProps>;

/** Search bar of the blue Home header (background-bg-accent-home): white field, white «Закрити». Fills its container. A real <input type="search">. */
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  /** Controlled query; omit for an uncontrolled field. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Enter pressed. */
  onSubmit?: (value: string) => void;
  /** The × in the field: clears the query, then calls this. */
  onClear?: () => void;
  /** «Закрити»: clears, drops focus, then calls this. */
  onCancel?: () => void;
  placeholder?: string;
  /** Forces the focused look; by default it follows real focus. */
  focused?: boolean;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const Search: React.FC<SearchProps>;

/** Ukrainian licence-plate input: typed characters in ink, the rest of the XX0000XX template greyed. */
export interface LicensePlateProps {
  className?: string;
  style?: React.CSSProperties;
  /** Country code on the blue strip. */
  region?: string;
  /** Plate number, up to 8 characters, uppercased, letters and digits only. Controlled when given. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Forces the focused look; by default it follows real focus. */
  focused?: boolean;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const LicensePlate: React.FC<LicensePlateProps>;

/** On/off switch, 51×31. On is the brand blue; off is the iOS track. */
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Required: what the switch turns on. */
  'aria-label'?: string;
}
export declare const Switch: React.FC<SwitchProps>;

/** Row of a grouped list: settings, menus, navigation. fills its container. Height is auto with a 48px minimum: 48 for one line, 62 with a caption, 55 with a switch, 52 segmented. */
export interface CellProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Second line under the label (not available with accessory="segmented"). */
  caption?: string;
  /** Leading 24px icon, e.g. <Icon name="Ic2Car" />. */
  icon?: React.ReactNode;
  /** Trailing element: chevron for navigation rows, switch for settings, segmented for a two-way choice. */
  accessory?: "none" | "chevron" | "switch" | "segmented";
  /** Switch state when accessory="switch". */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Makes the row a button (accessory "none" or "chevron"): focusable, Enter/Space activate. With "switch", a tap on the row toggles the switch, then calls onClick. Not used with "segmented". */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Segment labels when accessory="segmented". Default ["Укр", "En"]. */
  segmentOptions?: string[];
  /** Selected segment: an index, or one of the labels. Default 0. */
  segmentValue?: number | string;
  /** Called with the index (when segmentValue is a number) or the label. */
  onSegmentChange?: (value: number | string) => void;
}
export declare const Cell: React.FC<CellProps>;

/** Selectable row for single- or multi-choice lists. Fills its container. Height is auto with a 48px minimum. */
export interface CellSelectionProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Shows the blue check circle; unselected shows an empty circle. */
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const CellSelection: React.FC<CellSelectionProps>;

/** Read-only label/value pair (document numbers, amounts), with an optional trailing action. Fills its container. */
export interface CellDataRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Name of the value, left, in content-secondary. */
  label?: string;
  /** The value, right-aligned, in content-primary. */
  value?: string;
  /** Trailing action icon, rendered as a button with a 44x44 tap area. true shows the default copy icon; pass a node to swap it. */
  icon?: boolean | React.ReactNode;
  /** Accessible name of the icon button. Default "Копіювати". */
  iconLabel?: string;
  /** Called when the icon button is pressed (click, Enter or Space). */
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const CellDataRow: React.FC<CellDataRowProps>;

/** Caption above or below a grouped list section. Fills its container. */
export interface ListCaptionProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Indents the caption to line up with cell text instead of the list edge. */
  indent?: boolean;
}
export declare const ListCaption: React.FC<ListCaptionProps>;

/** Top bar of the three root tabs (Home, Services, Profile), with the status bar. */
export interface NavbarMainProps {
  className?: string;
  style?: React.CSSProperties;
  /** The tab the bar belongs to. home shows the date, greeting and weather. */
  type?: "home" | "services" | "profile";
  /** Collapsed bar (default). false is the expanded header: on home, white on background-bg-accent-home (put the blue behind it); on services and profile, the large title or the profile card. */
  scrolled?: boolean;
  /** Home only. Power-outage status mark (Ukrenergo schedule). Default true. */
  showPowerStatus?: boolean;
  /** Home only. false hides the temperature and the air-quality index. Default true. */
  showWeather?: boolean;
  /** Home only, expanded. The date, months lowercase, e.g. "23 жовтня" (default). */
  date?: string;
  /** Home only, expanded. e.g. "Доброго дня!" (default). */
  greeting?: string;
  /** Home only. Current temperature, e.g. "23°" (default). */
  temperature?: string;
  /** Home only. Weather glyph: an icon name such as "Ic2Sun" (default), "Ic2Cloud", "Ic2Rain", "Ic2Snow", "Ic2Fog", "Ic2Night", or a node. */
  weatherIcon?: string | React.ReactNode;
  /** Home only. Air-quality index, e.g. 47 (default). null or "" hides it. */
  aqi?: string | number | null;
  /** Avatar on home and on the expanded profile: an image URL or a node, shown in the circle. Default is the empty-profile icon Ic2ProfileEmpty; "sample" shows the Figma sample photo. */
  avatar?: string | React.ReactNode;
  /** Services and collapsed profile: the bar title. Defaults: "Сервіси" (collapsed services), "Міські сервіси" (expanded services), userName (profile). */
  title?: string;
  /** Profile only. The user's name, e.g. "Веніамін М." (default). */
  userName?: string;
  /** Profile only, expanded. The phone under the name, e.g. "+380 12 345 67 89" (default). */
  phone?: string;
  /** Services only. The selected view in the grid/list toggle. Default "grid". */
  view?: "grid" | "list";
  /** Services only. Makes the grid/list toggle real buttons; receives "grid" or "list". */
  onViewChange?: (view: "grid" | "list") => void;
  /** Expanded home. Makes the «Пошук» pill a button. */
  onSearch?: () => void;
  /** Home and expanded profile. Makes the avatar a button. */
  onAvatarClick?: () => void;
  /** Home. Makes the power-status mark a button. */
  onPowerStatusClick?: () => void;
  /** Home. Makes the temperature a button. */
  onWeatherClick?: () => void;
  /** Home. Makes the air-quality index a button. */
  onAqiClick?: () => void;
  /** Services and profile. Makes the «Головна» pill or chevron (back to the Home tab) a button. */
  onHomeClick?: () => void;
  /** Profile. Makes the edit pencil or «Змінити» pill a button. */
  onEdit?: () => void;
}
export declare const NavbarMain: React.FC<NavbarMainProps>;

/** A glyph button in a navbar slot (NavbarRegular, NavbarEnhanced): 24px glyph, 44×44 tap area, focus ring, 70% while pressed. */
export interface NavbarSlotAction {
  /** An icon name such as "Ic2ShareIos", or an `<Icon />` (redrawn at 24px). */
  icon: IconName | React.ReactNode;
  /** Required: the button's aria-label, in Ukrainian («Поділитися», «Інформація»). */
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** Bar of a pushed screen: back button, title centred on the full width and an optional action, with the status bar. */
export interface NavbarRegularProps {
  className?: string;
  style?: React.CSSProperties;
  /** back: back button; back-action: back + text action on the right; two-icons: back + trailing icon. */
  variant?: "back" | "back-action" | "two-icons";
  /** White content on a coloured or image header. */
  inverted?: boolean;
  /** Detail pages: no fill and no bottom border, the glyphs sit on the page background; the title is left out unless you pass one. */
  transparent?: boolean;
  /** One line, Headline 17/22 semibold, centred on the bar's full width; a long title ends with an ellipsis before the side slots. "" leaves it out. */
  title?: string;
  /** Right-hand text action for variant="back-action" (Callout/Emphasized 16/21, content-link, on the title's baseline). */
  actionLabel?: string;
  /** Makes the action a real button (focus ring, 44px tall tap area, 70% while pressed). Without it the action is plain text. */
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
  /** Called by the back arrow («Назад»). The default back arrow is a 44×44 button even without it. */
  onBack?: React.MouseEventHandler<HTMLButtonElement>;
  /** Puts a close glyph (Ic2Close, «Закрити») in the leading slot instead of the back arrow, for flows that close. */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /** Any other leading button; wins over onClose and onBack. */
  leadingAction?: NavbarSlotAction;
  /** Trailing glyph button, on every variant except back-action (its text action owns that slot). One per bar. */
  trailingAction?: NavbarSlotAction;
  /** Legacy: a node drawn as given in the leading slot (not a button unless onBack is set). false leaves the slot empty. Prefer onBack, onClose or leadingAction. */
  leadingIcon?: React.ReactNode;
  /** Legacy, variant="two-icons": a node drawn as given in the trailing slot. Prefer trailingAction. */
  trailingIcon?: React.ReactNode;
  /** Thin progress bar under the bar (multi-step flows). */
  showProgress?: boolean;
}
export declare const NavbarRegular: React.FC<NavbarRegularProps>;

/** Bar of list screens: centred title, a search field or tabs under it, and the status bar. */
export interface NavbarEnhancedProps {
  className?: string;
  style?: React.CSSProperties;
  /** search: title + search field; tabs: title + segmented control. */
  type?: "search" | "tabs";
  /** Centred one-line title, `headline` (17/22 semibold) as drawn in Figma. */
  title?: string;
  /** Puts the back arrow (Ic2ArrowLeft, «Назад») in the leading slot as a 44×44 button. Empty by default. */
  onBack?: React.MouseEventHandler<HTMLButtonElement>;
  /** Puts a close glyph (Ic2Close, «Закрити») in the leading slot instead. */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /** Any other leading button `{ icon, label, onClick }`; wins over onClose and onBack. */
  leadingAction?: NavbarSlotAction;
  /** Trailing glyph button `{ icon, label, onClick }`, 44×44, label = aria-label. Empty by default. */
  trailingAction?: NavbarSlotAction;
  /** Legacy: a node drawn as given in the 24×24 left slot. Prefer onBack, onClose or leadingAction. */
  leadingIcon?: React.ReactNode;
  /** Legacy: a node drawn as given in the 24×24 right slot. Prefer trailingAction. */
  trailingIcon?: React.ReactNode;
  /** Segment labels for type="tabs". */
  tabs?: string[];
  /** Index of the selected tab (from 0), type="tabs". */
  selectedTab?: number;
  /** Called with the tapped tab's index, type="tabs". */
  onTabChange?: (index: number) => void;
  /** Controlled search text, type="search". Pass with onSearchChange. */
  searchValue?: string;
  /** Starting search text when uncontrolled, type="search". */
  defaultSearchValue?: string;
  /** New search text first, the input event second (no event when the clear button empties it). */
  onSearchChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  /** Enter or the keyboard's search key, with the current text. */
  onSearchSubmit?: (value: string) => void;
  /** The clear button («Очистити»), shown only while there is text; fires after the text is emptied. */
  onSearchClear?: () => void;
  /** Placeholder and accessible name of the search field; defaults to «Пошук». */
  searchPlaceholder?: string;
  /** Focus the search field on mount. */
  searchAutoFocus?: boolean;
}
export declare const NavbarEnhanced: React.FC<NavbarEnhancedProps>;

/** Switches between 2–5 views of the same content. 32px tall, segments share the width. */
export interface SegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  /** Segment labels, 2 to 5. */
  options?: string[];
  /** Selected segment: an index, or one of the option labels. */
  value?: number | string;
  /** Called with the index (when value is a number) or the label. */
  onChange?: (value: number | string) => void;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;

/** Dots showing the current page of a carousel or onboarding. */
export interface PageControlProps {
  className?: string;
  style?: React.CSSProperties;
  /** Number of pages. */
  count?: number;
  /** Current page, from 0. */
  selected?: number;
  /** Frosted pill behind the dots, for use over images. */
  platter?: boolean;
}
export declare const PageControl: React.FC<PageControlProps>;

/** Transient status message on Liquid Glass (light or dark glass with the theme). Fills its container; text wraps. */
export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  /** success: green check; error: red cross. */
  type?: "success" | "error";
  /** Message, set in subheadline. */
  label?: string;
}
export declare const Toast: React.FC<ToastProps>;

/** Progress of a known or unknown duration. 8px tall, fills its container. */
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Progress from 0 to 1. */
  value?: number;
  /** Unknown duration: a centred segment instead of a fill. */
  indeterminate?: boolean;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;

/** A service's icon in the three treatments the app uses. */
export interface ServiceIconProps {
  className?: string;
  style?: React.CSSProperties;
  /** Any ic2_* icon name. */
  icon?: string;
  /** default: 24px in ink; faq: 20px on a 32px disc; link: 24px in content-link. */
  type?: "default" | "faq" | "link";
}
export declare const ServiceIcon: React.FC<ServiceIconProps>;

/** A 108×112 quick-access tile on the Home screen: a service shortcut, the «Усі сервіси» tile, or a live QR-ticket / parking status. Always a real button. */
export interface QuickAccessItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** The look. regular: a service on the light tile (background-bg-quick-access); all: the navy «Усі сервіси» tile with Ic2Kd; qr-active: pink tile, red ink, Ic2Qr; parking-active: yellow tile, orange ink, Ic2Park in a 4px ring. Default "regular". */
  type?: "regular" | "all" | "qr-active" | "parking-active";
  /** Alias of `type`; wins when both are given. */
  variant?: "regular" | "all" | "qr-active" | "parking-active";
  /** First line(s): the service name, «QR-квитки», or the parked car's plate («КА 1234 ІР»). Wraps to two lines at 84px, or one when `status` is set; "\n" forces a break. Defaults: «Усі\nсервіси» for all, «QR-квитки» for qr-active, «Паркування» for parking-active. */
  label?: string;
  /** Second line for the active looks: the ticket count («(5 шт.)») or the parking session timer («00:32»). One line, tabular digits. */
  status?: React.ReactNode;
  /** An ic2_* icon name or an `<Icon/>` node, 24px, drawn in the tile's ink. Required for regular (no icon = an empty 24×24 slot); all, qr-active and parking-active default to Ic2Kd, Ic2Qr and Ic2Park. */
  icon?: string | React.ReactNode;
  /** Opens the service, the services list, the tickets or the parking session. The tile is always a button, with or without a handler. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name when the visible text is not enough (for example «Паркування КА 1234 ІР, 00:32»). */
  "aria-label"?: string;
}
export declare const QuickAccessItem: React.FC<QuickAccessItemProps>;

/** A tile of the Services screen grid: service icon and name on a surface card, 72px tall, fills its grid cell. Always a button. */
export interface ServiceGridItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** Service name, e.g. «Штрафи». Wraps to at most two lines. */
  label?: string;
  /** The service glyph: an ic2_* name (drawn like ServiceIcon type="default", 24px in content-primary) or a node such as <Icon name="Ic2Fine" />. Omitted = empty 24px slot. */
  icon?: string | React.ReactNode;
  /** Pill in the top-right corner, 4px outside the tile: true shows «бета», a string shows that text (e.g. «новий»). */
  badge?: boolean | string;
  /** Opens the service. The tile is always a real button (focusable, Enter/Space, 70% pressed state). */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Only when the visible label is not enough (it is read by default, plus the badge text). */
  "aria-label"?: string;
}
export declare const ServiceGridItem: React.FC<ServiceGridItemProps>;

/** One entry of the activity feed: icon disc, title, description and time. Full-bleed: 56px tall, fills its container (375 on a phone) with its own 16px side padding. */
export interface FeedCellProps {
  className?: string;
  style?: React.CSSProperties;
  /** First line, one line, truncated with an ellipsis («Штраф сплачено»). */
  title?: string;
  /** Second line before the time («Постанова ЛК 1234567 · 340,00 ₴»); truncated so the time stays visible. */
  description?: string;
  /** Time of the event in 24 hours («14:20»), after the description, separated by « · ». */
  time?: string;
  /** Glyph in the 40px disc: an ic2_* icon name ("Ic2Fine") or a node (<Icon name="Ic2Fine" />). Empty 24px slot when omitted. */
  icon?: string | React.ReactNode;
  /** Glyph colour: default (content-primary), accent (content-accent), negative (content-negative), warning (content-warning). The status must also be in the title. */
  tint?: "default" | "accent" | "negative" | "warning";
  /** Trailing 20px chevron. Default: shown when onClick is given (as Figma draws the tappable row). */
  chevron?: boolean;
  /** Makes the whole row a button (focusable, Enter/Space, pressed state, inset focus ring) that opens the entry. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const FeedCell: React.FC<FeedCellProps>;

/** Date header between groups of FeedCells. Full-bleed: 34px tall, fills its container (375 on a phone) with its own 16px side padding. */
export interface FeedDateProps {
  className?: string;
  style?: React.CSSProperties;
  /** The day, lowercase month: «Сьогодні», «Вчора», «23 жовтня». Default «Сьогодні». */
  label?: string;
  /** Heading level exposed to assistive tech (role="heading"). Default 3. */
  level?: number;
}
export declare const FeedDate: React.FC<FeedDateProps>;

/** Bottom sheet over a dimmed backdrop: grabber, optional close button, a title block, free content and actions. Fills the screen width. */
export interface ModalProps {
  className?: string;
  /** Applied to the sheet (the role="dialog" element). */
  style?: React.CSSProperties;
  /** Shown while true; nothing renders when false. Default true so a static preview renders; in app code drive it from state. */
  open?: boolean;
  /** Called when the person asks to close, with the reason: "backdrop" (tap on the dimmed area) and "escape" only when dismissible, "close" from the close button. Set open to false here. */
  onClose?: (reason: "backdrop" | "escape" | "close") => void;
  /** Sheet title, Title3 emphasized 20/25. Names the dialog (aria-labelledby). Sentence case, a question for a confirmation. */
  title?: React.ReactNode;
  /** Text under the title, Subheadline 15/20 in content-secondary. Describes the dialog (aria-describedby). */
  description?: React.ReactNode;
  /** Picture above the title (Figma: a 64 or 80px service illustration). Decorative: hidden from screen readers. */
  illustration?: React.ReactNode;
  /** Content between the title block and the actions (data rows, selections, a form). Taller content scrolls inside the sheet. */
  children?: React.ReactNode;
  /** Action buttons, stacked with a 12px gap, the primary one first. <Button>s stretch to the sheet width unless they set fullWidth. */
  actions?: React.ReactNode;
  /** Figma "close button=true": a 44×44 Liquid Glass close button at the top left; the gaps between parts drop from 24 to 12. */
  showClose?: boolean;
  /** Accessible name of the close button. Default "Закрити". */
  closeLabel?: string;
  /** When true (default), a tap on the backdrop and the Escape key call onClose. Set false when the person must pick an action. */
  dismissible?: boolean;
  /** role="alertdialog" instead of "dialog", for a confirmation that interrupts the task (sign, pay, delete). */
  alert?: boolean;
  /** auto: as tall as the content, up to 62px below the top of the screen; full: always that tall (Figma "fullscreen"), content scrolls. */
  size?: "auto" | "full";
  /** Static rendering for previews and docs: fills the nearest positioned ancestor (position: absolute) instead of the viewport, does not move or trap focus, no Escape, no scroll lock, no aria-modal. Live screens leave it false. */
  inline?: boolean;
  /** Name of the dialog when there is no title. */
  'aria-label'?: string;
}
export declare const Modal: React.FC<ModalProps>;

/** The white surface block that holds content on the gray page: a grouped list of Cells, one card per thing, a card of fields, a section of a detail page. background-bg-surface, radius-control and shadow-elevation; fills its container. */
export interface CardProps {
  className?: string;
  /** Merged last, over the card's own styles: use it for a one-off padding (e.g. "var(--space-4) var(--space-5)") or alignItems. */
  style?: React.CSSProperties;
  /** Content, stacked in a column. With `onClick`, text and spans only: no buttons, links or fields inside. */
  children?: React.ReactNode;
  /** A ListCaption above the block, space-2 (8px) away. */
  caption?: string;
  /** Inner padding. list = space-1 top and bottom, none at the sides (a block of Cell, CellSelection, CellDataRow rows); regular = space-4 (one card per thing, fields); large = space-5 (stacked sections of a detail page); none = 0. */
  padding?: "list" | "regular" | "large" | "none";
  /** Space step between children (1 = 4px … 6 = 32px). Omitted = 0. */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** shadow-elevation, as the shipped screens draw it. false = the flat block of the Figma spec frames, separated by fill only. */
  elevated?: boolean;
  /** Makes the whole card one real button: focusable, Enter/Space, focus ring, 70% pressed. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** The card's element when it is not a button, e.g. "section" for a part of a detail page, "li" in a list. */
  as?: "div" | "section" | "article" | "li";
  /** Names a clickable card when its text alone is not enough, or a block with a role such as listbox. */
  "aria-label"?: string;
  /** Any other attribute (role, id, data-*) goes on the block. */
  [attribute: string]: unknown;
}
export declare const Card: React.FC<CardProps>;

/** A filled status pill: a status word with an optional 16px glyph, 24px tall, hugs its label. */
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  /** The status word, e.g. «Підтверджено». Always a word: colour alone never carries a status. */
  label: string;
  /** Fill. accent = Figma default (background-bg-accent), neutral (background-bg-subtle, secondary ink), positive = success, warning = alert, negative = error, dark = the «no power» pill (chart-chart-power-off). */
  tone?: "accent" | "neutral" | "positive" | "warning" | "negative" | "dark";
  /** Leading 16px glyph: an ic2_* name such as "Ic2Check", or a node. */
  icon?: string | React.ReactNode;
  [attribute: string]: unknown;
}
export declare const Badge: React.FC<BadgeProps>;

/** An unfilled inline mark: a 16px glyph or status dot and a footnote label, 8px apart. */
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  /** One line; ends with «…» when it does not fit. */
  label: string;
  /** regular = glyph + label in content-secondary (metadata); status = coloured dot + label in content-primary (where something stands). */
  type?: "regular" | "status";
  /** regular only: the 16px glyph, an ic2_* name or a node. */
  icon?: string | React.ReactNode;
  /** status only: the dot's colour. accent is the Figma default. */
  tone?: "accent" | "positive" | "warning" | "negative" | "neutral";
  [attribute: string]: unknown;
}
export declare const Tag: React.FC<TagProps>;

/** A selectable 32px pill for filters and quick choices. A real toggle button with aria-pressed and a 44px tap area. */
export interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  /** One line; ends with «…» when it does not fit. */
  label: string;
  /** On = background-bg-primary-cta (Figma active=true); off = background-bg-secondary-cta. */
  selected?: boolean;
  /** The parent owns the state: flip `selected` here. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Leading 16px glyph: an ic2_* name or a node. */
  icon?: string | React.ReactNode;
  disabled?: boolean;
  /** Only when the label alone does not name the choice. */
  'aria-label'?: string;
  [attribute: string]: unknown;
}
export declare const Chip: React.FC<ChipProps>;

/** A 1px border-border-regular line that fills its container. role="separator". */
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Starts after the space-4 side margin, for a line between rows inside one block. */
  inset?: boolean;
  [attribute: string]: unknown;
}
export declare const Divider: React.FC<DividerProps>;

export interface SelectOption { value: string; label: string; disabled?: boolean }
/** A field that opens the platform's own menu: TextField's frame with the chosen value and an Ic2Selector glyph. A real <select> under the hood. */
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  /** Label above the field; also its accessible name. */
  label?: string;
  /** Options as { value, label } or plain strings (value = label). Up to about 10; more, or a search: a Modal of CellSelection rows or a pushed screen. */
  options: Array<SelectOption | string>;
  /** Controlled value. Omit it (and use defaultValue) to let the field keep its own choice. */
  value?: string;
  defaultValue?: string;
  /** Called with the chosen value first, the event second. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Shown in content-secondary while nothing is chosen. Default «Оберіть». */
  placeholder?: string;
  /** Hint under the field; hidden in the error state. */
  helperText?: string;
  /** Error text under the field, shown when state="error". */
  message?: string;
  /** The focus look also turns on by itself while the field has focus. */
  state?: "default" | "focus" | "error";
  disabled?: boolean;
  name?: string;
  id?: string;
  /** Needed only without a visible label. */
  'aria-label'?: string;
}
export declare const Select: React.FC<SelectProps>;
