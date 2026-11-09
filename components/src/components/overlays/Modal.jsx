import { Button } from '../buttons/Button.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';
import { LiquidGlassRegularSmall } from '../internal/LiquidGlassRegularSmall.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// figma node: 4055:1397 modal (2 variants: close button=false 4055:697 / close button=true 4055:1398) + 4055:628 backdrop.
// Page "Overlay", section "overlay components"; examples in section 4055:2198 (parking, reader - 1button, radiation - fullscreen).
// Sheet: background-bg-surface, radius 20 (radius-card) on all four corners, padding 8 16 0 (the 16 sides on the slot/close row), column centred.
//   Gap between parts: 24 without the close button, 12 with it (Figma's two variants differ).
// Grabber 4055:561: 36×5, radius 2.5, background-bg-disabled.
// Close (Toolbar - Top - iPhone, 4055:1403): 44×44 Liquid Glass circle at the left, SF Symbol xmark → Ic2Close 24.
// Slot 4055:696: column, gap 12 (examples). Content header: illustration, gap 16, then title + text with gap 8, 12 below.
//   Title: Title3/Emphasized 20/25 590 -0.4, content-primary. Text: Subheadline/Regular 15/20 400 -0.4, content-secondary.
// Home Indicator 4055:621: a 21px zone at the bottom; here max(21px, safe-area-inset-bottom). The black bar is device chrome.
// Backdrop 4055:626: rgba(0,0,0,0.5) with a 2.718px backdrop blur — no token, same in both themes.
// Full-height example 4055:1653 starts 62px below the top of an 812 screen; used for size="full" and as the max height.
// Title = title3-emphasized, description = subheadline (classes from tokens.css).
const MODAL_TITLE = { margin: 0, color: "var(--content-content-primary)" };
const MODAL_TEXT = { margin: 0, color: "var(--content-content-secondary)" };
const MODAL_TOP_INSET = 62;
const FOCUSABLE = 'a[href],area[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),iframe,[contenteditable="true"],[tabindex]:not([tabindex="-1"])';

function focusablesIn(node) {
  if (!node) return [];
  return Array.prototype.filter.call(node.querySelectorAll(FOCUSABLE), (el) => el.getClientRects().length > 0 && !el.closest("[inert]"));
}

function ModalBackdrop({ onClick }) {
  return (
    <div aria-hidden="true" data-kd-modal-backdrop="" onClick={onClick} style={{
      position: "absolute", left: 0, top: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(2.718px)", WebkitBackdropFilter: "blur(2.718px)",
    }} />
  );
}

