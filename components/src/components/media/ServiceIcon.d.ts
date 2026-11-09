import * as React from 'react';
/** A service's icon in the three treatments the app uses. */
export interface ServiceIconProps {
  className?: string;
  style?: React.CSSProperties;
  /** Any ic2_* icon name. */
  icon?: string;
  /** default: 24px in ink; faq: 20px on a 32px disc; link: 24px in content-link. */
  type?: "default" | "faq" | "link";
}
export declare const ServiceIcon: React.FC<ServiceIconProps>;
export default ServiceIcon;
