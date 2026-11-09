import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface ButtonSmallProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "icon-only" | "label" | "icon-right" | "icon-left";
  style2?: "primary" | "secondary" | "elevated" | "bezeled" | "ghost";
  state?: "enabled" | "disabled";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ButtonSmall: React.FC<ButtonSmallProps>;
export default ButtonSmall;
