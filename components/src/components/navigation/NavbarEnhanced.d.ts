import * as React from 'react';
import type { NavbarSlotAction } from './NavbarRegular';
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
export default NavbarEnhanced;
