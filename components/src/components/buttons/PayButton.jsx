import { ButtonRegular } from '../internal/ButtonRegular.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

const PAY_STYLE = { apple: "apple-pay", google: "g-pay / light", "google-dark": "g-pay / dark", diia: "diia" };
const PAY_LABEL = { apple: "Apple Pay", google: "Google Pay", "google-dark": "Google Pay", diia: "Дія" };
export function PayButton({ provider = "apple", label = "Оплатити", fullWidth = false, onClick, className, style, "aria-label": ariaLabel }) {
  ensureKdStyles();
  const [pressedStyle, pressHandlers] = usePressed(true);
  const fill = { maxWidth: "100%", minWidth: 0, ...(fullWidth ? { width: "100%", boxSizing: "border-box" } : null) };
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel ?? PAY_LABEL[provider]} className={["kd-control", className].filter(Boolean).join(" ")} {...pressHandlers}
      style={{ all: "unset", display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined, maxWidth: "100%", borderRadius: "var(--radius-control)", cursor: "pointer", ...pressedStyle, ...style }}>
      <ButtonRegular type="pay" style2={PAY_STYLE[provider] ?? "apple-pay"} state="enabled" text1={label} style={fill} />
    </button>
  );
}
export default PayButton;
