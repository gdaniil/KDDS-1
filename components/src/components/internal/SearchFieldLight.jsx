// Apple-kit chrome, not Kyiv Digital type: Apple's "_Search Field/Light" (Figma 355:475, no longer in the file; not used
// by any public component). SF Symbol glyphs at 17/22 with no tracking; the field text and «Cancel» at 17/22, -0.4.
const KD_TYPE_IOS_GLYPH = { fontFamily: "var(--font-sf)", fontWeight: 400, fontSize: 17, lineHeight: "22px" };
const KD_TYPE_IOS_FIELD = { fontFamily: "var(--font-sf)", fontWeight: 400, fontSize: 17, lineHeight: "22px", letterSpacing: "-0.400px" };
// figma node: 355:475 _Search Field/Light (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SearchFieldLight(_p = {}) {
  const props = { ..._p, state: _p.state ?? "placeholder", showText: _p.showText ?? true, searchText: _p.searchText ?? "Search" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 361,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "var(--ios-fill-tertiary)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_GLYPH,
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀊫"}</span>
        {props.showText && (
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_FIELD,
          whiteSpace: "nowrap",
          color: "rgb(0,0,0)",
          flexShrink: 0,
        }}>{props.searchText}</span>
        )}
        <div style={{
          position: "relative",
          width: 2,
          height: 23,
          borderRadius: 2,
          backgroundColor: "rgb(0,122,255)",
          flexShrink: 0,
        }} />
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_GLYPH,
          textAlign: "right",
          color: "rgba(60,60,67,0.6)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "􀁡"}</span>
      </div>
      {props.showText && (
      <span style={{
        position: "relative",
        ...KD_TYPE_IOS_FIELD,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "rgb(0,122,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "Cancel"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 361,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "var(--ios-fill-tertiary)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 6px 0px 8px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_GLYPH,
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "􀊫"}</span>
        <div style={{
          position: "relative",
          width: 2,
          height: 23,
          borderRadius: 2,
          backgroundColor: "rgb(0,122,255)",
          flexShrink: 0,
        }} />
        {props.showText && (
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_FIELD,
          whiteSpace: "nowrap",
          color: "rgba(60,60,67,0.6)",
          flexGrow: 1,
        }}>{props.searchText}</span>
        )}
        <span style={{
          position: "relative",
          ...KD_TYPE_IOS_GLYPH,
          textAlign: "center",
          whiteSpace: "nowrap",
          color: "rgba(60,60,67,0.6)",
          flexShrink: 0,
        }}>{props.text2 ?? "􀁡"}</span>
      </div>
      {props.showText && (
      <span style={{
        position: "relative",
        ...KD_TYPE_IOS_FIELD,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "rgb(0,122,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "Cancel"}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 361,
      borderRadius: 10,
      backgroundColor: "var(--ios-fill-tertiary)",
      display: "flex",
      flexDirection: "row",
      padding: "7px 8px 7px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        ...KD_TYPE_IOS_GLYPH,
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "􀊫"}</span>
      {props.showText && (
      <span style={{
        position: "relative",
        ...KD_TYPE_IOS_FIELD,
        whiteSpace: "nowrap",
        color: "rgba(60,60,67,0.6)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.searchText}</span>
      )}
      <span style={{
        position: "relative",
        ...KD_TYPE_IOS_GLYPH,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "rgba(60,60,67,0.6)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "􀊱"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Typing
    "state=typing": __body0,
    // figma: State=Focused
    "state=focused": __body1,
    // figma: State=Placeholder
    "state=placeholder": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default SearchFieldLight;
