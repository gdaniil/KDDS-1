import { ensureKdStyles } from '../internal/runtime.jsx';
import { useFieldValue } from '../internal/runtime.jsx';
// figma node: 1703:1058 search (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

function __FigmaSearch(_p = {}) {
  const props = { ..._p, state: _p.state ?? "empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-1) var(--space-4) var(--space-1) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--neutral-neutral-white-80)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-2)",
        padding: "var(--space-3) var(--space-3) var(--space-3) var(--space-3)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 14,
            height: 14,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0 7 L 1 7 L 1 7 L 0 7 Z M 14 7 L 13 7 L 13 7 L 14 7 Z M 7 0 L 7 -1 L 7 0 Z M 0 7 L -1 7 C -1 8.051 -0.793 9.091 -0.391 10.061 L 0.533 9.679 L 1.457 9.296 C 1.155 8.568 1 7.788 1 7 L 0 7 Z M 0.533 9.679 L -0.391 10.061 C 0.011 11.032 0.6 11.914 1.343 12.657 L 2.05 11.95 L 2.757 11.243 C 2.2 10.685 1.758 10.024 1.457 9.296 L 0.533 9.679 Z M 2.05 11.95 L 1.343 12.657 C 2.086 13.4 2.968 13.989 3.939 14.391 L 4.321 13.467 L 4.704 12.543 C 3.976 12.242 3.315 11.8 2.757 11.243 L 2.05 11.95 Z M 4.321 13.467 L 3.939 14.391 C 4.909 14.793 5.949 15 7 15 L 7 14 L 7 13 C 6.212 13 5.432 12.845 4.704 12.543 L 4.321 13.467 Z M 7 14 L 7 15 C 8.051 15 9.091 14.793 10.061 14.391 L 9.679 13.467 L 9.296 12.543 C 8.568 12.845 7.788 13 7 13 L 7 14 Z M 9.679 13.467 L 10.061 14.391 C 11.032 13.989 11.914 13.4 12.657 12.657 L 11.95 11.95 L 11.243 11.243 C 10.685 11.8 10.024 12.242 9.296 12.543 L 9.679 13.467 Z M 11.95 11.95 L 12.657 12.657 C 13.4 11.914 13.989 11.032 14.391 10.061 L 13.467 9.679 L 12.543 9.296 C 12.242 10.024 11.8 10.685 11.243 11.243 L 11.95 11.95 Z M 13.467 9.679 L 14.391 10.061 C 14.793 9.091 15 8.051 15 7 L 14 7 L 13 7 C 13 7.788 12.845 8.568 12.543 9.296 L 13.467 9.679 Z M 14 7 L 15 7 C 15 5.949 14.793 4.909 14.391 3.939 L 13.467 4.321 L 12.543 4.704 C 12.845 5.432 13 6.212 13 7 L 14 7 Z M 13.467 4.321 L 14.391 3.939 C 13.989 2.968 13.4 2.086 12.657 1.343 L 11.95 2.05 L 11.243 2.757 C 11.8 3.315 12.242 3.976 12.543 4.704 L 13.467 4.321 Z M 11.95 2.05 L 12.657 1.343 C 11.914 0.6 11.032 0.011 10.061 -0.391 L 9.679 0.533 L 9.296 1.457 C 10.024 1.758 10.685 2.2 11.243 2.757 L 11.95 2.05 Z M 9.679 0.533 L 10.061 -0.391 C 9.091 -0.793 8.051 -1 7 -1 L 7 0 L 7 1 C 7.788 1 8.568 1.155 9.296 1.457 L 9.679 0.533 Z M 7 0 L 7 -1 C 5.949 -1 4.909 -0.793 3.939 -0.391 L 4.321 0.533 L 4.704 1.457 C 5.432 1.155 6.212 1 7 1 L 7 0 Z M 4.321 0.533 L 3.939 -0.391 C 2.968 0.011 2.086 0.6 1.343 1.343 L 2.05 2.05 L 2.757 2.757 C 3.315 2.2 3.976 1.758 4.704 1.457 L 4.321 0.533 Z M 2.05 2.05 L 1.343 1.343 C 0.6 2.086 0.011 2.968 -0.391 3.939 L 0.533 4.321 L 1.457 4.704 C 1.758 3.976 2.2 3.315 2.757 2.757 L 2.05 2.05 Z M 0.533 4.321 L -0.391 3.939 C -0.793 4.909 -1 5.949 -1 7 L 0 7 L 1 7 C 1 6.212 1.155 5.432 1.457 4.704 L 0.533 4.321 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
            position: "absolute",
            left: 15,
            top: 15,
            width: 6,
            height: 6,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <input className="kd-input kd-search callout" {...props.input} style={{
          position: "relative",
          color: "var(--neutral-neutral-gray100)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        <button type="button" className="kd-control" aria-label="Очистити" onMouseDown={(e) => e.preventDefault()} onClick={props.onClear} style={{ all: "unset", cursor: "pointer", borderRadius: "var(--radius-pill)",
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 12,
            height: 12,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 12.707 0.707 C 13.098 0.317 13.098 -0.317 12.707 -0.707 C 12.317 -1.098 11.683 -1.098 11.293 -0.707 L 12 0 L 12.707 0.707 Z M -0.707 11.293 C -1.098 11.683 -1.098 12.317 -0.707 12.707 C -0.317 13.098 0.317 13.098 0.707 12.707 L 0 12 L -0.707 11.293 Z M 12 0 L 11.293 -0.707 L -0.707 11.293 L 0 12 L 0.707 12.707 L 12.707 0.707 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 12,
            height: 12,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 11.293 12.707 C 11.683 13.098 12.317 13.098 12.707 12.707 C 13.098 12.317 13.098 11.683 12.707 11.293 L 12 12 L 11.293 12.707 Z M 0 0 L -0.707 0.707 L 11.293 12.707 L 12 12 L 12.707 11.293 L 0.707 -0.707 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </button>
      </div>
      <button type="button" className="kd-control" onMouseDown={(e) => e.preventDefault()} onClick={props.onCancel} style={{
        all: "unset",
        cursor: "pointer",
        position: "relative",
        padding: "13px 0",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span className="footnote-emphasized" style={{
          position: "relative",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary-cta)",
          flexShrink: 0,
        }}>Закрити</span>
      </button>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-1) var(--space-4) var(--space-1) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--neutral-neutral-white)",
        boxShadow: "0 0 0 2px rgba(255,255,255,0.48)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-2)",
        padding: "var(--space-3) var(--space-3) var(--space-3) var(--space-3)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 14,
            height: 14,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0 7 L 1 7 L 1 7 L 0 7 Z M 14 7 L 13 7 L 13 7 L 14 7 Z M 7 0 L 7 -1 L 7 0 Z M 0 7 L -1 7 C -1 8.051 -0.793 9.091 -0.391 10.061 L 0.533 9.679 L 1.457 9.296 C 1.155 8.568 1 7.788 1 7 L 0 7 Z M 0.533 9.679 L -0.391 10.061 C 0.011 11.032 0.6 11.914 1.343 12.657 L 2.05 11.95 L 2.757 11.243 C 2.2 10.685 1.758 10.024 1.457 9.296 L 0.533 9.679 Z M 2.05 11.95 L 1.343 12.657 C 2.086 13.4 2.968 13.989 3.939 14.391 L 4.321 13.467 L 4.704 12.543 C 3.976 12.242 3.315 11.8 2.757 11.243 L 2.05 11.95 Z M 4.321 13.467 L 3.939 14.391 C 4.909 14.793 5.949 15 7 15 L 7 14 L 7 13 C 6.212 13 5.432 12.845 4.704 12.543 L 4.321 13.467 Z M 7 14 L 7 15 C 8.051 15 9.091 14.793 10.061 14.391 L 9.679 13.467 L 9.296 12.543 C 8.568 12.845 7.788 13 7 13 L 7 14 Z M 9.679 13.467 L 10.061 14.391 C 11.032 13.989 11.914 13.4 12.657 12.657 L 11.95 11.95 L 11.243 11.243 C 10.685 11.8 10.024 12.242 9.296 12.543 L 9.679 13.467 Z M 11.95 11.95 L 12.657 12.657 C 13.4 11.914 13.989 11.032 14.391 10.061 L 13.467 9.679 L 12.543 9.296 C 12.242 10.024 11.8 10.685 11.243 11.243 L 11.95 11.95 Z M 13.467 9.679 L 14.391 10.061 C 14.793 9.091 15 8.051 15 7 L 14 7 L 13 7 C 13 7.788 12.845 8.568 12.543 9.296 L 13.467 9.679 Z M 14 7 L 15 7 C 15 5.949 14.793 4.909 14.391 3.939 L 13.467 4.321 L 12.543 4.704 C 12.845 5.432 13 6.212 13 7 L 14 7 Z M 13.467 4.321 L 14.391 3.939 C 13.989 2.968 13.4 2.086 12.657 1.343 L 11.95 2.05 L 11.243 2.757 C 11.8 3.315 12.242 3.976 12.543 4.704 L 13.467 4.321 Z M 11.95 2.05 L 12.657 1.343 C 11.914 0.6 11.032 0.011 10.061 -0.391 L 9.679 0.533 L 9.296 1.457 C 10.024 1.758 10.685 2.2 11.243 2.757 L 11.95 2.05 Z M 9.679 0.533 L 10.061 -0.391 C 9.091 -0.793 8.051 -1 7 -1 L 7 0 L 7 1 C 7.788 1 8.568 1.155 9.296 1.457 L 9.679 0.533 Z M 7 0 L 7 -1 C 5.949 -1 4.909 -0.793 3.939 -0.391 L 4.321 0.533 L 4.704 1.457 C 5.432 1.155 6.212 1 7 1 L 7 0 Z M 4.321 0.533 L 3.939 -0.391 C 2.968 0.011 2.086 0.6 1.343 1.343 L 2.05 2.05 L 2.757 2.757 C 3.315 2.2 3.976 1.758 4.704 1.457 L 4.321 0.533 Z M 2.05 2.05 L 1.343 1.343 C 0.6 2.086 0.011 2.968 -0.391 3.939 L 0.533 4.321 L 1.457 4.704 C 1.758 3.976 2.2 3.315 2.757 2.757 L 2.05 2.05 Z M 0.533 4.321 L -0.391 3.939 C -0.793 4.909 -1 5.949 -1 7 L 0 7 L 1 7 C 1 6.212 1.155 5.432 1.457 4.704 L 0.533 4.321 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
            position: "absolute",
            left: 15,
            top: 15,
            width: 6,
            height: 6,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <input className="kd-input kd-search callout" {...props.input} style={{
          position: "relative",
          color: "var(--neutral-neutral-gray100)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
      </div>
      <button type="button" className="kd-control" onMouseDown={(e) => e.preventDefault()} onClick={props.onCancel} style={{
        all: "unset",
        cursor: "pointer",
        position: "relative",
        padding: "13px 0",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span className="footnote-emphasized" style={{
          position: "relative",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary-cta)",
          flexShrink: 0,
        }}>Закрити</span>
      </button>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-1) var(--space-4) var(--space-1) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--neutral-neutral-white-80)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-2)",
        padding: "var(--space-3) var(--space-3) var(--space-3) var(--space-3)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 14,
            height: 14,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0 7 L 1 7 L 1 7 L 0 7 Z M 14 7 L 13 7 L 13 7 L 14 7 Z M 7 0 L 7 -1 L 7 0 Z M 0 7 L -1 7 C -1 8.051 -0.793 9.091 -0.391 10.061 L 0.533 9.679 L 1.457 9.296 C 1.155 8.568 1 7.788 1 7 L 0 7 Z M 0.533 9.679 L -0.391 10.061 C 0.011 11.032 0.6 11.914 1.343 12.657 L 2.05 11.95 L 2.757 11.243 C 2.2 10.685 1.758 10.024 1.457 9.296 L 0.533 9.679 Z M 2.05 11.95 L 1.343 12.657 C 2.086 13.4 2.968 13.989 3.939 14.391 L 4.321 13.467 L 4.704 12.543 C 3.976 12.242 3.315 11.8 2.757 11.243 L 2.05 11.95 Z M 4.321 13.467 L 3.939 14.391 C 4.909 14.793 5.949 15 7 15 L 7 14 L 7 13 C 6.212 13 5.432 12.845 4.704 12.543 L 4.321 13.467 Z M 7 14 L 7 15 C 8.051 15 9.091 14.793 10.061 14.391 L 9.679 13.467 L 9.296 12.543 C 8.568 12.845 7.788 13 7 13 L 7 14 Z M 9.679 13.467 L 10.061 14.391 C 11.032 13.989 11.914 13.4 12.657 12.657 L 11.95 11.95 L 11.243 11.243 C 10.685 11.8 10.024 12.242 9.296 12.543 L 9.679 13.467 Z M 11.95 11.95 L 12.657 12.657 C 13.4 11.914 13.989 11.032 14.391 10.061 L 13.467 9.679 L 12.543 9.296 C 12.242 10.024 11.8 10.685 11.243 11.243 L 11.95 11.95 Z M 13.467 9.679 L 14.391 10.061 C 14.793 9.091 15 8.051 15 7 L 14 7 L 13 7 C 13 7.788 12.845 8.568 12.543 9.296 L 13.467 9.679 Z M 14 7 L 15 7 C 15 5.949 14.793 4.909 14.391 3.939 L 13.467 4.321 L 12.543 4.704 C 12.845 5.432 13 6.212 13 7 L 14 7 Z M 13.467 4.321 L 14.391 3.939 C 13.989 2.968 13.4 2.086 12.657 1.343 L 11.95 2.05 L 11.243 2.757 C 11.8 3.315 12.242 3.976 12.543 4.704 L 13.467 4.321 Z M 11.95 2.05 L 12.657 1.343 C 11.914 0.6 11.032 0.011 10.061 -0.391 L 9.679 0.533 L 9.296 1.457 C 10.024 1.758 10.685 2.2 11.243 2.757 L 11.95 2.05 Z M 9.679 0.533 L 10.061 -0.391 C 9.091 -0.793 8.051 -1 7 -1 L 7 0 L 7 1 C 7.788 1 8.568 1.155 9.296 1.457 L 9.679 0.533 Z M 7 0 L 7 -1 C 5.949 -1 4.909 -0.793 3.939 -0.391 L 4.321 0.533 L 4.704 1.457 C 5.432 1.155 6.212 1 7 1 L 7 0 Z M 4.321 0.533 L 3.939 -0.391 C 2.968 0.011 2.086 0.6 1.343 1.343 L 2.05 2.05 L 2.757 2.757 C 3.315 2.2 3.976 1.758 4.704 1.457 L 4.321 0.533 Z M 2.05 2.05 L 1.343 1.343 C 0.6 2.086 0.011 2.968 -0.391 3.939 L 0.533 4.321 L 1.457 4.704 C 1.758 3.976 2.2 3.315 2.757 2.757 L 2.05 2.05 Z M 0.533 4.321 L -0.391 3.939 C -0.793 4.909 -1 5.949 -1 7 L 0 7 L 1 7 C 1 6.212 1.155 5.432 1.457 4.704 L 0.533 4.321 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
            position: "absolute",
            left: 15,
            top: 15,
            width: 6,
            height: 6,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <input className="kd-input kd-search callout" {...props.input} style={{
          position: "relative",
          color: "var(--neutral-neutral-gray100)",
          flexGrow: 1, border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
      </div>
      <button type="button" className="kd-control" onMouseDown={(e) => e.preventDefault()} onClick={props.onCancel} style={{
        all: "unset",
        cursor: "pointer",
        position: "relative",
        padding: "13px 0",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span className="footnote-emphasized" style={{
          position: "relative",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary-cta)",
          flexShrink: 0,
        }}>Закрити</span>
      </button>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: "var(--space-3)",
      padding: "var(--space-1) var(--space-4) var(--space-1) var(--space-4)",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-pill)",
        backgroundColor: "var(--neutral-neutral-white)",
        boxShadow: "0 0 0 2px rgba(255,255,255,0.48)",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-2)",
        padding: "var(--space-3) var(--space-3) var(--space-3) var(--space-3)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 3,
            width: 14,
            height: 14,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0 7 L 1 7 L 1 7 L 0 7 Z M 14 7 L 13 7 L 13 7 L 14 7 Z M 7 0 L 7 -1 L 7 0 Z M 0 7 L -1 7 C -1 8.051 -0.793 9.091 -0.391 10.061 L 0.533 9.679 L 1.457 9.296 C 1.155 8.568 1 7.788 1 7 L 0 7 Z M 0.533 9.679 L -0.391 10.061 C 0.011 11.032 0.6 11.914 1.343 12.657 L 2.05 11.95 L 2.757 11.243 C 2.2 10.685 1.758 10.024 1.457 9.296 L 0.533 9.679 Z M 2.05 11.95 L 1.343 12.657 C 2.086 13.4 2.968 13.989 3.939 14.391 L 4.321 13.467 L 4.704 12.543 C 3.976 12.242 3.315 11.8 2.757 11.243 L 2.05 11.95 Z M 4.321 13.467 L 3.939 14.391 C 4.909 14.793 5.949 15 7 15 L 7 14 L 7 13 C 6.212 13 5.432 12.845 4.704 12.543 L 4.321 13.467 Z M 7 14 L 7 15 C 8.051 15 9.091 14.793 10.061 14.391 L 9.679 13.467 L 9.296 12.543 C 8.568 12.845 7.788 13 7 13 L 7 14 Z M 9.679 13.467 L 10.061 14.391 C 11.032 13.989 11.914 13.4 12.657 12.657 L 11.95 11.95 L 11.243 11.243 C 10.685 11.8 10.024 12.242 9.296 12.543 L 9.679 13.467 Z M 11.95 11.95 L 12.657 12.657 C 13.4 11.914 13.989 11.032 14.391 10.061 L 13.467 9.679 L 12.543 9.296 C 12.242 10.024 11.8 10.685 11.243 11.243 L 11.95 11.95 Z M 13.467 9.679 L 14.391 10.061 C 14.793 9.091 15 8.051 15 7 L 14 7 L 13 7 C 13 7.788 12.845 8.568 12.543 9.296 L 13.467 9.679 Z M 14 7 L 15 7 C 15 5.949 14.793 4.909 14.391 3.939 L 13.467 4.321 L 12.543 4.704 C 12.845 5.432 13 6.212 13 7 L 14 7 Z M 13.467 4.321 L 14.391 3.939 C 13.989 2.968 13.4 2.086 12.657 1.343 L 11.95 2.05 L 11.243 2.757 C 11.8 3.315 12.242 3.976 12.543 4.704 L 13.467 4.321 Z M 11.95 2.05 L 12.657 1.343 C 11.914 0.6 11.032 0.011 10.061 -0.391 L 9.679 0.533 L 9.296 1.457 C 10.024 1.758 10.685 2.2 11.243 2.757 L 11.95 2.05 Z M 9.679 0.533 L 10.061 -0.391 C 9.091 -0.793 8.051 -1 7 -1 L 7 0 L 7 1 C 7.788 1 8.568 1.155 9.296 1.457 L 9.679 0.533 Z M 7 0 L 7 -1 C 5.949 -1 4.909 -0.793 3.939 -0.391 L 4.321 0.533 L 4.704 1.457 C 5.432 1.155 6.212 1 7 1 L 7 0 Z M 4.321 0.533 L 3.939 -0.391 C 2.968 0.011 2.086 0.6 1.343 1.343 L 2.05 2.05 L 2.757 2.757 C 3.315 2.2 3.976 1.758 4.704 1.457 L 4.321 0.533 Z M 2.05 2.05 L 1.343 1.343 C 0.6 2.086 0.011 2.968 -0.391 3.939 L 0.533 4.321 L 1.457 4.704 C 1.758 3.976 2.2 3.315 2.757 2.757 L 2.05 2.05 Z M 0.533 4.321 L -0.391 3.939 C -0.793 4.909 -1 5.949 -1 7 L 0 7 L 1 7 C 1 6.212 1.155 5.432 1.457 4.704 L 0.533 4.321 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
            position: "absolute",
            left: 15,
            top: 15,
            width: 6,
            height: 6,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 5.293 6.707 C 5.683 7.098 6.317 7.098 6.707 6.707 C 7.098 6.317 7.098 5.683 6.707 5.293 L 6 6 L 5.293 6.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6 6 L 6.707 5.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 5.293 6.707 L 6 6 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <input className="kd-input kd-search callout" {...props.input} style={{
          position: "relative",
          color: "var(--neutral-neutral-gray100)",
          flexGrow: 1,
          whiteSpace: "pre-wrap", border: 0, margin: 0, padding: 0, outline: "none", background: "transparent", minWidth: 0, width: "100%", caretColor: "var(--content-content-accent)" }} />
        <button type="button" className="kd-control" aria-label="Очистити" onMouseDown={(e) => e.preventDefault()} onClick={props.onClear} style={{ all: "unset", cursor: "pointer", borderRadius: "var(--radius-pill)",
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 12,
            height: 12,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 12.707 0.707 C 13.098 0.317 13.098 -0.317 12.707 -0.707 C 12.317 -1.098 11.683 -1.098 11.293 -0.707 L 12 0 L 12.707 0.707 Z M -0.707 11.293 C -1.098 11.683 -1.098 12.317 -0.707 12.707 C -0.317 13.098 0.317 13.098 0.707 12.707 L 0 12 L -0.707 11.293 Z M 12 0 L 11.293 -0.707 L -0.707 11.293 L 0 12 L 0.707 12.707 L 12.707 0.707 L 12 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 12,
            height: 12,
            color: "var(--neutral-neutral-gray100)",
          }}>
            <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 11.293 12.707 C 11.683 13.098 12.317 13.098 12.707 12.707 C 13.098 12.317 13.098 11.683 12.707 11.293 L 12 12 L 11.293 12.707 Z M 0 0 L -0.707 0.707 L 11.293 12.707 L 12 12 L 12.707 11.293 L 0.707 -0.707 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </button>
      </div>
      <button type="button" className="kd-control" onMouseDown={(e) => e.preventDefault()} onClick={props.onCancel} style={{
        all: "unset",
        cursor: "pointer",
        position: "relative",
        padding: "13px 0",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-1)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span className="footnote-emphasized" style={{
          position: "relative",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary-cta)",
          flexShrink: 0,
        }}>Закрити</span>
      </button>
    </div>
  );
  const __impls = {
    // figma: State=filled
    "state=filled": __body0,
    // figma: State=empty-typing
    "state=empty-typing": __body1,
    // figma: State=empty
    "state=empty": __body2,
    // figma: State=filled-typing
    "state=filled-typing": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}

export function Search({ value, defaultValue, placeholder = "Пошук", focused: focusedProp, onChange, onSubmit, onClear, onCancel, onFocus, onBlur,
  autoFocus, "aria-label": ariaLabel = "Пошук", className, style }) {
  ensureKdStyles();
  const [v, setV] = useFieldValue(value, defaultValue, onChange);
  const [hasFocus, setHasFocus] = React.useState(false);
  const focused = focusedProp ?? hasFocus;
  const state = v ? (focused ? "filled-typing" : "filled") : (focused ? "empty-typing" : "empty");
  const input = { type: "search", value: v, placeholder, autoFocus, enterKeyHint: "search", "aria-label": ariaLabel,
    onChange: (e) => setV(e.target.value, e),
    onKeyDown: (e) => { if (e.key === "Enter" && onSubmit) onSubmit(v); },
    onFocus: (e) => { setHasFocus(true); if (onFocus) onFocus(e); },
    onBlur: (e) => { setHasFocus(false); if (onBlur) onBlur(e); } };
  return (
    <__FigmaSearch state={state} input={input}
      onClear={() => { setV(""); if (onClear) onClear(); }}
      onCancel={() => { setV(""); if (document.activeElement) document.activeElement.blur(); if (onCancel) onCancel(); }}
      className={className} style={{ width: "100%", ...style }} />
  );
}

export default Search;
