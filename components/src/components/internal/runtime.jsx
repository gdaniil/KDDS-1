// Shared runtime for the public components: one stylesheet for what inline styles cannot express
// (placeholder colour, focus ring, spinner, theme-switched Liquid Glass), plus small state hooks.
const KD_CSS = [
  ".kd-input::placeholder{color:var(--content-content-secondary);opacity:1}",
  ".kd-input:disabled::placeholder{color:var(--content-content-disabled)}",
  ".kd-search::placeholder{color:var(--neutral-neutral-gray70)}",
  ".kd-input::-webkit-search-cancel-button,.kd-input::-webkit-search-decoration{-webkit-appearance:none;appearance:none}",
  ".kd-control:focus-visible{outline:2px solid var(--border-border-accent) !important;outline-offset:2px !important}",
  ".kd-control.kd-control-inset:focus-visible{outline-offset:-2px !important}",
  ".kd-glass-dark{display:none}",
  "[data-theme=\"dark\"] .kd-glass-light{display:none}",
  "[data-theme=\"dark\"] .kd-glass-dark{display:block}",
  "@keyframes kd-spin{to{transform:rotate(360deg)}}",
].join("\n");

export function ensureKdStyles() {
  if (typeof document === "undefined" || document.getElementById("kd-runtime-styles")) return;
  const el = document.createElement("style");
  el.id = "kd-runtime-styles";
  el.textContent = KD_CSS;
  document.head.appendChild(el);
}

// Controlled when `value` is given, uncontrolled (starting at defaultValue) otherwise.
export function useFieldValue(value, defaultValue, onChange) {
  const [inner, setInner] = React.useState(defaultValue ?? "");
  const controlled = value !== undefined;
  const set = (next, event) => {
    if (!controlled) setInner(next);
    if (onChange) onChange(next, event);
  };
  return [controlled ? value : inner, set];
}

// Pressed feedback for buttons: 70% opacity while the pointer is down.
export function usePressed(enabled) {
  const [pressed, setPressed] = React.useState(false);
  const up = () => setPressed(false);
  return [
    enabled && pressed ? { opacity: 0.7 } : null,
    { onPointerDown: () => enabled && setPressed(true), onPointerUp: up, onPointerLeave: up, onPointerCancel: up },
  ];
}
