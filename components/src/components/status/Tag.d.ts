import * as React from 'react';
/** An unfilled inline mark: a 16px glyph or status dot and a footnote label, 8px apart. */
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  /** One line; ends with «…» when it does not fit. */
  label: string;
  /** regular = glyph + label in content-secondary (metadata); status = coloured dot + label in content-primary (where something stands). */
  type?: "regular" | "status";
  /** regular only: the 16px glyph, an ic2_* name or a node. */
  icon?: string | React.ReactNode;
  /** status only: the dot's colour. accent is the Figma default. */
  tone?: "accent" | "positive" | "warning" | "negative" | "neutral";
  [attribute: string]: unknown;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
