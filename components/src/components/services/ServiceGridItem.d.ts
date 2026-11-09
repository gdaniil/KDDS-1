import * as React from 'react';
/** A tile of the Services screen grid: service icon and name on a surface card, 72px tall, fills its grid cell. Always a button. */
export interface ServiceGridItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** Service name, e.g. «Штрафи». Wraps to at most two lines. */
  label?: string;
  /** The service glyph: an ic2_* name (drawn like ServiceIcon type="default", 24px in content-primary) or a node such as <Icon name="Ic2Fine" />. Omitted = empty 24px slot. */
  icon?: string | React.ReactNode;
  /** Pill in the top-right corner, 4px outside the tile: true shows «бета», a string shows that text (e.g. «новий»). */
  badge?: boolean | string;
  /** Opens the service. The tile is always a real button (focusable, Enter/Space, 70% pressed state). */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Only when the visible label is not enough (it is read by default, plus the badge text). */
  "aria-label"?: string;
}
export declare const ServiceGridItem: React.FC<ServiceGridItemProps>;
export default ServiceGridItem;
