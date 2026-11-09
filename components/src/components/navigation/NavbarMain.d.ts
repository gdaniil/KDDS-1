import * as React from 'react';
/** Top bar of the three root tabs (Home, Services, Profile), with the status bar. */
export interface NavbarMainProps {
  className?: string;
  style?: React.CSSProperties;
  /** The tab the bar belongs to. home shows the date, greeting and weather. */
  type?: "home" | "services" | "profile";
  /** Collapsed bar (default). false is the expanded header: on home, white on background-bg-accent-home (put the blue behind it); on services and profile, the large title or the profile card. */
  scrolled?: boolean;
  /** Home only. Power-outage status mark (Ukrenergo schedule). Default true. */
  showPowerStatus?: boolean;
  /** Home only. false hides the temperature and the air-quality index. Default true. */
  showWeather?: boolean;
  /** Home only, expanded. The date, months lowercase, e.g. "23 жовтня" (default). */
  date?: string;
  /** Home only, expanded. e.g. "Доброго дня!" (default). */
  greeting?: string;
  /** Home only. Current temperature, e.g. "23°" (default). */
  temperature?: string;
  /** Home only. Weather glyph: an icon name such as "Ic2Sun" (default), "Ic2Cloud", "Ic2Rain", "Ic2Snow", "Ic2Fog", "Ic2Night", or a node. */
  weatherIcon?: string | React.ReactNode;
  /** Home only. Air-quality index, e.g. 47 (default). null or "" hides it. */
  aqi?: string | number | null;
  /** Avatar on home and on the expanded profile: an image URL or a node, shown in the circle. Default is the empty-profile icon Ic2ProfileEmpty; "sample" shows the Figma sample photo. */
  avatar?: string | React.ReactNode;
  /** Services and collapsed profile: the bar title. Defaults: "Сервіси" (collapsed services), "Міські сервіси" (expanded services), userName (profile). */
  title?: string;
  /** Profile only. The user's name, e.g. "Веніамін М." (default). */
  userName?: string;
  /** Profile only, expanded. The phone under the name, e.g. "+380 12 345 67 89" (default). */
  phone?: string;
  /** Services only. The selected view in the grid/list toggle. Default "grid". */
  view?: "grid" | "list";
  /** Services only. Makes the grid/list toggle real buttons; receives "grid" or "list". */
  onViewChange?: (view: "grid" | "list") => void;
  /** Expanded home. Makes the «Пошук» pill a button. */
  onSearch?: () => void;
  /** Home and expanded profile. Makes the avatar a button. */
  onAvatarClick?: () => void;
  /** Home. Makes the power-status mark a button. */
  onPowerStatusClick?: () => void;
  /** Home. Makes the temperature a button. */
  onWeatherClick?: () => void;
  /** Home. Makes the air-quality index a button. */
  onAqiClick?: () => void;
  /** Services and profile. Makes the «Головна» pill or chevron (back to the Home tab) a button. */
  onHomeClick?: () => void;
  /** Profile. Makes the edit pencil or «Змінити» pill a button. */
  onEdit?: () => void;
}
export declare const NavbarMain: React.FC<NavbarMainProps>;
export default NavbarMain;
