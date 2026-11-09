import { Icon } from '../../assets/icons/Icon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// Figma 4078:10093 chip (active true / false): the small pill button, 32px tall, 8px / 12px padding, radius-pill,
// Footnote/Emphasized label (footnote-emphasized, 13/18 590). Off = background-bg-secondary-cta + content-primary;
// on = background-bg-primary-cta + content-primary-cta. A real toggle button: aria-pressed carries the state, the
// kd-hit class grows the tap area to 44px without moving the pill, focus ring and 70% pressed like Button.
// Disabled is not drawn in Figma; it uses the system disabled pair (background-bg-disabled, content-disabled).
export function Chip({ label, selected = false, onClick, icon, disabled = false, className, style, "aria-label": ariaLabel, ...rest }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(!disabled);
  const glyph = typeof icon === "string" ? <Icon name={icon} size={16} /> : icon;
  const bg = disabled ? "var(--background-bg-disabled)" : selected ? "var(--background-bg-primary-cta)" : "var(--background-bg-secondary-cta)";
  const ink = disabled ? "var(--content-content-disabled)" : selected ? "var(--content-content-primary-cta)" : "var(--content-content-primary)";
  return (
    <button type="button" {...rest} {...pressHandlers} aria-pressed={selected} aria-label={ariaLabel} disabled={disabled} onClick={onClick}
      className={["kd-control kd-hit footnote-emphasized", className].filter(Boolean).join(" ")}
      style={{
        all: "unset", position: "relative", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: "var(--space-1)", flexShrink: 0, alignSelf: "flex-start", maxWidth: "100%", height: 32, padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-pill)",
        backgroundColor: bg, color: ink, whiteSpace: "nowrap", cursor: disabled ? "default" : "pointer", WebkitTapHighlightColor: "transparent",
        ...pressedStyle, ...style,
      }}>
      {glyph ? <span aria-hidden="true" style={{ display: "inline-flex", width: 16, height: 16, flexShrink: 0 }}>{glyph}</span> : null}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
    </button>
  );
}
