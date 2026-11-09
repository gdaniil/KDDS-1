// figma node: 2958:823 Liquid Glass - Regular - Small (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mode=" + __venc(p.mode) + '|' + "state=" + __venc(p.state);

export function LiquidGlassRegularSmall(_p = {}) {
  const props = { ..._p, mode: _p.mode ?? "light", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 1000,
        background: "linear-gradient(rgb(0,145,255),rgb(0,145,255)), linear-gradient(rgb(153,153,153),rgb(153,153,153)), linear-gradient(rgb(255,255,255),rgb(255,255,255)), linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75))",
        boxShadow: "0px 8px 40px 0px rgba(0,0,0,0.12)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 296,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        opacity: 0.67,
        borderRadius: 1000,
        background: "linear-gradient(rgba(255,255,255,0.06),rgba(255,255,255,0.06)), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), linear-gradient(rgba(204,204,204,0.5),rgba(204,204,204,0.5))",
        boxShadow: "0px 8px 40px 0px rgba(0,0,0,0.12)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 296,
        backgroundColor: "rgba(0,0,0,0.2)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 296,
        background: "linear-gradient(rgb(247,247,247),rgb(247,247,247)), linear-gradient(rgb(221,221,221),rgb(221,221,221)), linear-gradient(rgba(255,255,255,0.65),rgba(255,255,255,0.65))",
        boxShadow: "0px 8px 40px 0px rgba(0,0,0,0.12)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 296,
      }} />
    </div>
  );
  const __impls = {
    // figma: Mode=Dark, State=Primary
    "mode=dark|state=primary": __body0,
    // figma: Mode=Dark, State=Default
    "mode=dark|state=default": __body1,
    // figma: Mode=Light, State=Primary
    "mode=light|state=primary": __body0,
    // figma: Mode=Light, State=Default
    "mode=light|state=default": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default LiquidGlassRegularSmall;
