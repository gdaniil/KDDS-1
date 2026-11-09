// figma node: 4055:192 feed / date. Full-bleed date header between groups of FeedCells (375×34 in Figma,
// fills its container): 8px 16px padding, footnote 13/18 in content-secondary.
export function FeedDate({ label = "Сьогодні", level = 3, className, style }) {
  return (
    <div role="heading" aria-level={level} className={className} style={{
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      width: "100%",
      padding: "var(--space-2) var(--space-4)",
      position: "relative",
      ...style,
    }}>
      <span className="footnote" style={{
        flex: "1 0 0",
        minWidth: 0,
        color: "var(--content-content-secondary)",
        overflowWrap: "break-word",
      }}>{label}</span>
    </div>
  );
}
export default FeedDate;
