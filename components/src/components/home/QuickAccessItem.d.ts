import * as React from 'react';
/** A 108×112 quick-access tile on the Home screen: a service shortcut, the «Усі сервіси» tile, or a live QR-ticket / parking status. Always a real button. */
export interface QuickAccessItemProps {
  className?: string;
  style?: React.CSSProperties;
  /** The look. regular: a service on the light tile (background-bg-quick-access); all: the navy «Усі сервіси» tile with Ic2Kd; qr-active: pink tile, red ink, Ic2Qr; parking-active: yellow tile, orange ink, Ic2Park in a 4px ring. Default "regular". */
  type?: "regular" | "all" | "qr-active" | "parking-active";
  /** Alias of `type`; wins when both are given. */
  variant?: "regular" | "all" | "qr-active" | "parking-active";
  /** First line(s): the service name, «QR-квитки», or the parked car's plate («КА 1234 ІР»). Wraps to two lines at 84px, or one when `status` is set; "\n" forces a break. Defaults: «Усі\nсервіси» for all, «QR-квитки» for qr-active, «Паркування» for parking-active. */
  label?: string;
  /** Second line for the active looks: the ticket count («(5 шт.)») or the parking session timer («00:32»). One line, tabular digits. */
  status?: React.ReactNode;
  /** An ic2_* icon name or an `<Icon/>` node, 24px, drawn in the tile's ink. Required for regular (no icon = an empty 24×24 slot); all, qr-active and parking-active default to Ic2Kd, Ic2Qr and Ic2Park. */
  icon?: string | React.ReactNode;
  /** Opens the service, the services list, the tickets or the parking session. The tile is always a button, with or without a handler. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Accessible name when the visible text is not enough (for example «Паркування КА 1234 ІР, 00:32»). */
  "aria-label"?: string;
}
export declare const QuickAccessItem: React.FC<QuickAccessItemProps>;
export default QuickAccessItem;
