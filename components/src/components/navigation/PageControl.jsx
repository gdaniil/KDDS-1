// iOS page control (Figma 295:1555): 8px dots, 30% for inactive; past 7 pages a window of 6 with 6px and 4px edge dots.
export function PageControl({ count = 5, selected = 0, platter = false, className, style }) {
  let dots = [];
  if (count <= 7) {
    for (let i = 0; i < count; i++) dots.push({ size: 8, active: i === selected });
  } else {
    const start = Math.min(Math.max(selected - 3, 0), count - 6);
    if (start > 0) dots.push({ size: 4 }, { size: 6 });
    for (let i = start; i < start + 6; i++) dots.push({ size: 8, active: i === selected });
    if (start + 6 < count) dots.push({ size: 6 }, { size: 4 });
  }
  return (
    <div role="img" aria-label={`Page ${selected + 1} of ${count}`} className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-pill)", boxSizing: "border-box",
        ...(platter ? { backgroundColor: "var(--ios-platter)", backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)" } : null), ...style }}>
      {dots.map((d, i) => (
        <span key={i} style={{ width: d.size, height: d.size, borderRadius: "var(--radius-pill)", flexShrink: 0,
          backgroundColor: "var(--ios-label-primary)", opacity: d.active ? 1 : 0.3 }} />
      ))}
    </div>
  );
}
export default PageControl;
