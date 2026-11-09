import { Icon } from '../../assets/icons/Icon.jsx';

// figma node: 1705:613 weather / icon (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "onBlue=" + __venc(p.onBlue);

export function WeatherIcon(_p = {}) {
  const props = { ..._p, onBlue: _p.onBlue ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: "var(--radius-pill)",
      backgroundColor: "rgba(255,255,255,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
      alignItems: "flex-start",
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
        }}>{props.icon1 ?? <Icon name="Ic2Sun" size={24} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
      alignItems: "flex-start",
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
        }}>{props.icon1 ?? <Icon name="Ic2Sun" size={24} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: onBlue=true
    "onBlue=true": __body0,
    // figma: onBlue=false
    "onBlue=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default WeatherIcon;
