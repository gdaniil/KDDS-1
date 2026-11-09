import { Icon } from '../../assets/icons/Icon.jsx';
import { ensureKdStyles } from './runtime.jsx';
import { useFieldValue } from './runtime.jsx';

// The system's own search field for surface bars (NavbarEnhanced): replaces Apple's light-only
// _Search Field/Light (355:475). Same 36px height as the Figma field; KD tokens, so it reads in both themes.
export function KdSearchField({ value, defaultValue, placeholder = "Пошук", onChange, onSubmit, onClear, autoFocus,
  "aria-label": ariaLabel, className, style }) {
  ensureKdStyles();
  const [v, setV] = useFieldValue(value, defaultValue, onChange);
  const inputRef = React.useRef(null);
  return (
    <div role="search" className={className} style={{
      position: "relative",
      height: 36,
      borderRadius: "var(--radius-control)",
      backgroundColor: "var(--background-bg-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "0px 0px 0px var(--space-2)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      color: "var(--content-content-secondary)",
      ...style,
    }}>
      <Icon name="Ic2Search" size={20} aria-hidden="true" style={{ flexShrink: 0 }} />
      <input ref={inputRef} className="kd-input body" type="search" value={v} placeholder={placeholder} autoFocus={autoFocus}
        enterKeyHint="search" aria-label={ariaLabel ?? placeholder}
        onChange={(e) => setV(e.target.value, e)}
        onKeyDown={(e) => { if (e.key === "Enter" && onSubmit) onSubmit(v); }}
        style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexGrow: 1,
          alignSelf: "stretch",
          border: 0, margin: 0, padding: v ? 0 : "0px var(--space-2) 0px 0px", outline: "none", background: "transparent", minWidth: 0, width: "100%",
          caretColor: "var(--content-content-accent)" }} />
      {v && (
      <button type="button" aria-label="Очистити" className="kd-control" onMouseDown={(e) => e.preventDefault()}
        onClick={() => { setV(""); if (inputRef.current) inputRef.current.focus(); if (onClear) onClear(); }}
        style={{ all: "unset", cursor: "pointer", boxSizing: "border-box", width: 36, height: 36, flexShrink: 0, borderRadius: "var(--radius-control)",
          display: "flex", alignItems: "center", justifyContent: "center", color: "var(--content-content-secondary)" }}>
        <Icon name="Ic2CancelFilled" size={20} aria-hidden="true" />
      </button>
      )}
    </div>
  );
}
export default KdSearchField;
