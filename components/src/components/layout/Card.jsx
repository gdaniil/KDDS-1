import { ListCaption } from '../lists/ListCaption.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// The white surface block of the shipped screens, measured on the real-app kit pages, where it was built by hand as
// Group and Section (main-screens), ItemCard (lists), Section (content-pages) and FieldCard (forms):
// background-bg-surface, radius-control and shadow-elevation. The Figma spec frames draw grouped blocks flat; the shipped
// screens add the shadow, so it is on by default and elevated={false} draws the flat block.
// padding: list = space-1 top and bottom, none at the sides (a grouped block of Cells: Group, FieldCard rows);
// regular = space-4 (one card per thing, a card of fields: ItemCard, RequestCard, FieldCard); large = space-5 (stacked
// sections of a detail page: content-pages Section); none = 0. Children stack in a column, `gap` space steps apart.
// caption = the system ListCaption above the block, space-2 (8px) between them (main-screens Section, patterns «Captioned groups»).
// onClick makes the whole card one real button (the «Result card»): focus ring and 70% pressed like Button.
const CARD_PADDING = {
  none: 0,
  list: "var(--space-1) 0",
  regular: "var(--space-4)",
  large: "var(--space-5)",
};

export function Card({ caption, padding = "regular", gap, elevated = true, onClick, as: Tag = "div", children, className, style,
  "aria-label": ariaLabel, ...rest }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(!!onClick);
  const surface = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: 0,
    padding: CARD_PADDING[padding] ?? CARD_PADDING.regular,
    gap: gap == null ? undefined : gap === 0 ? 0 : "var(--space-" + gap + ")",
    backgroundColor: "var(--background-bg-surface)",
    borderRadius: "var(--radius-control)",
    boxShadow: elevated ? "var(--shadow-elevation)" : "none",
  };
  const block = onClick ? (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={["kd-control", className].filter(Boolean).join(" ")}
      {...rest} {...pressHandlers} style={{
        all: "unset", ...surface, position: "relative", textAlign: "left", cursor: "pointer",
        WebkitTapHighlightColor: "transparent", ...pressedStyle, ...style,
      }}>{children}</button>
  ) : (
    <Tag className={className} aria-label={ariaLabel} {...rest} style={{ ...surface, ...style }}>{children}</Tag>
  );
  if (caption == null || caption === "") return block;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", width: "100%", minWidth: 0 }}>
      <ListCaption label={caption} />
      {block}
    </div>
  );
}
export default Card;
