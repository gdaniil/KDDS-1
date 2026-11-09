import { ButtonRegular } from '../internal/ButtonRegular.jsx';
import { ButtonSmall } from '../internal/ButtonSmall.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// Figma has: regular label = primary|secondary|bezeled; regular with icon adds ghost; regular has no elevated.
// small label = primary|secondary|bezeled|elevated; small with left/right icon adds ghost; small icon-only has no ghost.
// Label: regular = Callout/Emphasized 16/21, small = Footnote/Emphasized 13/18 (590, -0.4) in every variant.
// Not in Figma (proposed): pressed = 70% opacity; loading = Ic2Spinner turning in the icon slot.
// Hugs its label up to the container width (max-width 100%); past that the label ends with «…» and the icon slot keeps its size.
// Ink for icons the Figma slots leave uncoloured, matching each variant's label.
const BUTTON_INK = { primary: "var(--content-content-primary-cta)", secondary: "var(--content-content-secondary-cta)",
  bezeled: "var(--content-content-accent)", ghost: "var(--content-content-accent)", elevated: "var(--content-content-primary)" };
function KdSpinner({ size }) {
  return (
    <span style={{ display: "flex", width: size, height: size, animation: "kd-spin 0.8s linear infinite" }}>
      <Icon name="Ic2Spinner" size={size} style={{ display: "block" }} />
    </span>
  );
}
// Figma icon slots: 24×24 on regular, 20×20 on small. An <Icon /> is redrawn at the slot size; any glyph is centred in a box of that size.
function SlotGlyph({ node, size }) {
  const glyph = React.isValidElement(node) && node.type === Icon
    ? React.cloneElement(node, { size, style: { display: "block", flexShrink: 0, ...node.props.style } })
    : node;
  return <span aria-hidden="true" style={{ display: "flex", width: size, height: size, alignItems: "center", justifyContent: "center" }}>{glyph}</span>;
}

export function Button({ variant = "primary", size = "regular", label = "Label", icon, iconPosition = "left", disabled = false,
  loading = false, fullWidth = false, onClick, type = "button", className, style, "aria-label": ariaLabel }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(!disabled && !loading);
  const slot = size === "small" ? 20 : 24;
  const glyph = loading ? <KdSpinner size={slot} /> : icon ? <SlotGlyph node={icon} size={slot} /> : null;
  const position = loading && !icon ? "left" : iconPosition;
  const iconOnly = !!glyph && position === "only";
  const state = disabled ? "disabled" : "enabled";
  const fill = { maxWidth: "100%", minWidth: 0, ...(fullWidth ? { width: "100%", boxSizing: "border-box" } : null) };
  const inner = size === "small"
    ? <ButtonSmall type={!glyph ? "label" : iconOnly ? "icon-only" : position === "right" ? "icon-right" : "icon-left"} style2={variant} state={state} text1={label} icon1={glyph} style={fill} />
    : <ButtonRegular type={!glyph ? "label" : iconOnly ? "icon only" : "label+icon"} style2={variant} state={state} text1={label} icon1={glyph} style={fill} />;
  return (
    <button type={type} onClick={loading ? undefined : onClick} disabled={disabled} aria-busy={loading || undefined}
      aria-label={iconOnly ? (ariaLabel ?? label) : ariaLabel} className={["kd-control", className].filter(Boolean).join(" ")} {...pressHandlers}
      style={{ all: "unset", display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined, maxWidth: "100%", borderRadius: "var(--radius-control)",
        cursor: disabled ? "default" : loading ? "progress" : "pointer",
        color: disabled ? "var(--content-content-disabled)" : BUTTON_INK[variant], ...pressedStyle, ...style }}>{inner}</button>
  );
}
export default Button;
