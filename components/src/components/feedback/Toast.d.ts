import * as React from 'react';
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
export default Toast;
