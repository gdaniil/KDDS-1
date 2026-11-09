import * as React from 'react';
/** Selectable row for single- or multi-choice lists. Fills its container. Height is auto with a 48px minimum. */
export interface CellSelectionProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Shows the blue check circle; unselected shows an empty circle. */
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const CellSelection: React.FC<CellSelectionProps>;
export default CellSelection;
