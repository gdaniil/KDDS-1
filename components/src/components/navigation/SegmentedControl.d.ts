import * as React from 'react';
/** Switches between 2–5 views of the same content. 32px tall, segments share the width. */
export interface SegmentedControlProps {
  className?: string;
  style?: React.CSSProperties;
  /** Segment labels, 2 to 5. */
  options?: string[];
  /** Selected segment: an index, or one of the option labels. */
  value?: number | string;
  /** Called with the index (when value is a number) or the label. */
  onChange?: (value: number | string) => void;
}
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export default SegmentedControl;
