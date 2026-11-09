import * as React from 'react';
/** Row of a grouped list: settings, menus, navigation. fills its container. Height is auto with a 48px minimum: 48 for one line, 62 with a caption, 55 with a switch, 52 segmented. */
export interface CellProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  /** Second line under the label (not available with accessory="segmented"). */
  caption?: string;
  /** Leading 24px icon, e.g. <Icon name="Ic2Car" />. */
  icon?: React.ReactNode;
  /** Trailing element: chevron for navigation rows, switch for settings, segmented for a two-way choice. */
  accessory?: "none" | "chevron" | "switch" | "segmented";
  /** Switch state when accessory="switch". */
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  /** Makes the row a button (accessory "none" or "chevron"): focusable, Enter/Space activate. With "switch", a tap on the row toggles the switch, then calls onClick. Not used with "segmented". */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Segment labels when accessory="segmented". Default ["Укр", "En"]. */
  segmentOptions?: string[];
  /** Selected segment: an index, or one of the labels. Default 0. */
  segmentValue?: number | string;
  /** Called with the index (when segmentValue is a number) or the label. */
  onSegmentChange?: (value: number | string) => void;
}
export declare const Cell: React.FC<CellProps>;
export default Cell;
