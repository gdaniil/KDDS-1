import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';
import { StatusBarIPhone } from '../internal/StatusBarIPhone.jsx';
import { NavbarSlot, resolveNavbarSlot } from '../internal/NavbarSlot.jsx';

// figma node: 121:107 navbar / regular (6 variants: left_icon / icon+action / 2_icons × default / invert)
// Status bar 54 + controls 44. Default: background-bg-surface with a 1px border-border-regular at the bottom only; invert: no fill.
// Title: Headline 17/22 semibold (590), -0.4, centred on the bar's full width (Figma 121:112, left 188 −50%, top 11).
// Action: Callout/Emphasized 16/21 semibold (590), -0.4, content-link, right edge 16px from the bar edge (Figma 121:106),
// sitting on the title's baseline. Icon slots 24×24, 16px from the edges, top 10.
// Type comes from the tokens.css classes: title = "headline", action = "callout-emphasized".
// The action (and its invisible copy on the left) is capped at half of (controls row − 2×8px gaps − 64px), in container units
// of the controls row, so the title always keeps at least 64px; a longer action ends with «…». Short actions are unaffected.
// Not in Figma (proposed): the icon slots are 44×44 buttons centred on the 24px glyph (internal/NavbarSlot.jsx), the text
// action button is 44px tall, and `transparent` drops the fill and the bottom border (the transparent detail navbar).
const NR_ACTION = { whiteSpace: "nowrap", maxWidth: "calc(50cqw - 40px)", overflow: "hidden", textOverflow: "ellipsis" };

// Figma slot: 24×24 at top 10 (1px above the title box, which starts at 11).
const NR_SLOT = { marginTop: -1 };

function __FigmaNavbarRegular(_p = {}) {
  const props = { ..._p, type: _p.type ?? "left_icon", style2: _p.style2 ?? "default", showProgress: _p.showProgress ?? false };
  const invert = props.style2 === "invert";
  const filled = !invert && !props.transparent;
  const ink = invert ? "var(--content-content-primary-invert)" : "var(--content-content-primary)";
  const hasAction = props.type === "icon+action";
  const hasTitle = props.text1 !== "" && props.text1 !== null && props.text1 !== false;
  const actionText = props.text2 ?? "Action";
  const actionStyle = { ...NR_ACTION, color: "var(--content-content-link)" };
  // The row is a baseline-aligned flex line with an 11px top inset: the title (largest ascent) lands at top 11 as in Figma,
  // and the action text shares its baseline. The two side columns grow equally from 0 and never shrink below their content,
  // so the title is centred on the full width; a long title shrinks and ends with an ellipsis instead of covering the slots.
  // Each side also holds an invisible copy of the other side's widest content, so both sides are always the same width.
  const sideStyle = { flex: "1 1 0", minWidth: "max-content", display: "grid", alignItems: "baseline" };
  const ghostAction = hasAction ? <span aria-hidden="true" className="callout-emphasized" style={{ ...NR_ACTION, gridArea: "1 / 1", visibility: "hidden", height: 0, overflow: "hidden" }}>{actionText}</span> : null;
  const ghostIcon = <span aria-hidden="true" style={{ gridArea: "1 / 1", width: 24, height: 0, visibility: "hidden" }} />;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      ...(filled ? { backgroundColor: "var(--background-bg-surface)", borderBottom: "1px solid var(--border-border-regular)" } : null),
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <StatusBarIPhone
        style={{
          position: "relative",
          height: 54,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        mode={invert ? "dark" : "light"}
        background={false}
      />
      <div style={{
        position: "relative",
        height: 44,
        boxSizing: "border-box",
        padding: "11px var(--space-4) 0 var(--space-4)",
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: "var(--space-2)",
        flexShrink: 0,
        alignSelf: "stretch",
        containerType: "inline-size",
        color: ink,
      }}>
        <div style={{ ...sideStyle, justifyItems: "start", alignSelf: "flex-start" }}>
          <div style={{ gridArea: "1 / 1" }}><NavbarSlot slot={props.leftSlot} style={NR_SLOT} /></div>
          {ghostAction}
        </div>
        {hasTitle && <span data-kd-navbar-title="" className="headline" style={{
          flex: "0 1 auto",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "center",
          color: ink,
        }}>{props.text1 ?? "Title"}</span>}
        <div style={{ ...sideStyle, justifyItems: "end", alignSelf: hasAction ? "baseline" : "flex-start" }}>
          {ghostIcon}
          {hasAction ? (
            props.onAction
              ? <button type="button" className="kd-control" data-kd-navbar-action="" onClick={props.onAction} {...props.pressHandlers}
                  style={{ all: "unset", gridArea: "1 / 1", cursor: "pointer", borderRadius: 4, padding: "11px 0 12px", margin: "-11px 0 -12px", ...actionStyle, ...props.pressedStyle }}><span className="callout-emphasized" style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis" }}>{actionText}</span></button>
              : <span data-kd-navbar-action="" className="callout-emphasized" style={{ gridArea: "1 / 1", ...actionStyle }}>{actionText}</span>
          ) : (
            <div style={{ gridArea: "1 / 1" }}><NavbarSlot slot={props.rightSlot} style={NR_SLOT} /></div>
          )}
        </div>
      </div>
      {props.showProgress && (
      <div style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        backgroundColor: "var(--background-bg-accent)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-5)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          width: 1,
          height: 4,
          backgroundColor: "var(--background-bg-accent)",
          flexShrink: 0,
        }} />
        <div style={{
          position: "relative",
          width: 1,
          height: 4,
          backgroundColor: "var(--background-bg-accent)",
          flexShrink: 0,
        }} />
      </div>
      )}
    </div>
  );
}

const NAVBAR_REGULAR_TYPE = { back: "left_icon", "back-action": "icon+action", "two-icons": "2_icons" };
// Leading slot: leadingAction, else onClose (Ic2Close, «Закрити»), else the back arrow (Ic2ArrowLeft, «Назад»), which is a
// button even without onBack. A leadingIcon node without a handler is drawn as given (legacy); false leaves the slot empty.
// Trailing slot: trailingAction on every variant but back-action (whose text action owns that slot); else the legacy
// trailingIcon node, two-icons only.
export function NavbarRegular({ variant = "back", inverted = false, transparent = false, title, actionLabel, onAction, onBack, onClose,
  leadingAction, trailingAction, leadingIcon, trailingIcon = false, showProgress = false, className, style }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(!!onAction);
  const type = NAVBAR_REGULAR_TYPE[variant] ?? "left_icon";
  const leftSlot = resolveNavbarSlot({ action: leadingAction, onClose, onBack, icon: leadingIcon, backByDefault: true });
  const rightSlot = type === "icon+action" ? null
    : trailingAction ? resolveNavbarSlot({ action: trailingAction }) : { node: type === "2_icons" ? trailingIcon : null };
  return <__FigmaNavbarRegular type={type} style2={inverted ? "invert" : "default"} transparent={transparent}
    text1={title ?? (transparent ? "" : "Title")} text2={actionLabel}
    onAction={onAction} pressedStyle={pressedStyle} pressHandlers={pressHandlers}
    leftSlot={leftSlot} rightSlot={rightSlot} showProgress={showProgress} className={className} style={{ width: "100%", ...style }} />;
}
export default NavbarRegular;
