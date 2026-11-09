// Figma 1593:805: 8px bar, background-bg-accent on background-bg-subtle, fully rounded.
export function ProgressBar({ value = 0, indeterminate = false, className, style }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={indeterminate ? undefined : Math.round(pct)} className={className}
      style={{ position: "relative", width: "100%", height: 8, borderRadius: "var(--radius-pill)", overflow: "hidden", backgroundColor: "var(--background-bg-subtle)",
        display: "flex", justifyContent: indeterminate ? "center" : "flex-start", ...style }}>
      <div style={{ height: 8, borderRadius: "var(--radius-pill)", backgroundColor: "var(--background-bg-accent)", width: indeterminate ? "30%" : pct + "%" }} />
    </div>
  );
}
export default ProgressBar;
