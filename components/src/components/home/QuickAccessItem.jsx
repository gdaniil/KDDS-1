import { Icon } from '../../assets/icons/Icon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// Figma quick-access / item 4055:169: a 108×112 tile, 12px padding, radius 12, elevation/regular shadow,
// a 24px glyph on top and a Footnote/Emphasized (13/18, 590) label of up to two lines at the bottom.
// Figma paints every look with primitives; the semantic token is used where one has the same value in both themes.
// regular: ink stays neutral-gray100 as in Figma — content-content-primary turns white 80% in dark,
//   1.43:1 on background-bg-quick-access (white 80% in dark); gray100 holds 8.3:1 there (12:1 in light).
// all: vibrant-dark-blue (no semantic fill) + content-content-primary-invert (white in both themes), 15:1.
// qr-active: vibrant-pink (no semantic fill) + content-content-negative (red) — 2.24:1 in both themes, kept as in Figma.
// parking-active: vibrant-yellow (no semantic fill) + content-content-warning (orange) — 2.17:1 in both themes, kept as in Figma;
//   the 48px ring is border-border-warning, 4px, around an 8px-padded 24px glyph.
const LOOKS = {
  "regular": { bg: "var(--background-bg-quick-access)", ink: "var(--neutral-neutral-gray100)", icon: null, label: "Label" },
  "all": { bg: "var(--vibrant-vibrant-dark-blue)", ink: "var(--content-content-primary-invert)", icon: "Ic2Kd", label: "Усі\nсервіси" },
  "qr-active": { bg: "var(--vibrant-vibrant-pink)", ink: "var(--content-content-negative)", icon: "Ic2Qr", label: "QR-квитки" },
  "parking-active": { bg: "var(--vibrant-vibrant-yellow)", ink: "var(--content-content-warning)", icon: "Ic2Park", label: "Паркування" },
};
// Label and status are footnote-emphasized (class from tokens.css); TEXT keeps only the layout.
const TEXT = { margin: 0, width: 84, overflowWrap: "break-word", whiteSpace: "pre-line", overflow: "hidden",
  display: "-webkit-box", WebkitBoxOrient: "vertical" };

export function QuickAccessItem({ type = "regular", variant, label, status, icon, onClick, className, style,
  "aria-label": ariaLabel }) {
  ensureKdStyles();
  const kind = LOOKS[variant ?? type] ? (variant ?? type) : "regular";
  const look = LOOKS[kind];
  const [pressedStyle, pressHandlers] = usePressed(true);
  const glyphSrc = icon ?? look.icon;
  const glyph = typeof glyphSrc === "string" ? <Icon name={glyphSrc} size={24} style={{ display: "block" }} /> : glyphSrc;
  const slot = <span style={{ display: "inline-flex", width: 24, height: 24, flexShrink: 0 }}>{glyph}</span>;
  const text = label ?? look.label;
  const hasStatus = status !== undefined && status !== null && status !== "";
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={["kd-control", className].filter(Boolean).join(" ")}
      {...pressHandlers}
      style={{ all: "unset", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start",
        justifyContent: "space-between", width: 108, height: 112, padding: "var(--space-3)", flexShrink: 0, borderRadius: "var(--radius-control)",
        backgroundColor: look.bg, color: look.ink, boxShadow: "var(--shadow-elevation)", cursor: "pointer",
        WebkitTapHighlightColor: "transparent", ...pressedStyle, ...style }}>
      {kind === "parking-active"
        ? <span style={{ display: "inline-flex", padding: "var(--space-2)", borderRadius: "var(--radius-pill)", border: "4px solid var(--border-border-warning)", flexShrink: 0 }}>{slot}</span>
        : slot}
      <span style={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <span className="footnote-emphasized" style={{ ...TEXT, WebkitLineClamp: hasStatus ? 1 : 2 }}>{text}</span>
        {hasStatus ? <span className="footnote-emphasized" style={{ ...TEXT, WebkitLineClamp: 1, fontVariantNumeric: "tabular-nums" }}>{status}</span> : null}
      </span>
    </button>
  );
}
export default QuickAccessItem;
