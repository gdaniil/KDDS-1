import * as React from 'react';
/** Date header between groups of FeedCells. Full-bleed: 34px tall, fills its container (375 on a phone) with its own 16px side padding. */
export interface FeedDateProps {
  className?: string;
  style?: React.CSSProperties;
  /** The day, lowercase month: «Сьогодні», «Вчора», «23 жовтня». Default «Сьогодні». */
  label?: string;
  /** Heading level exposed to assistive tech (role="heading"). Default 3. */
  level?: number;
}
export declare const FeedDate: React.FC<FeedDateProps>;
export default FeedDate;
