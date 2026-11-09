// Shared frame of the form fields that are not the single-line TextField: TextField multiline and Select.
// It draws exactly what TextField's Figma variants draw (155:731): a footnote label in content-secondary, 4px above a
// background-bg-surface box with radius-control, 12/16 padding and a 1px inset outline: border-border-regular,
// border-border-accent while focused, border-border-negative in error; disabled = background-bg-background with
// content-disabled ink. Under the box: the error message (footnote, content-negative) or the hint (footnote, secondary).
export function FieldFrame({ label, htmlFor, labelId, state = "default", focused = false, disabled = false, message, helperText, boxStyle, children, className, style }) {
  const error = !disabled && state === "error";
  const focus = !disabled && !error && (state === "focus" || focused);
  const outline = error ? "var(--border-border-negative)" : focus ? "var(--border-border-accent)" : "var(--border-border-regular)";
  const under = error ? (message ?? helperText) : helperText;
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)", width: "100%", minWidth: 0, ...style }}>
      {label ? (
        <label id={labelId} htmlFor={htmlFor} className="footnote" style={{ color: "var(--content-content-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</label>
      ) : null}
      <div style={{
        position: "relative", boxSizing: "border-box", display: "flex", alignItems: "center", gap: 10, width: "100%",
        padding: "var(--space-3) var(--space-4)", borderRadius: "var(--radius-control)",
        backgroundColor: disabled ? "var(--background-bg-background)" : "var(--background-bg-surface)",
        boxShadow: "inset 0 0 0 1px " + outline,
        color: disabled ? "var(--content-content-disabled)" : "var(--content-content-primary)",
        ...boxStyle,
      }}>{children}</div>
      {under ? (
        <span className="footnote" style={{ color: error ? "var(--content-content-negative)" : "var(--content-content-secondary)", overflowWrap: "anywhere" }}>{under}</span>
      ) : null}
    </div>
  );
}