function ModalCloseButton({ label, onClick }) {
  const [pressedStyle, pressHandlers] = usePressed(true);
  return (
    <button type="button" aria-label={label} onClick={onClick} className="kd-control" data-kd-modal-close="" {...pressHandlers}
      style={{ all: "unset", position: "relative", width: 44, height: 44, borderRadius: "var(--radius-pill)", flexShrink: 0, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--content-content-primary)", ...pressedStyle }}>
      <LiquidGlassRegularSmall className="kd-glass-light" style={{ position: "absolute", left: 0, top: 0, width: 44, height: 44 }} mode={"light"} state={"default"} />
      <LiquidGlassRegularSmall className="kd-glass-dark" style={{ position: "absolute", left: 0, top: 0, width: 44, height: 44 }} mode={"dark"} state={"default"} />
      <Icon name="Ic2Close" size={24} aria-hidden="true" style={{ position: "relative", display: "block", flexShrink: 0 }} />
    </button>
  );
}

// Buttons passed as actions stretch to the sheet width unless they set fullWidth themselves.
function stretchActions(actions) {
  return React.Children.toArray(actions).map((node) =>
    React.isValidElement(node) && node.type === Button && node.props.fullWidth === undefined
      ? React.cloneElement(node, { fullWidth: true }) : node);
}

export function Modal({ open = true, onClose, title, description, illustration, children, actions, showClose = false,
  closeLabel = "Закрити", dismissible = true, alert = false, size = "auto", inline = false, className, style,
  "aria-label": ariaLabel }) {
  ensureKdStyles();
  const sheetRef = React.useRef(null);
  const latest = React.useRef({ onClose, dismissible });
  latest.current = { onClose, dismissible };
  const baseId = React.useId();
  const titleId = baseId + "-title";
  const descId = baseId + "-desc";

  // Live behaviour: focus in on open, trap Tab, Escape closes, focus back to the opener on close, page scroll locked.
  React.useEffect(() => {
    if (!open || inline || typeof document === "undefined") return undefined;
    const node = sheetRef.current;
    const opener = document.activeElement;
    if (node) node.focus({ preventScroll: true });
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        if (latest.current.dismissible && latest.current.onClose) { e.preventDefault(); e.stopPropagation(); latest.current.onClose("escape"); }
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = focusablesIn(node);
      const active = document.activeElement;
      if (!items.length) { e.preventDefault(); node.focus({ preventScroll: true }); return; }
      const first = items[0];
      const last = items[items.length - 1];
      if (!node.contains(active)) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
      else if (e.shiftKey && (active === first || active === node)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    };
    const onFocusIn = (e) => {
      if (node && !node.contains(e.target)) { const items = focusablesIn(node); (items[0] || node).focus({ preventScroll: true }); }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      body.style.overflow = prevOverflow;
      if (opener && typeof opener.focus === "function" && document.contains(opener)) opener.focus({ preventScroll: true });
    };
  }, [open, inline]);

  if (!open) return null;

  const close = (reason) => { if (onClose) onClose(reason); };
  const hasHeader = illustration != null || title != null || description != null;
  const gap = showClose ? "var(--space-3)" : "var(--space-5)";
  const full = size === "full";
  const actionNodes = actions != null ? stretchActions(actions) : null;

  return (
    <div data-kd-modal="" style={{
      position: inline ? "absolute" : "fixed", left: 0, top: 0, right: 0, bottom: 0, zIndex: inline ? undefined : 1000,
      display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "stretch", overflow: "hidden",
    }}>
      <ModalBackdrop onClick={dismissible ? () => close("backdrop") : undefined} />
      <div ref={sheetRef} role={alert ? "alertdialog" : "dialog"} aria-modal={inline ? undefined : "true"}
        aria-labelledby={title != null ? titleId : undefined} aria-label={title != null ? undefined : ariaLabel}
        aria-describedby={description != null ? descId : undefined} tabIndex={-1} className={className}
        style={{
          position: "relative", boxSizing: "border-box", width: "100%",
          height: full ? `calc(100% - ${MODAL_TOP_INSET}px)` : undefined, maxHeight: `calc(100% - ${MODAL_TOP_INSET}px)`,
          display: "flex", flexDirection: "column", alignItems: "center", gap, padding: "var(--space-2) 0 0 0",
          backgroundColor: "var(--background-bg-surface)", borderRadius: "var(--radius-card)", outline: "none",
          color: "var(--content-content-primary)", fontFamily: "var(--font-sf)", ...style,
        }}>
        <div aria-hidden="true" data-kd-modal-grabber="" style={{ width: 36, height: 5, borderRadius: 2.5, flexShrink: 0,
          backgroundColor: "var(--background-bg-disabled)" }} />
        {showClose && (
          <div style={{ alignSelf: "stretch", display: "flex", alignItems: "flex-start", gap: 10, padding: "0 var(--space-4)", flexShrink: 0 }}>
            <ModalCloseButton label={closeLabel} onClick={() => close("close")} />
          </div>
        )}
        {/* Figma's 16px side padding sits on the slot, not the sheet, so a full-bleed row (margin 0 -16px) reaches the sheet
            edge without a horizontal scroll. The slot scrolls when content is taller than the sheet; 4px extra top/bottom
            padding (cancelled by a -4px margin) keeps the 2px focus ring of the first and last button from being clipped. */}
        <div data-kd-modal-slot="" style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "stretch", gap: "var(--space-3)",
          flex: full ? "1 1 auto" : "0 1 auto", minHeight: 0, overflowY: "auto", padding: "4px var(--space-4)", margin: "-4px 0" }}>
          {hasHeader && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-4)", paddingBottom: "var(--space-3)", flexShrink: 0 }}>
              {illustration != null && <div aria-hidden="true" style={{ display: "flex", flexShrink: 0 }}>{illustration}</div>}
              {(title != null || description != null) && (
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {title != null && <h2 id={titleId} className="title3-emphasized" style={MODAL_TITLE}>{title}</h2>}
                  {description != null && <p id={descId} className="subheadline" style={MODAL_TEXT}>{description}</p>}
                </div>
              )}
            </div>
          )}
          {children}
          {actionNodes && actionNodes.length > 0 && (
            <div data-kd-modal-actions="" style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: "var(--space-3)", flexShrink: 0 }}>{actionNodes}</div>
          )}
        </div>
        <div aria-hidden="true" style={{ alignSelf: "stretch", flexShrink: 0, height: "max(21px, env(safe-area-inset-bottom, 0px))" }} />
      </div>
    </div>
  );
}
export default Modal;
