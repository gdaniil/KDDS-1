import * as React from 'react';
/** A filled status pill: a status word with an optional 16px glyph, 24px tall, hugs its label. */
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  /** The status word, e.g. «Підтверджено». Always a word: colour alone never carries a status. */
  label: string;
  /** Fill. accent = Figma default (background-bg-accent), neutral (background-bg-subtle, secondary ink), positive = success, warning = alert, negative = error, dark = the «no power» pill (chart-chart-power-off). */
  tone?: "accent" | "neutral" | "positive" | "warning" | "negative" | "dark";
  /** Leading 16px glyph: an ic2_* name such as "Ic2Check", or a node. */
  icon?: string | React.ReactNode;
  [attribute: string]: unknown;
}
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
