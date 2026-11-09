import { Placeholder } from './Placeholder.jsx';

// figma node: 102:567 button / small (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state);

export function ButtonSmall(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon-only", style2: _p.style2 ?? "primary", state: _p.state ?? "enabled" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-secondary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-primary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary-cta)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--vibrant-vibrant-blue-10)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-accent)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-accent)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Placeholder />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Placeholder />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--neutral-neutral-white-20)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-secondary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-primary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary-cta)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--vibrant-vibrant-blue-10)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-accent)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--neutral-neutral-white-20)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-secondary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-primary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-primary-cta)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--vibrant-vibrant-blue-10)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-accent)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Placeholder />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-accent)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Placeholder />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--neutral-neutral-white-20)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      <span className="footnote-emphasized" style={{
        position: "relative",
        whiteSpace: "nowrap",
        color: "var(--content-content-disabled)",
        flexShrink: 1,
        minWidth: 0,
        overflow: "hidden", textOverflow: "ellipsis",
      }}>{props.text1 ?? "Label"}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-secondary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-disabled)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-surface)",
      boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--background-bg-primary-cta)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--vibrant-vibrant-blue-10)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      backgroundColor: "var(--neutral-neutral-white-20)",
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-1)",
      padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Placeholder style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: type=icon-right, style=secondary, state=enabled
    "type=icon-right|style2=secondary|state=enabled": __body0,
    // figma: type=icon-right, style=secondary, state=disabled
    "type=icon-right|style2=secondary|state=disabled": __body1,
    // figma: type=icon-right, style=elevated, state=enabled
    "type=icon-right|style2=elevated|state=enabled": __body2,
    // figma: type=icon-right, style=elevated, state=disabled
    "type=icon-right|style2=elevated|state=disabled": __body3,
    // figma: type=icon-right, style=primary, state=enabled
    "type=icon-right|style2=primary|state=enabled": __body4,
    // figma: type=icon-right, style=primary, state=disabled
    "type=icon-right|style2=primary|state=disabled": __body1,
    // figma: type=icon-right, style=bezeled, state=enabled
    "type=icon-right|style2=bezeled|state=enabled": __body5,
    // figma: type=icon-right, style=ghost, state=enabled
    "type=icon-right|style2=ghost|state=enabled": __body6,
    // figma: type=icon-right, style=ghost, state=disabled
    "type=icon-right|style2=ghost|state=disabled": __body7,
    // figma: type=icon-right, style=bezeled, state=disabled
    "type=icon-right|style2=bezeled|state=disabled": __body8,
    // figma: type=label, style=secondary, state=enabled
    "type=label|style2=secondary|state=enabled": __body9,
    // figma: type=label, style=secondary, state=disabled
    "type=label|style2=secondary|state=disabled": __body10,
    // figma: type=label, style=elevated, state=enabled
    "type=label|style2=elevated|state=enabled": __body11,
    // figma: type=label, style=elevated, state=disabled
    "type=label|style2=elevated|state=disabled": __body12,
    // figma: type=label, style=primary, state=enabled
    "type=label|style2=primary|state=enabled": __body13,
    // figma: type=label, style=primary, state=disabled
    "type=label|style2=primary|state=disabled": __body10,
    // figma: type=label, style=bezeled, state=enabled
    "type=label|style2=bezeled|state=enabled": __body14,
    // figma: type=label, style=bezeled, state=disabled
    "type=label|style2=bezeled|state=disabled": __body15,
    // figma: type=icon-left, style=secondary, state=enabled
    "type=icon-left|style2=secondary|state=enabled": __body16,
    // figma: type=icon-left, style=secondary, state=disabled
    "type=icon-left|style2=secondary|state=disabled": __body17,
    // figma: type=icon-left, style=elevated, state=enabled
    "type=icon-left|style2=elevated|state=enabled": __body18,
    // figma: type=icon-left, style=elevated, state=disabled
    "type=icon-left|style2=elevated|state=disabled": __body19,
    // figma: type=icon-left, style=primary, state=enabled
    "type=icon-left|style2=primary|state=enabled": __body20,
    // figma: type=icon-left, style=primary, state=disabled
    "type=icon-left|style2=primary|state=disabled": __body17,
    // figma: type=icon-left, style=bezeled, state=enabled
    "type=icon-left|style2=bezeled|state=enabled": __body21,
    // figma: type=icon-left, style=ghost, state=enabled
    "type=icon-left|style2=ghost|state=enabled": __body22,
    // figma: type=icon-left, style=ghost, state=disabled
    "type=icon-left|style2=ghost|state=disabled": __body23,
    // figma: type=icon-left, style=bezeled, state=disabled
    "type=icon-left|style2=bezeled|state=disabled": __body24,
    // figma: type=icon-only, style=secondary, state=enabled
    "type=icon-only|style2=secondary|state=enabled": __body25,
    // figma: type=icon-only, style=secondary, state=disabled
    "type=icon-only|style2=secondary|state=disabled": __body26,
    // figma: type=icon-only, style=elevated, state=enabled
    "type=icon-only|style2=elevated|state=enabled": __body27,
    // figma: type=icon-only, style=elevated, state=disabled
    "type=icon-only|style2=elevated|state=disabled": __body27,
    // figma: type=icon-only, style=primary, state=enabled
    "type=icon-only|style2=primary|state=enabled": __body28,
    // figma: type=icon-only, style=primary, state=disabled
    "type=icon-only|style2=primary|state=disabled": __body26,
    // figma: type=icon-only, style=bezeled, state=enabled
    "type=icon-only|style2=bezeled|state=enabled": __body29,
    // figma: type=icon-only, style=bezeled, state=disabled
    "type=icon-only|style2=bezeled|state=disabled": __body30,
  };
  return (__impls[__vkey(props)] ?? __body28)();
}
export default ButtonSmall;
