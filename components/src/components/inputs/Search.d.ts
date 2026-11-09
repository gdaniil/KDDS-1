import * as React from 'react';
/** Search bar of the blue Home header (background-bg-accent-home): white field, white «Закрити». Fills its container. A real <input type="search">. */
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  /** Controlled query; omit for an uncontrolled field. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Enter pressed. */
  onSubmit?: (value: string) => void;
  /** The × in the field: clears the query, then calls this. */
  onClear?: () => void;
  /** «Закрити»: clears, drops focus, then calls this. */
  onCancel?: () => void;
  placeholder?: string;
  /** Forces the focused look; by default it follows real focus. */
  focused?: boolean;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const Search: React.FC<SearchProps>;
export default Search;
