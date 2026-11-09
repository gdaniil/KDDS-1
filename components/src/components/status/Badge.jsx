import { Icon } from '../../assets/icons/Icon.jsx';

// Figma 4078:9583 badge (6 types): a pill (radius-pill), 4px / 8px padding, 4px gap, an optional 16px glyph and a
// Caption1/Emphasized label (caption1-emphasized, 12/16 590). Fills by Figma type:
// default = background-bg-accent, neutral = background-bg-subtle with content-secondary ink, success = background-bg-positive,
// alert = background-bg-warning, error = background-bg-negative, dark = chart-chart-power-off (the «no power» pill).
// Every filled type has content-primary-invert ink. Kept as drawn although white on green is 2.1:1 and on orange 3.5:1
// (see README «Status»): the label is the status word, so the colour never carries it alone.
const BADGE_TONES = {
  accent: { bg: "var(--background-bg-accent)", ink: "var(--content-content-primary-invert)" },
  neutral: { bg: "var(--background-bg-subtle)", ink: "var(--content-content-secondary)" },
  positive: { bg: "var(--background-bg-positive)", ink: "var(--content-content-primary-invert)" },
  warning: { bg: "var(--background-bg-warning)", ink: "var(--content-content-primary-invert)" },
  negative: { bg: "var(--background-bg-negative)", ink: "var(--content-content-primary-invert)" },
  dark: { bg: "var(--chart-chart-power-off)", ink: "var(--content-content-primary-invert)" },
};

export function Badge({ label, tone = "accent", icon, className, style, ...rest }) {
  const t = BADGE_TONES[tone] || BADGE_TONES.accent;
  const glyph = typeof icon === "string" ? <Icon name={icon} size={16} /> : icon;
  return (
    <span {...rest} className={["caption1-emphasized", className].filter(Boolean).join(" ")} style={{
      boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-1)",
      maxWidth: "100%", padding: "var(--space-1) var(--space-2)", borderRadius: "var(--radius-pill)",
      backgroundColor: t.bg, color: t.ink, whiteSpace: "nowrap", verticalAlign: "middle", alignSelf: "flex-start", ...style,
    }}>
      {glyph ? <span aria-hidden="true" style={{ display: "inline-flex", width: 16, height: 16, flexShrink: 0 }}>{glyph}</span> : null}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
    </span>
  );
}
