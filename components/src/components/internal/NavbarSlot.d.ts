import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface NavbarSlotProps {
  /** { button: { icon, label, onClick } } draws a 44×44 button centred on the 24px slot; { node } draws the node as given. */
  slot?: { button?: { icon: string | React.ReactNode; label: string; onClick?: React.MouseEventHandler<HTMLButtonElement> }; node?: React.ReactNode } | null;
  style?: React.CSSProperties;
}
export declare const NavbarSlot: React.FC<NavbarSlotProps>;
export default NavbarSlot;
