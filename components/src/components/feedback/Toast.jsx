import { ensureKdStyles } from '../internal/runtime.jsx';
import { LiquidGlassRegularSmall } from '../internal/LiquidGlassRegularSmall.jsx';

// figma node: 2958:866 toast (2 variants)
// Body text wraps, also inside long unbroken tokens; the 20px status glyph never shrinks.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

function __FigmaToast(_p = {}) {
  const props = { ..._p, type: _p.type ?? "success" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      borderRadius: "var(--radius-sm)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-2)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--content-content-positive)",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <LiquidGlassRegularSmall className="kd-glass-light" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} mode={"light"} state={"default"} />
        <LiquidGlassRegularSmall className="kd-glass-dark" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} mode={"dark"} state={"default"} />
      </div>
      <svg width={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: 20,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 20 10 C 20 15.471 15.461 20 10 20 C 4.529 20 0 15.471 0 10 C 0 4.539 4.52 0 9.99 0 C 15.451 0 20 4.539 20 10 Z M 7.775 14.549 C 8.059 14.882 8.314 15.029 8.647 15.029 C 8.99 15.029 9.265 14.873 9.48 14.549 L 14.461 6.696 C 14.588 6.5 14.716 6.265 14.716 6.049 C 14.716 5.578 14.294 5.294 13.863 5.294 C 13.608 5.294 13.353 5.441 13.167 5.745 L 8.608 13.049 L 6.265 10.02 C 6.029 9.716 5.794 9.608 5.51 9.608 C 5.078 9.608 4.716 9.961 4.716 10.422 C 4.716 10.637 4.804 10.873 4.951 11.059 L 7.775 14.549 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <span className="subheadline" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        alignSelf: "stretch",
        whiteSpace: "normal",
        overflowWrap: "anywhere",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      borderRadius: "var(--radius-sm)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-2)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--content-content-negative)",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}>
        <LiquidGlassRegularSmall className="kd-glass-light" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} mode={"light"} state={"default"} />
        <LiquidGlassRegularSmall className="kd-glass-dark" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }} mode={"dark"} state={"default"} />
      </div>
      <svg width={20} viewBox="0 0 20 20" fill="none" style={{
        position: "relative",
        width: 20,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 20 10 C 20 15.471 15.461 20 10 20 C 4.529 20 0 15.471 0 10 C 0 4.539 4.52 0 9.99 0 C 15.451 0 20 4.539 20 10 Z M 5.647 13.52 C 5.647 13.98 6.02 14.353 6.48 14.353 C 6.706 14.353 6.922 14.265 7.069 14.108 L 9.99 11.167 L 12.922 14.108 C 13.069 14.255 13.265 14.353 13.5 14.353 C 13.961 14.353 14.333 13.98 14.333 13.52 C 14.333 13.284 14.235 13.088 14.088 12.931 L 11.157 10.01 L 14.098 7.059 C 14.265 6.902 14.343 6.716 14.343 6.49 C 14.343 6.039 13.971 5.667 13.51 5.667 C 13.294 5.667 13.118 5.745 12.951 5.922 L 9.99 8.863 L 7.049 5.931 C 6.902 5.775 6.706 5.686 6.48 5.686 C 6.02 5.686 5.647 6.049 5.647 6.5 C 5.647 6.725 5.745 6.931 5.902 7.069 L 8.824 10.01 L 5.902 12.951 C 5.745 13.098 5.647 13.294 5.647 13.52 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
      <span className="subheadline" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        alignSelf: "stretch",
        whiteSpace: "normal",
        overflowWrap: "anywhere",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: type=success
    "type=success": __body0,
    // figma: type=error
    "type=error": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

export function Toast({ type = "success", label = "Label", className, style }) {
  ensureKdStyles();
  return <div role="status"><__FigmaToast type={type} text1={label} className={className} style={{ width: "100%", ...style }} /></div>;
}
export default Toast;
