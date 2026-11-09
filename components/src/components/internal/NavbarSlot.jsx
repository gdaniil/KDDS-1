import { Icon } from '../../assets/icons/Icon.jsx';
import { usePressed } from './runtime.jsx';

// Navbar icon slots as real buttons, shared by NavbarRegular and NavbarEnhanced.
// Not in Figma (proposed, like Button's states): the 24px glyph stays where Figma draws it; the button around it is
// 44×44, centred on the glyph (10px past each edge), so it never moves the layout. Focus ring = .kd-control (2px
// border-border-accent, drawn inside the 44px box), pressed = 70% opacity. Ink = currentColor, set by the bar from content-*.
const SLOT_HIT = 44;
const SLOT_GLYPH = 24;
const SLOT_OUT = (SLOT_HIT - SLOT_GLYPH) / 2;

// An icon name ("Ic2ShareIos") or a node; an <Icon /> is redrawn at 24px.
function slotGlyph(icon) {
  if (typeof icon === "string") return <Icon name={icon} size={SLOT_GLYPH} style={{ display: "block", flexShrink: 0 }} />;
  if (React.isValidElement(icon) && icon.type === Icon)
    return React.cloneElement(icon, { size: SLOT_GLYPH, style: { display: "block", flexShrink: 0, ...icon.props.style } });
  return icon || null;
}

// What a slot holds, from the bar's props: a button ({ icon, label, onClick }), a plain node (legacy leadingIcon /
// trailingIcon, which may be the caller's own button), or nothing.
// Leading: leadingAction, then onClose (Ic2Close, «Закрити»), then onBack (Ic2ArrowLeft or leadingIcon, «Назад»);
// with `backByDefault` (NavbarRegular) the default back arrow is a button even without onBack.
export function resolveNavbarSlot({ action, onClose, onBack, icon, backByDefault = false }) {
  if (action) return { button: { icon: action.icon, label: action.label, onClick: action.onClick } };
  if (onClose) return { button: { icon: "Ic2Close", label: "Закрити", onClick: onClose } };
  if (onBack) return { button: { icon: icon || "Ic2ArrowLeft", label: "Назад", onClick: onBack } };
  if (backByDefault && icon === undefined) return { button: { icon: "Ic2ArrowLeft", label: "Назад" } };
  return { node: icon };
}

// A 24×24 slot box. With `button`, a 44×44 <button type="button"> sits centred on it; otherwise `node` is drawn as given.
export function NavbarSlot({ slot, style }) {
  const button = slot && slot.button;
  const [pressedStyle, pressHandlers] = usePressed(!!(button && button.onClick));
  const box = { position: "relative", width: SLOT_GLYPH, height: SLOT_GLYPH, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...style };
  if (!button) return <div style={box}>{slotGlyph(slot && slot.node)}</div>;
  return (
    <div style={box}>
      <button type="button" aria-label={button.label} onClick={button.onClick} className="kd-control kd-control-inset" data-kd-navbar-slot="" {...pressHandlers}
        style={{ all: "unset", boxSizing: "border-box", position: "absolute", top: -SLOT_OUT, left: -SLOT_OUT, width: SLOT_HIT, height: SLOT_HIT,
          display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-control)", color: "inherit",
          cursor: "pointer", WebkitTapHighlightColor: "transparent", ...pressedStyle }}>
        <span aria-hidden="true" style={{ display: "flex", width: SLOT_GLYPH, height: SLOT_GLYPH, alignItems: "center", justifyContent: "center" }}>{slotGlyph(button.icon)}</span>
      </button>
    </div>
  );
}
export default NavbarSlot;
