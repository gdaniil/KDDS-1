import * as React from 'react';
/** Internal: the label, outlined box and hint/error line shared by TextField multiline and Select. Not exported. */
export interface FieldFrameProps {
  label?: string;
  htmlFor?: string;
  labelId?: string;
  state?: "default" | "focus" | "error";
  focused?: boolean;
  disabled?: boolean;
  message?: string;
  helperText?: string;
  boxStyle?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare const FieldFrame: React.FC<FieldFrameProps>;
