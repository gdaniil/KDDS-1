import * as React from 'react';
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
export default PayButton;
