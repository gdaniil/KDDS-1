import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface StatusBarIPhoneProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark" | "light";
  background?: boolean;
  showBG?: boolean;
  /** Text content; defaults to "9:41". */
  text1?: string;
}
export declare const StatusBarIPhone: React.FC<StatusBarIPhoneProps>;
export default StatusBarIPhone;
