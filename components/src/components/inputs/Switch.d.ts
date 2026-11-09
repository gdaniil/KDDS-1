import * as React from 'react';
/** On/off switch, 51×31. On is the brand blue; off is the iOS track. */
export interface SwitchProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Required: what the switch turns on. */
  'aria-label'?: string;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
