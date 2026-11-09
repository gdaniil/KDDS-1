import { KdSearchField } from '../internal/KdSearchField.jsx';
import { SegmentedControl } from './SegmentedControl.jsx';
import { StatusBarIPhone } from '../internal/StatusBarIPhone.jsx';
import { NavbarSlot, resolveNavbarSlot } from '../internal/NavbarSlot.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';

// figma node: 355:1350 navbar / enhanced (2 variants)
// Figma 355:1349 / 355:1351: bottom border only. The title stays centred and stops 48px short of each edge
// (16 + 24px slot + 8), ending with «…» when longer; the trailing slot keeps Figma's 15px right inset (left 336 in 375) at any width.
// Not in Figma (proposed): a slot with an action is a 44×44 button centred on its 24px glyph (internal/NavbarSlot.jsx).
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

function __FigmaNavbarEnhanced(_p = {}) {
  const props = { ..._p, type: _p.type ?? "search" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--background-bg-surface)",
      borderBottom: "1px solid var(--border-border-regular)",
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
        mode={"light"}
        background={false}
      />
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--content-content-primary)",
      }}>
        <div style={{
            position: "absolute",
            left: "var(--space-4)",
            top: 10,
            width: 24,
            height: 24,
          }}><NavbarSlot slot={props.leftSlot} /></div>
        <span className="headline" style={{
          position: "absolute",
          left: "50%",
          top: 11,
          transform: "translateX(-50%)",
          height: 22,
          maxWidth: "calc(100% - 96px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
          color: "var(--content-content-primary)",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "absolute",
            right: 15,
            top: 10,
            width: 24,
            height: 24,
          }}><NavbarSlot slot={props.rightSlot} /></div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "1px var(--space-4) 15px var(--space-4)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <KdSearchField
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          {...props.search}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--background-bg-surface)",
      borderBottom: "1px solid var(--border-border-regular)",
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
        mode={"light"}
        background={false}
      />
      <div style={{
        position: "relative",
        height: 44,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--content-content-primary)",
      }}>
        <div style={{
            position: "absolute",
            left: "var(--space-4)",
            top: 10,
            width: 24,
            height: 24,
          }}><NavbarSlot slot={props.leftSlot} /></div>
        <span className="headline" style={{
          position: "absolute",
          left: "50%",
          top: 11,
          transform: "translateX(-50%)",
          height: 22,
          maxWidth: "calc(100% - 96px)",
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden", textOverflow: "ellipsis",
          color: "var(--content-content-primary)",
        }}>{props.text1 ?? "Title"}</span>
        <div style={{
            position: "absolute",
            right: 15,
            top: 10,
            width: 24,
            height: 24,
          }}><NavbarSlot slot={props.rightSlot} /></div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "2px var(--space-4) var(--space-3) var(--space-4)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SegmentedControl
          style={{
            position: "relative",
            height: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          options={props.tabs}
          value={props.selectedTab}
          onChange={props.onTabChange}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: type=search
    "type=search": __body0,
    // figma: type=tabs
    "type=tabs": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}

// Slots: leadingAction, else onClose (Ic2Close, «Закрити»), else onBack (Ic2ArrowLeft, «Назад»), else the legacy leadingIcon node;
// trailingAction, else the legacy trailingIcon node. Both slots are empty by default.
export function NavbarEnhanced({ type = "search", title = "Title", onBack, onClose, leadingAction, trailingAction, leadingIcon = false, trailingIcon = false,
  tabs = ["Label", "Label"], selectedTab = 0, onTabChange,
  searchValue, defaultSearchValue, onSearchChange, onSearchSubmit, onSearchClear, searchPlaceholder = "Пошук", searchAutoFocus, className, style }) {
  ensureKdStyles();
  const leftSlot = resolveNavbarSlot({ action: leadingAction, onClose, onBack, icon: leadingIcon });
  const rightSlot = resolveNavbarSlot({ action: trailingAction, icon: trailingIcon });
  const search = { value: searchValue, defaultValue: defaultSearchValue, onChange: onSearchChange, onSubmit: onSearchSubmit, onClear: onSearchClear,
    placeholder: searchPlaceholder, autoFocus: searchAutoFocus };
  return <__FigmaNavbarEnhanced type={type} text1={title} leftSlot={leftSlot} rightSlot={rightSlot} tabs={tabs} selectedTab={selectedTab} onTabChange={onTabChange} search={search} className={className} style={{ width: "100%", ...style }} />;
}
export default NavbarEnhanced;
