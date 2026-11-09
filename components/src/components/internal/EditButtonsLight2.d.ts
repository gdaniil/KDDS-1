import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface EditButtonsLight2Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "selected" | "unselected" | "add" | "remove";
  /** Text content; defaults to "􀅽". */
  text1?: string;
}
export declare const EditButtonsLight2: React.FC<EditButtonsLight2Props>;
export default EditButtonsLight2;
