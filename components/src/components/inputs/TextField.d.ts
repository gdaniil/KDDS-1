import * as React from 'react';
/** Text input that fills its container: single-line and 48px tall by default, or a growing textarea with `multiline`. A real <input> / <textarea>: controlled with value + onChange, or uncontrolled with defaultValue. */
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  /** Label above the field; also its accessible name. */
  label?: string;
  /** Controlled value. Omit it (and use defaultValue) to let the field keep its own state. */
  value?: string;
  defaultValue?: string;
  /** Called on every keystroke with the new text. */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** Hint under the field, in content-secondary; hidden in the error state. */
  helperText?: string;
  /** Error text under the field, in content-negative; shown when state="error". */
  message?: string;
  /** Trailing 24px icon, e.g. <Icon name="Ic2Close" />. */
  icon?: React.ReactNode;
  /** The focus look also turns on by itself while the field has focus. */
  state?: "default" | "focus" | "error";
  /** Free text: a <textarea> that starts at `rows` lines and grows with its text (Figma «text-field / multiple lines»). No trailing icon. */
  multiline?: boolean;
  /** multiline only: the starting height in lines (20px each). Default 3. */
  rows?: number;
  disabled?: boolean;
  type?: "text" | "email" | "tel" | "number" | "password" | "url";
  inputMode?: "text" | "numeric" | "decimal" | "tel" | "email" | "url" | "search";
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
