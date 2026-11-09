import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface PaymentMethodProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "apple" | "google" | "master" | "more" | "card";
  dark?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PaymentMethod: React.FC<PaymentMethodProps>;
export default PaymentMethod;
