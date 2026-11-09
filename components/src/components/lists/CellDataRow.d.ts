import * as React from 'react';
/** Read-only label/value pair (document numbers, amounts), with an optional trailing action. Fills its container. */
export interface CellDataRowProps {
  className?: string;
  style?: React.CSSProperties;
  /** Name of the value, left, in content-secondary. */
  label?: string;
  /** The value, right-aligned, in content-primary. */
  value?: string;
  /** Trailing action icon, rendered as a button with a 44x44 tap area. true shows the default copy icon; pass a node to swap it. */
  icon?: boolean | React.ReactNode;
  /** Accessible name of the icon button. Default "Копіювати". */
  iconLabel?: string;
  /** Called when the icon button is pressed (click, Enter or Space). */
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const CellDataRow: React.FC<CellDataRowProps>;
export default CellDataRow;
