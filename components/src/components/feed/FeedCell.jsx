import { Icon } from '../../assets/icons/Icon.jsx';
import { FeedIcon } from './FeedIcon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// figma node: 4055:186 feed / cell. Full-bleed row (375 in Figma, fills its container): 8px 16px padding, 16px gap,
// 40px icon disc, title (subheadline-emphasized 15/20) over text (footnote 13/18), 20px chevron. No fill of its own:
// it sits on background-bg-background, where the white disc reads.
const ellipsis = { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };

export function FeedCell({ title = "Title", description, time, icon, tint = "default", chevron, onClick, className, style }) {
  ensureKdStyles();
  const asButton = !!onClick;
  const showChevron = chevron ?? asButton;
  const [pressedStyle, pressHandlers] = usePressed(asButton);
  const hasCaption = !!(description || time);
  const content = (
    <>
      <FeedIcon icon={icon} tint={tint} />
      <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flex: "1 0 0", minWidth: 0,
        textAlign: "left" }}>
        <span className="subheadline-emphasized" style={{ display: "block", alignSelf: "stretch",
          color: "var(--content-content-primary)", ...ellipsis }}>{title}</span>
        {hasCaption && (
          <span className="footnote" style={{ display: "flex", alignSelf: "stretch", minWidth: 0,
            color: "var(--content-content-secondary)" }}>
            {description && <span style={{ minWidth: 0, ...ellipsis }}>{description}</span>}
            {description && time && <span style={{ flexShrink: 0, whiteSpace: "pre" }}>{" · "}</span>}
            {time && <span style={{ flexShrink: 0, whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{time}</span>}
          </span>
        )}
      </span>
      {showChevron && (
        <span aria-hidden="true" style={{ display: "block", width: 20, height: 20, flexShrink: 0, color: "var(--content-content-secondary)" }}>
          <Icon name="Ic2Chevron" size={20} style={{ display: "block" }} />
        </span>
      )}
    </>
  );
  const rowStyle = { display: "flex", flexDirection: "row", alignItems: "center", gap: "var(--space-4)", padding: "var(--space-2) var(--space-4)",
    boxSizing: "border-box", width: "100%", minHeight: 56, position: "relative" };
  if (asButton) return (
    <button type="button" onClick={onClick} className={["kd-control kd-control-inset", className].filter(Boolean).join(" ")} {...pressHandlers}
      style={{ all: "unset", ...rowStyle, cursor: "pointer", ...pressedStyle, ...style }}>{content}</button>
  );
  return <div className={className} style={{ ...rowStyle, ...style }}>{content}</div>;
}
export default FeedCell;
