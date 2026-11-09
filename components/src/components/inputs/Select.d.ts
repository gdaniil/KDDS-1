import * as React from 'react';
export interface SelectOption { value: string; label: string; disabled?: boolean }
/** A field that opens the platform's own menu: TextField's frame with the chosen value and an Ic2Selector glyph. A real <select> under the hood. */
export interface SelectProps {
  className?: string;
  style?: React.CSSProperties;
  /** Label above the field; also its accessible name. */
  label?: string;
  /** Options as { value, label } or plain strings (value = label). Up to about 10; more, or a search: a Modal of CellSelection rows or a pushed screen. */
  options: Array<SelectOption | string>;
  /** Controlled value. Omit it (and use defaultValue) to let the field keep its own choice. */
  value?: string;
  defaultValue?: string;
  /** Called with the chosen value first, the event second. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Shown in content-secondary while nothing is chosen. Default «Оберіть». */
  placeholder?: string;
  /** Hint under the field; hidden in the error state. */
  helperText?: string;
  /** Error text under the field, shown when state="error". */
  message?: string;
  /** The focus look also turns on by itself while the field has focus. */
  state?: "default" | "focus" | "error";
  disabled?: boolean;
  name?: string;
  id?: string;
  /** Needed only without a visible label. */
  'aria-label'?: string;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
