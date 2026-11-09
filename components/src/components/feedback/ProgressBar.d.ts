import * as React from 'react';
/** Progress of a known or unknown duration. 8px tall, fills its container. */
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Progress from 0 to 1. */
  value?: number;
  /** Unknown duration: a centred segment instead of a fill. */
  indeterminate?: boolean;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
