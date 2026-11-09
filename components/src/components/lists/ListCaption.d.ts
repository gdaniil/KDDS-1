import * as React from 'react';
/** Caption above or below a grouped list section. Fills its container. */
export interface ListCaptionProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Indents the caption to line up with cell text instead of the list edge. */
  indent?: boolean;
}
export declare const ListCaption: React.FC<ListCaptionProps>;
export default ListCaption;
