import { ensureKdStyles } from '../internal/runtime.jsx';
import { useFieldValue } from '../internal/runtime.jsx';
// The plate's own mono type, outside the KD scale (Figma license-plate 2958:997): region «UA» = SF Mono Bold 10, line-height
// normal (2958:972); the number = SF Mono Medium 34/44 (2958:974). No KD text style applies.
const KD_TYPE_PLATE_REGION = { fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, lineHeight: "100%" };
const KD_TYPE_PLATE = { fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 34, lineHeight: "44px" };
const KD_PLATE_TEMPLATE = "XX0000XX";
// Typed characters in ink, the rest of the template in content-disabled; a transparent input on top takes the typing.
function __kdPlate(props, st) {
  const v = (props.input && props.input.value) || "";
  return (
    <span style={{ ...st, position: "relative" }}>
      <span style={{ color: "var(--content-content-primary)" }}>{v}</span>{KD_PLATE_TEMPLATE.slice(v.length)}
      <input className="kd-input" {...props.input} style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", border: 0, margin: 0,
        padding: 0, outline: "none", background: "transparent", color: "transparent", caretColor: "var(--content-content-accent)",
        font: "inherit", letterSpacing: "inherit", textTransform: "uppercase", textAlign: "left" }} />
    </span>
  );
}

// figma node: 2958:997 license-plate (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

function __FigmaLicensePlate(_p = {}) {
  const props = { ..._p, state: _p.state ?? "filled" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--dark-dark-shade100)",
      boxShadow: "0 0 0 1px var(--border-border-regular)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(33,112,207)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 4px 4px 4px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(33,167,233)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(254,238,36)",
            flexShrink: 0,
          }} />
        </div>
        <span style={{
          position: "relative",
          ...KD_TYPE_PLATE_REGION,
          whiteSpace: "nowrap",
          color: "var(--neutral-neutral-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "UA"}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--background-bg-surface)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {__kdPlate(props, {
          position: "relative",
          ...KD_TYPE_PLATE,
          textAlign: "left",
          whiteSpace: "pre",
          color: "var(--content-content-disabled)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch" })}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--dark-dark-shade100)",
      boxShadow: "0 0 0 1px var(--border-border-regular)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(33,112,207)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 4px 4px 4px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(33,167,233)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(254,238,36)",
            flexShrink: 0,
          }} />
        </div>
        <span style={{
          position: "relative",
          ...KD_TYPE_PLATE_REGION,
          whiteSpace: "nowrap",
          color: "var(--neutral-neutral-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "UA"}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--background-bg-surface)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {__kdPlate(props, {
          position: "relative",
          ...KD_TYPE_PLATE,
          textAlign: "left",
          whiteSpace: "pre",
          color: "var(--content-content-disabled)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch" })}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--dark-dark-shade100)",
      boxShadow: "0 0 0 1px var(--border-border-regular)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "rgb(33,112,207)",
        display: "flex",
        flexDirection: "column",
        padding: "4px 4px 4px 4px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(33,167,233)",
            flexShrink: 0,
          }} />
          <div style={{
            position: "relative",
            width: 14,
            height: 4,
            backgroundColor: "rgb(254,238,36)",
            flexShrink: 0,
          }} />
        </div>
        <span style={{
          position: "relative",
          ...KD_TYPE_PLATE_REGION,
          whiteSpace: "nowrap",
          color: "var(--neutral-neutral-white)",
          flexShrink: 0,
        }}>{props.text1 ?? "UA"}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--background-bg-surface)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {__kdPlate(props, {
          position: "relative",
          ...KD_TYPE_PLATE,
          textAlign: "left",
          whiteSpace: "pre",
          color: "var(--content-content-disabled)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch" })}
      </div>
    </div>
  );
  const __impls = {
    // figma: state=focus
    "state=focus": __body0,
    // figma: state=empty
    "state=empty": __body1,
    // figma: state=filled
    "state=filled": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}

// Plate characters only (Latin + the Cyrillic letters plates use), upper case, at most 8: the plate is a fixed 8-slot design.
const plateChars = (s) => String(s ?? "").toUpperCase().replace(/[^A-Z0-9АВЕІКМНОРСТХ]/g, "").slice(0, 8);
export function LicensePlate({ region = "UA", value, defaultValue, focused: focusedProp, onChange, onFocus, onBlur, autoFocus,
  "aria-label": ariaLabel = "Номерний знак", className, style }) {
  ensureKdStyles();
  const [raw, setV] = useFieldValue(value, defaultValue, onChange);
  const v = plateChars(raw);
  const [hasFocus, setHasFocus] = React.useState(false);
  const focused = focusedProp ?? hasFocus;
  const state = focused ? "focus" : v ? "filled" : "empty";
  const input = { value: v, maxLength: 8, autoFocus, autoCapitalize: "characters", autoComplete: "off", spellCheck: false, "aria-label": ariaLabel,
    onChange: (e) => setV(plateChars(e.target.value), e),
    onFocus: (e) => { setHasFocus(true); if (onFocus) onFocus(e); },
    onBlur: (e) => { setHasFocus(false); if (onBlur) onBlur(e); } };
  return <__FigmaLicensePlate state={state} text1={region} input={input} className={className} style={style} />;
}

export default LicensePlate;
