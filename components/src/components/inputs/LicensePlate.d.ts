import * as React from 'react';
/** Ukrainian licence-plate input: typed characters in ink, the rest of the XX0000XX template greyed. */
export interface LicensePlateProps {
  className?: string;
  style?: React.CSSProperties;
  /** Country code on the blue strip. */
  region?: string;
  /** Plate number, up to 8 characters, uppercased, letters and digits only. Controlled when given. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Forces the focused look; by default it follows real focus. */
  focused?: boolean;
  autoFocus?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  'aria-label'?: string;
}
export declare const LicensePlate: React.FC<LicensePlateProps>;
export default LicensePlate;
