import * as React from 'react';
/** A glyph button in a navbar slot: 24px glyph, 44×44 tap area, focus ring, 70% while pressed. */
export interface NavbarSlotAction {
  /** An icon name such as "Ic2ShareIos", or an `<Icon />` (redrawn at 24px). */
  icon: string | React.ReactNode;
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
export default NavbarRegular;
