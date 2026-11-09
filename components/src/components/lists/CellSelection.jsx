import { EditButtonsLight2 } from '../internal/EditButtonsLight2.jsx';

// figma node: 153:640 cell / selection (2 variants)
// Height hugs the content with a 48px minimum (Figma: vertical hug, min-height 48). The wrapper below sets height auto + minHeight 48,
// as it sets the width; the 343×48 in the bodies is only Figma's default size.
// The label keeps one line and ends with «…»; the check / empty circle never shrinks.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "selected=" + __venc(p.selected);

function __FigmaCellSelection(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", selected: _p.selected ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 1,
          top: 1,
          width: 22,
          height: 22,
          borderRadius: "50%",
          backgroundColor: "var(--background-bg-primary-cta)",
        }} />
        <svg width={10.139} height={9.820} viewBox="0 0 10.139 9.820" fill="none" style={{
          position: "absolute",
          left: 6.931,
          top: 7.116,
          width: 10.139,
          height: 9.82,
          color: "var(--content-content-primary-cta)",
        }}>
          <path d={"M 3.965 9.82 C 4.324 9.82 4.602 9.674 4.8 9.381 L 9.94 1.423 C 10.011 1.315 10.061 1.211 10.089 1.112 C 10.122 1.012 10.139 0.916 10.139 0.821 C 10.139 0.581 10.058 0.385 9.898 0.234 C 9.742 0.078 9.542 0 9.296 0 C 9.126 0 8.985 0.035 8.871 0.106 C 8.758 0.172 8.647 0.286 8.539 0.446 L 3.937 7.767 L 1.558 4.708 C 1.369 4.468 1.135 4.347 0.857 4.347 C 0.607 4.347 0.401 4.427 0.241 4.588 C 0.08 4.744 0 4.942 0 5.183 C 0 5.291 0.019 5.397 0.057 5.501 C 0.094 5.6 0.158 5.704 0.248 5.813 L 3.129 9.402 C 3.356 9.681 3.634 9.82 3.965 9.82 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-accent)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--neutral-neutral-white)",
        }}>{props.icon1 ?? <EditButtonsLight2 state={"unselected"} />}</div>
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: type=default, selected=true
    "type=default|selected=true": __body0,
    // figma: type=default, selected=false
    "type=default|selected=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}

export function CellSelection({ label = "Label", selected = false, onClick, className, style }) {
  return (
    <div role="option" aria-selected={selected} onClick={onClick} style={{ cursor: onClick ? "pointer" : undefined }}>
      <__FigmaCellSelection type="default" selected={selected} text1={label} className={className} style={{ width: "100%", height: "auto", minHeight: 48, ...style }} />
    </div>
  );
}
export default CellSelection;
