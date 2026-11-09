import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface WeatherItemProps {
  className?: string;
  style?: React.CSSProperties;
  onBlue?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WeatherItem: React.FC<WeatherItemProps>;
export default WeatherItem;
