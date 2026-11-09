import * as React from 'react';
/** Internal: the 40px leading icon disc of a FeedCell (Figma "feed / icon"). Not exported publicly. */
export interface FeedIconProps {
  className?: string;
  style?: React.CSSProperties;
  /** An ic2_* icon name ("Ic2Fine") or a node (<Icon name="Ic2Fine" />). Empty 24px slot when omitted. */
  icon?: string | React.ReactNode;
  /** Glyph colour: default = content-primary, accent = content-accent, negative = content-negative, warning = content-warning. */
  tint?: "default" | "accent" | "negative" | "warning";
}
export declare const FeedIcon: React.FC<FeedIconProps>;
export default FeedIcon;
