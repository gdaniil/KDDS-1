import * as React from 'react';
/** Dots showing the current page of a carousel or onboarding. */
export interface PageControlProps {
  className?: string;
  style?: React.CSSProperties;
  /** Number of pages. */
  count?: number;
  /** Current page, from 0. */
  selected?: number;
  /** Frosted pill behind the dots, for use over images. */
  platter?: boolean;
}
export declare const PageControl: React.FC<PageControlProps>;
export default PageControl;
