import { WeatherIcon } from './WeatherIcon.jsx';

// figma node: 1705:618 weather / item (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "onBlue=" + __venc(p.onBlue);

export function WeatherItem(_p = {}) {
  const props = { ..._p, onBlue: _p.onBlue ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-2)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <WeatherIcon onBlue={true} />}</div>
      <span className="subheadline-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary-invert)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-2)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <WeatherIcon onBlue={false} />}</div>
      <span className="subheadline-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 0,
      }}>{props.text1 ?? "Label"}</span>
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
export default WeatherItem;
