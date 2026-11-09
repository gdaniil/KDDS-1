import * as React from 'react';
/** Internal part of the design system: not exported. Use the public components instead. */
export interface SearchFieldLightProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "placeholder" | "focused" | "typing";
  showText?: boolean;
  searchText?: string;
  /** Text content; defaults to "􀊫". */
  text1?: string;
  /** Text content; defaults to "􀁡". */
  text2?: string;
  /** Text content; defaults to "Cancel". */
  text3?: string;
}
export declare const SearchFieldLight: React.FC<SearchFieldLightProps>;
export default SearchFieldLight;
