import { ServiceIcon } from '../media/ServiceIcon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// Figma node 4055:216 service-item/grid: 72px tall, 16px side / 24px vertical padding, 12px gap, radius 12,
// background-bg-surface + elevation/regular (shadow-elevation). Label = Footnote/Emphasized 13/18 590.
// Hidden "beta" pill in Figma (shown via `badge`): bg-accent, 1px bg-accent border, pill, 4/2 padding, 11/13 590 in
// content-primary-invert, 4px outside the top-right corner. Figma's min/max width (160 / 167.5) = a 2-column grid
// in 343px with an 8px gap; the tile itself fills its grid cell.
// Always a real button: a service tile always opens its service.
export function ServiceGridItem({ label = "Label", icon, badge, onClick, className, style, "aria-label": ariaLabel }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(true);
  const badgeText = badge === true ? "бета" : badge || null;
  // Decorative: the label names the service, so the glyph is hidden from assistive tech.
  const glyph = (
    <span aria-hidden="true" style={{ display: "inline-flex", width: 24, height: 24, flexShrink: 0, color: "var(--content-content-primary)" }}>
      {typeof icon === "string" ? <ServiceIcon icon={icon} /> : icon}
    </span>
  );
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={["kd-control", className].filter(Boolean).join(" ")}
      {...pressHandlers} style={{
        all: "unset", boxSizing: "border-box", position: "relative", display: "flex", alignItems: "center", gap: "var(--space-3)",
        width: "100%", minWidth: 0, height: 72, padding: "var(--space-5) var(--space-4)", borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-surface)", boxShadow: "var(--shadow-elevation)", cursor: "pointer",
        WebkitTapHighlightColor: "transparent", ...pressedStyle, ...style,
      }}>
      {glyph}
      <span className="footnote-emphasized" style={{
        flex: "1 0 0", minWidth: 0,
        color: "var(--content-content-primary)", overflowWrap: "break-word", textAlign: "left",
        display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden",
      }}>{label}</span>
      {badgeText && (
        <span className="caption2-emphasized" style={{
          position: "absolute", top: -4, right: -4, boxSizing: "border-box", minWidth: 33, height: 17, padding: "2px var(--space-1)",
          display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-pill)",
          border: "1px solid var(--background-bg-accent)", backgroundColor: "var(--background-bg-accent)",

          color: "var(--content-content-primary-invert)", whiteSpace: "nowrap",
        }}>{badgeText}</span>
      )}
    </button>
  );
}
export default ServiceGridItem;
