import { ensureKdStyles } from '../internal/runtime.jsx';
// iOS 26 segmented control (Figma 2122:1171): 32px track, pill selection.
// Apple-kit chrome, not Kyiv Digital type: the labels of Apple's segmented control (Figma 2122:1171, from Apple Design Resources)
// use no KD text style: SF Pro 13.333/18, -0.08px tracking, Semibold (590) selected / Medium (510) otherwise.
// A label too long for its equal-width segment ends with «…»: the text sits in its own span because text-overflow does not
// apply to the anonymous text item of a flex button.
const KD_TYPE_SEGMENTED = { fontFamily: "var(--font-sf)", fontSize: 13.333, lineHeight: "18px", letterSpacing: "-0.08px" };
const KD_TYPE_SEGMENTED_WEIGHT = { selected: 590, regular: 510 };
export function SegmentedControl({ options = ["Label", "Label"], value = 0, onChange, className, style }) {
  ensureKdStyles();
  const selected = typeof value === "number" ? value : Math.max(0, options.indexOf(value));
  return (
    <div role="tablist" className={className}
      style={{ display: "flex", gap: 4, padding: 2, height: 32, width: "100%", boxSizing: "border-box", borderRadius: 100,
        backgroundColor: "var(--ios-fill-tertiary)", ...style }}>
      {options.map((option, i) => (
        <button key={i} type="button" role="tab" className="kd-control" aria-selected={i === selected}
          onClick={() => onChange && onChange(typeof value === "number" ? i : option)}
          style={{ all: "unset", flex: "1 1 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "3px 6px", boxSizing: "border-box", borderRadius: 20, cursor: "pointer",
            backgroundColor: i === selected ? "var(--ios-segmented-selected)" : "transparent",
            ...KD_TYPE_SEGMENTED, fontWeight: KD_TYPE_SEGMENTED_WEIGHT[i === selected ? "selected" : "regular"], color: "var(--ios-label-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>{option}</span>
        </button>
      ))}
    </div>
  );
}
export default SegmentedControl;
