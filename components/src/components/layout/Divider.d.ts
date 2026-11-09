import * as React from 'react';
/** A 1px border-border-regular line that fills its container. role="separator". */
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Starts after the space-4 side margin, for a line between rows inside one block. */
  inset?: boolean;
  [attribute: string]: unknown;
}
export declare const Divider: React.FC<DividerProps>;
export default Divider;
