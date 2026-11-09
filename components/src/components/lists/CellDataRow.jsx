import { Icon } from '../../assets/icons/Icon.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// figma node: 156:754 cell / data-row (2 variants)
// The label keeps one line and ends with «…». The value is data and is never cut: up to 60% of the row on one line, then it
// wraps right-aligned (also inside long tokens such as an IBAN) and the row grows from its 40px minimum height.
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

function __FigmaCellDataRow(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 343,
      minHeight: 40,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-2) var(--space-4) var(--space-2) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="subheadline" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flex: "1 1 0",
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <span className="subheadline-emphasized" style={{
        position: "relative",
        textAlign: "right",
        overflowWrap: "anywhere",
        color: "var(--content-content-primary)",
        flex: "0 1 auto",
        minWidth: 0,
        maxWidth: "60%",
      }}>{props.text2 ?? "Value"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 343,
      minHeight: 40,
      borderRadius: "var(--radius-control)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-2) var(--space-4) var(--space-2) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="subheadline" style={{
        position: "relative",
        color: "var(--content-content-secondary)",
        flex: "1 1 0",
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flex: "0 1 auto",
        minWidth: 0,
        maxWidth: "60%",
      }}>
        <span className="subheadline-emphasized" style={{
          position: "relative",
          textAlign: "right",
          overflowWrap: "anywhere",
          color: "var(--content-content-primary)",
          minWidth: 0,
        }}>{props.text2 ?? "Value"}</span>
        <button type="button" className="kd-control" aria-label={props.iconLabel} onClick={props.onIconClick} {...props.iconPressHandlers} style={{
            all: "unset",
            position: "relative",
            zIndex: 1,
            display: "block",
            width: 20,
            height: 20,
            flexShrink: 0,
            borderRadius: 4,
            cursor: "pointer",
            ...props.iconPressedStyle,
          }}>
          <span style={{ position: "absolute", left: "50%", top: "50%", width: 44, height: 44, transform: "translate(-50%, -50%)" }} />
          {props.icon1 ?? <Icon name="Ic2Copy" size={20} aria-hidden="true" style={{ display: "block", color: "var(--content-content-primary)" }} />}
        </button>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=default
    "type=default": __body0,
    // figma: type=with icon
    "type=with icon": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

// The trailing icon is a real button (44x44 hit area centred on the 20px icon); the row itself is not interactive.
export function CellDataRow({ label = "Label", value = "Value", icon, iconLabel = "Копіювати", onIconClick, className, style }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(!!icon);
  return <__FigmaCellDataRow type={icon ? "with icon" : "default"} text1={label} text2={value} icon1={icon === true ? undefined : icon}
    iconLabel={iconLabel} onIconClick={onIconClick} iconPressedStyle={pressedStyle} iconPressHandlers={pressHandlers}
    className={className} style={{ width: "100%", ...style }} />;
}
export default CellDataRow;
