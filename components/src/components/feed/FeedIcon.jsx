import { Icon } from '../../assets/icons/Icon.jsx';

// figma node: 4055:167 feed / icon. 40px disc on background-bg-surface, 8px padding around a 24px glyph.
// Figma only shows the placeholder glyph (neutral-gray30); a real glyph is drawn in content-primary, or in a
// status/accent colour via `tint`. No positive (green) tint: green is 2.1:1 on the white disc.
const TINT = {
  default: "var(--content-content-primary)",
  accent: "var(--content-content-accent)",
  negative: "var(--content-content-negative)",
  warning: "var(--content-content-warning)",
};

export function FeedIcon({ icon, tint = "default", className, style }) {
  const glyph = typeof icon === "string" ? <Icon name={icon} size={24} style={{ display: "block" }} /> : icon;
  return (
    <span className={className} aria-hidden="true" style={{
      display: "flex",
      alignItems: "flex-start",
      boxSizing: "border-box",
      width: 40,
      height: 40,
      padding: "var(--space-2)",
      borderRadius: "var(--radius-pill)",
      flexShrink: 0,
      backgroundColor: "var(--background-bg-surface)",
      color: TINT[tint] ?? TINT.default,
      ...style,
    }}>
      <span style={{ display: "block", width: 24, height: 24, flexShrink: 0 }}>{glyph}</span>
    </span>
  );
}
export default FeedIcon;
