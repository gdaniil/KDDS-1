// figma node: 295:3325 caption (2 variants)
// No fixed height, so a caption too long for one line wraps.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "indent=" + __venc(p.indent);

function __FigmaCaption(_p = {}) {
  const props = { ..._p, indent: _p.indent ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "var(--space-1) 0px var(--space-1) 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexGrow: 1,
        alignSelf: "stretch",
        minWidth: 0,
        overflowWrap: "anywhere",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "var(--space-1) var(--space-4) var(--space-1) var(--space-4)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flexGrow: 1,
        alignSelf: "stretch",
        minWidth: 0,
        overflowWrap: "anywhere",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __impls = {
    // figma: indent=false
    "indent=false": __body0,
    // figma: indent=true
    "indent=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

export function ListCaption({ label = "Label", indent = false, className, style }) {
  return <__FigmaCaption indent={indent} text1={label} className={className} style={{ width: "100%", ...style }} />;
}
export default ListCaption;
