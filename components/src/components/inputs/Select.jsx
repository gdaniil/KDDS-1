import { Icon } from '../../assets/icons/Icon.jsx';
import { useFieldValue } from '../internal/runtime.jsx';
import { FieldFrame } from '../internal/FieldFrame.jsx';

// Figma 4078:10057 select: TextField's frame (label, 48px box, outline, hint or error) with the chosen value in
// Subheadline/Regular (subheadline, 15/20) and a 24px Ic2Selector at the end. It opens the platform menu, not a drawn
// one (patterns «Native first», Figma pairs it with the iOS 26 «Menu - iPhone»): here a real <select> lies over the box,
// invisible, so a tap or the keyboard opens the browser's own picker. Nothing chosen = the placeholder in content-secondary.
// More than about 10 options or a search: a Modal of CellSelection rows or a pushed screen instead (patterns «Pick from a list»).
export function Select({ label, options = [], value, defaultValue, onChange, placeholder = "Оберіть", helperText, message, state = "default", disabled = false, name, id, className, style, "aria-label": ariaLabel }) {
  const autoId = React.useId();
  const selectId = id || "kd-select-" + autoId.replace(/:/g, "");
  const [v, setV] = useFieldValue(value, defaultValue, onChange);
  const [focused, setFocused] = React.useState(false);
  const items = options.map((o) => (typeof o === "object" && o !== null ? o : { value: String(o), label: String(o) }));
  const chosen = items.find((o) => String(o.value) === String(v));
  return (
    <FieldFrame label={label} htmlFor={selectId} state={state} focused={focused} disabled={disabled} message={message} helperText={helperText} className={className} style={style} boxStyle={{ height: 48 }}>
      <span className="subheadline" style={{ flex: "1 1 0", minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: disabled ? "var(--content-content-disabled)" : chosen ? "var(--content-content-primary)" : "var(--content-content-secondary)" }}>
        {chosen ? chosen.label : placeholder}
      </span>
      <span aria-hidden="true" style={{ display: "inline-flex", width: 24, height: 24, flexShrink: 0 }}><Icon name="Ic2Selector" size={24} /></span>
      <select id={selectId} name={name} value={chosen ? chosen.value : ""} disabled={disabled}
        aria-label={label ? undefined : ariaLabel} aria-invalid={state === "error" || undefined}
        onChange={(e) => setV(e.target.value, e)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, fontSize: 16, cursor: disabled ? "default" : "pointer", appearance: "none" }}>
        <option value="" disabled>{placeholder}</option>
        {items.map((o) => <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>)}
      </select>
    </FieldFrame>
  );
}
