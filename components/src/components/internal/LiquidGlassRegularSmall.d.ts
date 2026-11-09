import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface LiquidGlassRegularSmallProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  state?: "default" | "primary";
}
export declare const LiquidGlassRegularSmall: React.FC<LiquidGlassRegularSmallProps>;
export default LiquidGlassRegularSmall;
