import { ensureKdStyles } from '../internal/runtime.jsx';
// KD switch: on = background-bg-accent, as drawn in the Figma cell/regular "with toggle".
export function Switch({ checked = false, disabled = false, onChange, className, style, "aria-label": ariaLabel }) {
  ensureKdStyles();
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={ariaLabel} disabled={disabled}
      onClick={() => onChange && onChange(!checked)} className={["kd-control", className].filter(Boolean).join(" ")}
      style={{ all: "unset", position: "relative", display: "inline-block", flexShrink: 0, width: 51, height: 31, borderRadius: "var(--radius-pill)",
        backgroundColor: checked ? "var(--background-bg-accent)" : "var(--ios-switch-track-off)", cursor: disabled ? "default" : "pointer", ...style }}>
      <span style={{ position: "absolute", top: 2, left: checked ? 22 : 2, width: 27, height: 27, borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--content-content-primary-cta)",
        boxShadow: "0px 0px 1px rgba(0,0,0,0.04), 0px 3px 8px rgba(0,0,0,0.15), 0px 3px 1px rgba(0,0,0,0.06)" }} />
    </button>
  );
}
export default Switch;
