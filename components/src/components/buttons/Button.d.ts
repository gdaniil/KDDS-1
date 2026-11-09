import * as React from 'react';
/** Action button in two sizes and five variants. Dims to 70% while pressed (not drawn in Figma: a proposal). */
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** primary: the one main action per screen; secondary: alternatives; bezeled: tinted; ghost: text-only (with an icon); elevated: small only. */
  variant?: "primary" | "secondary" | "bezeled" | "ghost" | "elevated";
  /** regular: 48px tall, label 16/21 semibold; small: 32px, label 13/18 semibold, for toolbars and inline actions. */
  size?: "regular" | "small";
  label?: string;
  /** Glyph, usually <Icon name="…" />: an <Icon /> is drawn at the Figma slot size (24px regular, 20px small) and centred. */
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
export default Button;
