import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface Ic2LightProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "off" | "on" | "alert";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Ic2Light: React.FC<Ic2LightProps>;
export default Ic2Light;
