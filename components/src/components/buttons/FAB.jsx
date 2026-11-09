import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';
import { LiquidGlassRegularSmall } from '../internal/LiquidGlassRegularSmall.jsx';
import { Placeholder } from '../internal/Placeholder.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

// figma node: 2959:1070 FAB (2 variants)
// Hugs its content up to the container width; past that the label ends with «…» and the icon keeps its 24px slot.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

function __FigmaFAB(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: "var(--radius-pill)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "6px 20px 6px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      maxWidth: "100%",
      minWidth: 0,
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
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-pill)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        height: 36,
        minWidth: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Placeholder />}</div>
        <span className="subheadline-emphasized" style={{
          position: "relative",
          textAlign: "center",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary)",
          minWidth: 0,
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text1 ?? "Label"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      borderRadius: "var(--radius-pill)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <><LiquidGlassRegularSmall className="kd-glass-light" style={{ position: "absolute", left: 0, top: 0 }} mode={"light"} state={"default"} /><LiquidGlassRegularSmall className="kd-glass-dark" style={{ position: "absolute", left: 0, top: 0 }} mode={"dark"} state={"default"} /></>}</div>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: "var(--radius-pill)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Placeholder />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=icon+label
    "type=icon+label": __body0,
    // figma: type=icon
    "type=icon": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}

// Figma 2959:1069 / 2959:1068: both 48px tall (6px padding + a 36px row); 24×24 icon slot. An <Icon /> is drawn at 24 and centred.
function FabGlyph({ node }) {
  if (!node) return node;
  const glyph = React.isValidElement(node) && node.type === Icon
    ? React.cloneElement(node, { size: 24, style: { display: "block", flexShrink: 0, ...node.props.style } })
    : node;
  return <span aria-hidden="true" style={{ display: "flex", width: 24, height: 24, alignItems: "center", justifyContent: "center" }}>{glyph}</span>;
}

export function FAB({ icon, label, onClick, className, style, "aria-label": ariaLabel }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(true);
  const glyph = <FabGlyph node={icon} />;
  const inner = label
    ? <__FigmaFAB type="icon+label" text1={label} icon1={glyph} />
    : <__FigmaFAB type="icon" icon2={glyph} />;
  return (
    <button type="button" onClick={onClick} aria-label={label ? ariaLabel : (ariaLabel ?? "Action")} className={["kd-control", className].filter(Boolean).join(" ")} {...pressHandlers}
      style={{ all: "unset", display: "inline-flex", maxWidth: "100%", borderRadius: "var(--radius-pill)", cursor: "pointer", ...pressedStyle, ...style }}>{inner}</button>
  );
}
export default FAB;
