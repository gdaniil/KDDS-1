import * as React from 'react';
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
export default Chip;
