import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface ButtonRegularProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "pay" | "label+icon" | "icon only" | "label";
  style2?: "primary" | "secondary" | "bezeled" | "apple-pay" | "g-pay / light" | "g-pay / dark" | "ghost" | "diia";
  state?: "enabled" | "disabled";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ButtonRegular: React.FC<ButtonRegularProps>;
export default ButtonRegular;
