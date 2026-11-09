import { Switch } from '../inputs/Switch.jsx';
import { SegmentedControl } from '../navigation/SegmentedControl.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';
import { Placeholder } from '../internal/Placeholder.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// figma node: 113:997 cell / regular (7 variants)
// Height hugs the content with a 48px minimum (Figma: vertical hug, min-height 48). The wrapper below sets height auto + minHeight 48,
// as it sets the width; the 343×48 in the bodies is only Figma's default size. One line 48, with caption 62, switch 55, segmented 52.
// Fills its container: label and caption keep one line and end with «…» (min-width 0 on the text column); the icon and the
// accessory (chevron, Switch, SegmentedControl) never shrink, so a long label cannot push them out of the row.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "caption=" + __venc(p.caption);

function __FigmaCellRegular(_p = {}) {
  const props = { ..._p, type: _p.type ?? "with icon", caption: _p.caption ?? false, showIcon: _p.showIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Icon name="Ic2Chevron" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span className="subheadline-emphasized" style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text1 ?? "Label"}</span>
        <span className="caption1" style={{
          position: "relative",
          color: "var(--content-content-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text2 ?? "caption"}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Icon name="Ic2Chevron" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span className="subheadline-emphasized" style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text1 ?? "Label"}</span>
        <span className="caption1" style={{
          position: "relative",
          color: "var(--content-content-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text2 ?? "caption"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <SegmentedControl options={props.segmentOptions} value={props.segmentValue} onChange={props.onSegmentChange}
        style={{ width: 118, height: 28, flexShrink: 0 }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <span className="subheadline-emphasized" style={{
        position: "relative",
        color: "var(--content-content-primary)",
        flexGrow: 1,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <Switch checked={props.checked} onChange={props.onCheckedChange} aria-label={props.text1} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 343,
      height: 48,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-3) var(--space-4) var(--space-3) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon ?? <Placeholder />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        minWidth: 0,
      }}>
        <span className="subheadline-emphasized" style={{
          position: "relative",
          color: "var(--content-content-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text1 ?? "Label"}</span>
        <span className="caption1" style={{
          position: "relative",
          color: "var(--content-content-secondary)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.text2 ?? "caption"}</span>
      </div>
      <Switch checked={props.checked} onChange={props.onCheckedChange} aria-label={props.text1} />
    </div>
  );
  const __impls = {
    // figma: type=with icon, caption=false
    "type=with icon|caption=false": __body0,
    // figma: type=with icon, caption=true
    "type=with icon|caption=true": __body1,
    // figma: type=default, caption=false
    "type=default|caption=false": __body2,
    // figma: type=default, caption=true
    "type=default|caption=true": __body3,
    // figma: type=with switch, caption=false
    "type=with switch|caption=false": __body4,
    // figma: type=with toggle, caption=false
    "type=with toggle|caption=false": __body5,
    // figma: type=with toggle, caption=true
    "type=with toggle|caption=true": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

const CELL_TYPE = { none: "default", chevron: "with icon", switch: "with toggle", segmented: "with switch" };
// Tappable rows: none/chevron + onClick render as a real button; a switch row toggles its switch on tap (iOS).
export function Cell({ label = "Label", caption, icon, accessory = "none", checked = false, onCheckedChange, onClick,
  segmentOptions = ["Укр", "En"], segmentValue = 0, onSegmentChange, className, style }) {
  ensureKdStyles();
  const asButton = !!onClick && (accessory === "none" || accessory === "chevron");
  const toggles = accessory === "switch" && !!(onCheckedChange || onClick);
  const [pressedStyle, pressHandlers] = usePressed(asButton || toggles);
  const row = <__FigmaCellRegular type={CELL_TYPE[accessory] ?? "default"} caption={!!caption} text1={label} text2={caption}
    showIcon={!!icon} icon={icon} checked={checked} onCheckedChange={onCheckedChange} segmentOptions={segmentOptions}
    segmentValue={segmentValue} onSegmentChange={onSegmentChange} className={className} style={{ width: "100%", height: "auto", minHeight: 48, ...style }} />;
  if (asButton) return (
    <button type="button" onClick={onClick} className="kd-control kd-control-inset" {...pressHandlers}
      style={{ all: "unset", display: "block", width: "100%", borderRadius: "var(--radius-control)", cursor: "pointer", ...pressedStyle }}>{row}</button>
  );
  // The switch handles its own clicks (and keyboard); only taps elsewhere on the row toggle it here.
  if (toggles) return (
    <div {...pressHandlers} style={{ cursor: "pointer", ...pressedStyle }} onClick={(e) => {
      if (e.target.closest && e.target.closest('[role="switch"]')) return;
      if (onCheckedChange) onCheckedChange(!checked);
      if (onClick) onClick(e);
    }}>{row}</div>
  );
  return row;
}
export default Cell;
