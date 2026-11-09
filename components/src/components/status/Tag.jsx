import { Icon } from '../../assets/icons/Icon.jsx';

// Figma 4081:10515 tag (2 types): no fill, a 16px lead and a Footnote/Regular label (footnote, 13/18), 8px apart.
// regular = a 16px glyph and the label, both in content-secondary (metadata: a category, a date, a district).
// status = a 16px dot and the label in content-primary (where something stands). The dot is accent in Figma; `tone`
// picks the other system status colours, and the label always says the state in words.
const DOT_TONES = {
  accent: "var(--background-bg-accent)",
  positive: "var(--background-bg-positive)",
  warning: "var(--background-bg-warning)",
  negative: "var(--background-bg-negative)",
  neutral: "var(--content-content-secondary)",
};

export function Tag({ label, type = "regular", icon, tone = "accent", className, style, ...rest }) {
  const status = type === "status";
  const glyph = typeof icon === "string" ? <Icon name={icon} size={16} /> : icon;
  return (
    <span {...rest} className={["footnote", className].filter(Boolean).join(" ")} style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-2)", maxWidth: "100%", minWidth: 0,
      color: status ? "var(--content-content-primary)" : "var(--content-content-secondary)", verticalAlign: "middle", alignSelf: "flex-start", ...style,
    }}>
      {status ? (
        <span aria-hidden="true" style={{ width: 16, height: 16, flexShrink: 0, borderRadius: "var(--radius-pill)", backgroundColor: DOT_TONES[tone] || DOT_TONES.accent }} />
      ) : glyph ? (
        <span aria-hidden="true" style={{ display: "inline-flex", width: 16, height: 16, flexShrink: 0 }}>{glyph}</span>
      ) : null}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
    </span>
  );
}
