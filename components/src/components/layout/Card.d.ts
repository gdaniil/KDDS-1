import * as React from 'react';
/** The white surface block that holds content on the gray page: a grouped list of Cells, one card per thing, a card of fields, a section of a detail page. background-bg-surface, radius-control and shadow-elevation; fills its container. */
export interface CardProps {
  className?: string;
  /** Merged last, over the card's own styles: use it for a one-off padding (e.g. "var(--space-4) var(--space-5)") or alignItems. */
  style?: React.CSSProperties;
  /** Content, stacked in a column. With `onClick`, text and spans only: no buttons, links or fields inside. */
  children?: React.ReactNode;
  /** A ListCaption above the block, space-2 (8px) away. */
  caption?: string;
  /** Inner padding. list = space-1 top and bottom, none at the sides (a block of Cell, CellSelection, CellDataRow rows); regular = space-4 (one card per thing, fields); large = space-5 (stacked sections of a detail page); none = 0. */
  padding?: "list" | "regular" | "large" | "none";
  /** Space step between children (1 = 4px … 6 = 32px). Omitted = 0. */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** shadow-elevation, as the shipped screens draw it. false = the flat block of the Figma spec frames, separated by fill only. */
  elevated?: boolean;
  /** Makes the whole card one real button: focusable, Enter/Space, focus ring, 70% pressed. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** The card's element when it is not a button, e.g. "section" for a part of a detail page, "li" in a list. */
  as?: "div" | "section" | "article" | "li";
  /** Names a clickable card when its text alone is not enough, or a block with a role such as listbox. */
  "aria-label"?: string;
  /** Any other attribute (role, id, data-*) goes on the block. */
  [attribute: string]: unknown;
}
export declare const Card: React.FC<CardProps>;
export default Card;
