import { ensureKdStyles } from '../internal/runtime.jsx';
import { useFieldValue } from '../internal/runtime.jsx';
import { Placeholder } from '../internal/Placeholder.jsx';
import { FieldFrame } from '../internal/FieldFrame.jsx';

// figma node: 155:731 text-field (5 variants)
// The label keeps one line and ends with «…»; the error message is body text and wraps.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

function __FigmaTextField(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", state: _p.state ?? "placeholder", icon: _p.icon ?? true, label: _p.label ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--border-border-regular)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <input className="kd-input subheadline" {...props.input} style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        {props.icon && (
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Placeholder />}</div>
        )}
      </div>
      {props.helperText && (<span className="footnote" style={{ position: "relative", color: "var(--content-content-secondary)", alignSelf: "stretch" }}>{props.helperText}</span>)}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--border-border-regular)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <input className="kd-input subheadline" {...props.input} style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        {props.icon && (
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Placeholder />}</div>
        )}
      </div>
      {props.helperText && (<span className="footnote" style={{ position: "relative", color: "var(--content-content-secondary)", alignSelf: "stretch" }}>{props.helperText}</span>)}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--border-border-negative)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <input className="kd-input subheadline" {...props.input} style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        {props.icon && (
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Placeholder />}</div>
        )}
      </div>
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-negative)",
        flexShrink: 0,
        alignSelf: "stretch",
        overflowWrap: "anywhere",
      }}>{props.text3 ?? "Message"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-background)",
        boxShadow: "inset 0 0 0 1px var(--border-border-regular)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <input className="kd-input subheadline" {...props.input} style={{
          position: "relative",
          color: "var(--content-content-disabled)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        {props.icon && (
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Placeholder />}</div>
        )}
      </div>
      {props.helperText && (<span className="footnote" style={{ position: "relative", color: "var(--content-content-secondary)", alignSelf: "stretch" }}>{props.helperText}</span>)}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      )}
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: "var(--radius-control)",
        backgroundColor: "var(--background-bg-surface)",
        boxShadow: "inset 0 0 0 1px var(--border-border-accent)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <input className="kd-input subheadline" {...props.input} style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        {props.icon && (
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Placeholder />}</div>
        )}
      </div>
      {props.helperText && (<span className="footnote" style={{ position: "relative", color: "var(--content-content-secondary)", alignSelf: "stretch" }}>{props.helperText}</span>)}
    </div>
  );
  const __impls = {
    // figma: type=default, state=placeholder
    "type=default|state=placeholder": __body0,
    // figma: type=default, state=entered
    "type=default|state=entered": __body1,
    // figma: type=default, state=error
    "type=default|state=error": __body2,
    // figma: type=default, state=disabled
    "type=default|state=disabled": __body3,
    // figma: type=default, state=focus
    "type=default|state=focus": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

// multiline: Figma 4078:10080 text-field / multiple lines. TextField's frame (label, outline, states, hint or error)
// around a <textarea> in Subheadline/Regular (subheadline, 15/20) that grows with its text from `rows` lines (default 3)
// and has no fixed height, as drawn. No trailing icon. Free text such as a problem description in a 1551 request.
function MultilineField({ label, value, setValue, focused, setFocused, rows, placeholder, helperText, message, state, disabled, name, id, maxLength, autoFocus, ariaLabel, onFocus, onBlur, className, style }) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [value]);
  const autoId = React.useId();
  const fieldId = id || "kd-textarea-" + autoId.replace(/:/g, "");
  return (
    <FieldFrame label={label} htmlFor={fieldId} state={state} focused={focused} disabled={disabled} message={message} helperText={helperText} className={className} style={style} boxStyle={{ alignItems: "flex-start" }}>
      <textarea ref={ref} id={fieldId} className="kd-input subheadline" rows={rows} value={value} placeholder={placeholder} disabled={disabled}
        name={name} maxLength={maxLength} autoFocus={autoFocus} aria-label={label ? undefined : ariaLabel} aria-invalid={state === "error" || undefined}
        onChange={(e) => setValue(e.target.value, e)}
        onFocus={(e) => { setFocused(true); if (onFocus) onFocus(e); }}
        onBlur={(e) => { setFocused(false); if (onBlur) onBlur(e); }}
        style={{ display: "block", flex: "1 1 0", minWidth: 0, width: "100%", minHeight: rows * 20, resize: "none", overflow: "hidden", border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", color: disabled ? "var(--content-content-disabled)" : "var(--content-content-primary)", caretColor: "var(--content-content-accent)" }} />
    </FieldFrame>
  );
}

export function TextField({ label, value, defaultValue, placeholder = "", helperText, message, icon, state = "default", disabled = false,
  onChange, onFocus, onBlur, type = "text", name, id, inputMode, autoComplete, maxLength, autoFocus, multiline = false, rows = 3, "aria-label": ariaLabel, className, style }) {
  ensureKdStyles();
  const [v, setV] = useFieldValue(value, defaultValue, onChange);
  const [focused, setFocused] = React.useState(false);
  if (multiline) {
    return (
      <MultilineField label={label} value={v} setValue={setV} focused={focused} setFocused={setFocused} rows={rows} placeholder={placeholder}
        helperText={helperText} message={message} state={state} disabled={disabled} name={name} id={id} maxLength={maxLength} autoFocus={autoFocus}
        ariaLabel={ariaLabel} onFocus={onFocus} onBlur={onBlur} className={className} style={style} />
    );
  }
  const figma = disabled ? "disabled" : state === "error" ? "error" : (state === "focus" || focused) ? "focus" : v ? "entered" : "placeholder";
  const input = { value: v, placeholder, disabled, type, name, id, inputMode, autoComplete, maxLength, autoFocus,
    "aria-label": ariaLabel ?? label, "aria-invalid": state === "error" || undefined,
    onChange: (e) => setV(e.target.value, e),
    onFocus: (e) => { setFocused(true); if (onFocus) onFocus(e); },
    onBlur: (e) => { setFocused(false); if (onBlur) onBlur(e); } };
  return (
    <__FigmaTextField type="default" state={figma} label={!!label} text1={label} input={input}
      text3={figma === "error" ? (message ?? helperText ?? "") : undefined} helperText={figma === "error" ? undefined : helperText}
      icon={!!icon} icon2={icon} className={className} style={{ width: "100%", ...style }} />
  );
}

export default TextField;
