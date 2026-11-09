import * as React from 'react';
/** One entry of the activity feed: icon disc, title, description and time. Full-bleed: 56px tall, fills its container (375 on a phone) with its own 16px side padding. */
export interface FeedCellProps {
  className?: string;
  style?: React.CSSProperties;
  /** First line, one line, truncated with an ellipsis («Штраф сплачено»). */
  title?: string;
  /** Second line before the time («Постанова ЛК 1234567 · 340,00 ₴»); truncated so the time stays visible. */
  description?: string;
  /** Time of the event in 24 hours («14:20»), after the description, separated by « · ». */
  time?: string;
  /** Glyph in the 40px disc: an ic2_* icon name ("Ic2Fine") or a node (<Icon name="Ic2Fine" />). Empty 24px slot when omitted. */
  icon?: string | React.ReactNode;
  /** Glyph colour: default (content-primary), accent (content-accent), negative (content-negative), warning (content-warning). The status must also be in the title. */
  tint?: "default" | "accent" | "negative" | "warning";
  /** Trailing 20px chevron. Default: shown when onClick is given (as Figma draws the tappable row). */
  chevron?: boolean;
  /** Makes the whole row a button (focusable, Enter/Space, pressed state, inset focus ring) that opens the entry. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const FeedCell: React.FC<FeedCellProps>;
export default FeedCell;
