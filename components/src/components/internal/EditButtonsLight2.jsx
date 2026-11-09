// Apple-kit chrome, not Kyiv Digital type: the SF Symbol checkmark glyphs of Apple's "Edit Buttons/Light"
// (Figma 601:1057, drawn as image 154:713 in cell / selection): SF Pro Semibold 14.5/22, off the KD scale.
const KD_TYPE_SF_SYMBOL = { fontFamily: "var(--font-sf)", fontWeight: 590, fontSize: 14.5, lineHeight: "22px" };
// figma node: 601:1057 Edit Buttons/Light (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function EditButtonsLight2(_p = {}) {
  const props = { ..._p, state: _p.state ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "rgb(255,59,48)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        ...KD_TYPE_SF_SYMBOL,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "var(--neutral-neutral-white)",
      }}>{props.text1 ?? "􀅽"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "rgb(52,199,89)",
      }} />
      <span style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        ...KD_TYPE_SF_SYMBOL,
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "var(--neutral-neutral-white)",
      }}>{props.text1 ?? "􀅼"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      color: "var(--neutral-neutral-white)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
        borderRadius: "50%",
        backgroundColor: "rgb(0,122,255)",
      }} />
      <svg width={10.139} height={9.820} viewBox="0 0 10.139 9.820" fill="none" style={{
        position: "absolute",
        left: 6.931,
        top: 6.116,
        width: 10.139,
        height: 9.82,
      }}>
        <path d={"M 3.965 9.82 C 4.324 9.82 4.602 9.674 4.8 9.381 L 9.94 1.423 C 10.011 1.315 10.061 1.211 10.089 1.112 C 10.122 1.012 10.139 0.916 10.139 0.821 C 10.139 0.581 10.058 0.385 9.898 0.234 C 9.742 0.078 9.542 0 9.296 0 C 9.126 0 8.985 0.035 8.871 0.106 C 8.758 0.172 8.647 0.286 8.539 0.446 L 3.937 7.767 L 1.558 4.708 C 1.369 4.468 1.135 4.347 0.857 4.347 C 0.607 4.347 0.401 4.427 0.241 4.588 C 0.08 4.744 0 4.942 0 5.183 C 0 5.291 0.019 5.397 0.057 5.501 C 0.094 5.6 0.158 5.704 0.248 5.813 L 3.129 9.402 C 3.356 9.681 3.634 9.82 3.965 9.82 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 22,
      position: "relative",
      color: "rgb(199,199,204)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 0,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 11 20.5 C 16.247 20.5 20.5 16.247 20.5 11 C 20.5 5.753 16.247 1.5 11 1.5 C 5.753 1.5 1.5 5.753 1.5 11 C 1.5 16.247 5.753 20.5 11 20.5 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: State=Remove
    "state=remove": __body0,
    // figma: State=Add
    "state=add": __body1,
    // figma: State=Selected
    "state=selected": __body2,
    // figma: State=Unselected
    "state=unselected": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default EditButtonsLight2;
