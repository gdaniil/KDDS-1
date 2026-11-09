import * as React from 'react';
/** Floating action button on Liquid Glass: icon only (48px circle) or icon + label (48px tall pill). */
export interface FABProps {
  className?: string;
  style?: React.CSSProperties;
  /** Glyph, usually <Icon name="…" />: drawn at 24px and centred in the slot. */
  icon?: React.ReactNode;
  /** Text next to the icon; omit for the round 48px icon-only button. */
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Required when there is no label. */
  'aria-label'?: string;
}
export declare const FAB: React.FC<FABProps>;
export default FAB;
