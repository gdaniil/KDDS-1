import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface WeatherIconProps {
  className?: string;
  style?: React.CSSProperties;
  onBlue?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const WeatherIcon: React.FC<WeatherIconProps>;
export default WeatherIcon;
