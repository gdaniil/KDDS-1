import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface KdSearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  /** Controlled text. */
  value?: string;
  /** Starting text when uncontrolled. */
  defaultValue?: string;
  /** Defaults to «Пошук». */
  placeholder?: string;
  /** New value first, the input event second (no event when cleared). */
  onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  /** Enter / the keyboard's search key. */
  onSubmit?: (value: string) => void;
  /** The clear button, after the text is emptied. */
  onClear?: () => void;
  autoFocus?: boolean;
  /** Defaults to the placeholder. */
  "aria-label"?: string;
}
export declare const KdSearchField: React.FC<KdSearchFieldProps>;
export default KdSearchField;
