import { Icon } from '../../assets/icons/Icon.jsx';
import { Ic2Light } from '../internal/Ic2Light.jsx';
import { StatusBarIPhone } from '../internal/StatusBarIPhone.jsx';
import { WeatherIcon } from '../internal/WeatherIcon.jsx';
import { WeatherItem } from '../internal/WeatherItem.jsx';
import { ensureKdStyles } from '../internal/runtime.jsx';
import { usePressed } from '../internal/runtime.jsx';

// figma node: 295:2947 navbar / main (6 variants)
// Figma 295:2956 / 295:2963 / 295:2969 / 295:2983: bottom border only (no top/side borders), so a bar is exactly as wide as
// its container. Rows fill the width; right-hand buttons are placed from the right edge (32px buttons right: 16, the
// «Головна» pill at 100% − 112px = Figma's left 263 in 375); the page-control dots stay centred; one-line texts end with «…».
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "scrolled=" + __venc(p.scrolled);

// Not in Figma (proposed): a part with a handler becomes a real button (focus ring, 70% pressed, hit area grown to 44×44
// by an invisible span: `hit` px above and below, `hitX` [left, right]); without a handler it stays a plain decorative box.
function NavTap({ onClick, label, pressed, hit = 6, hitX, style, children }) {
  const [pressedStyle, pressHandlers] = usePressed(!!onClick);
  if (!onClick) return <div style={style}>{children}</div>;
  const [hl, hr] = hitX ?? [hit, hit];
  return (
    <button type="button" onClick={onClick} aria-label={label} aria-pressed={pressed} className="kd-control" {...pressHandlers}
      style={{ all: "unset", display: "block", cursor: "pointer", ...style, overflow: "visible", ...pressedStyle }}>
      <span aria-hidden="true" style={{ position: "absolute", top: -hit, bottom: -hit, left: -hl, right: -hr }} />
      {children}
    </button>
  );
}
// Avatar circle content: an image URL, any node, "sample" (the Figma sample photo) or, by default, Ic2ProfileEmpty.
function navAvatar(avatar, size) {
  const clip = { width: size, height: size, borderRadius: "50%", overflow: "hidden" };
  if (avatar === "sample") return <div className="fig-asset-62abe9cf520b8b38" style={clip} />;
  if (typeof avatar === "string") return <div style={{ ...clip, backgroundImage: "url(" + JSON.stringify(avatar) + ")", backgroundSize: "cover", backgroundPosition: "center" }} />;
  return <div style={clip}>{avatar ?? <Icon name="Ic2ProfileEmpty" size={size} style={{ display: "block" }} />}</div>;
}

function __FigmaNavbarMain(_p = {}) {
  const props = { ..._p, type: _p.type ?? "home", scrolled: _p.scrolled ?? true, urkenergo: _p.urkenergo ?? true,
    showWeather: _p.showWeather ?? true, view: _p.view ?? "grid" };
  const temperature = props.temperature ?? "23°";
  const aqi = props.aqi === undefined ? "47" : props.aqi;
  const showAqi = props.showWeather && aqi !== null && aqi !== "";
  const weatherIcon = props.weatherIcon ?? "Ic2Sun";
  const weatherGlyph = typeof weatherIcon === "string"
    ? <Icon name={weatherIcon} size={24} style={{ display: "block", color: "var(--content-content-primary)" }} /> : weatherIcon;
  const onView = (v) => props.onViewChange && (() => props.onViewChange(v));
  const __body0 = () => (
    <div className={props.className} style={{
      width: 375,
      height: 180,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 54,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "var(--space-4) var(--space-5) var(--space-4) var(--space-5)",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "var(--space-3)",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.showWeather && (
          <NavTap onClick={props.onWeatherClick} label={"Погода, " + temperature} style={{ position: "relative", minWidth: 66, flexShrink: 0 }}><WeatherItem text1={temperature} onBlue={true} icon1={<WeatherIcon onBlue={true} icon1={weatherGlyph} />} /></NavTap>
          )}
          {showAqi && (
          <NavTap onClick={props.onAqiClick} label={"Якість повітря, " + aqi} style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "var(--space-2)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 3.6,
                  top: 6,
                  width: 16.851,
                  height: 7.925,
                  overflow: "hidden",
                }}>
                  <svg width={1.475} height={7.046} viewBox="0 0 1.475 7.046" fill="none" style={{
                    position: "absolute",
                    left: 15.376,
                    top: 0.181,
                    width: 1.475,
                    height: 7.046,
                    color: "var(--content-content-primary)",
                  }}>
                    <path d={"M 0 7.046 L 1.475 7.046 L 1.475 0 L 0 0 L 0 7.046 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={6.782} height={7.925} viewBox="0 0 6.782 7.925" fill="none" style={{
                    position: "absolute",
                    left: 7.192,
                    top: 0,
                    width: 6.782,
                    height: 7.925,
                    color: "var(--content-content-primary)",
                  }}>
                    <path d={"M 3.394 7.407 C 4.087 7.407 4.688 7.257 5.195 6.958 C 5.703 6.655 6.094 6.227 6.367 5.674 C 6.644 5.12 6.782 4.465 6.782 3.706 L 6.782 3.696 C 6.782 2.938 6.644 2.282 6.367 1.729 C 6.09 1.175 5.698 0.749 5.19 0.449 C 4.686 0.15 4.087 0 3.394 0 C 2.703 0 2.104 0.15 1.597 0.449 C 1.089 0.749 0.695 1.175 0.415 1.729 C 0.138 2.279 0 2.935 0 3.696 L 0 3.706 C 0 4.465 0.137 5.12 0.41 5.674 C 0.687 6.227 1.079 6.655 1.587 6.958 C 2.095 7.257 2.697 7.407 3.394 7.407 Z M 3.394 6.157 C 3.006 6.157 2.671 6.056 2.388 5.854 C 2.108 5.653 1.89 5.368 1.733 5 C 1.58 4.632 1.504 4.201 1.504 3.706 L 1.504 3.696 C 1.504 3.198 1.582 2.767 1.738 2.402 C 1.895 2.035 2.114 1.751 2.397 1.553 C 2.681 1.351 3.013 1.25 3.394 1.25 C 3.774 1.25 4.106 1.351 4.39 1.553 C 4.673 1.751 4.891 2.035 5.044 2.402 C 5.2 2.767 5.278 3.198 5.278 3.696 L 5.278 3.706 C 5.278 4.201 5.2 4.632 5.044 5 C 4.891 5.368 4.673 5.653 4.39 5.854 C 4.106 6.056 3.774 6.157 3.394 6.157 Z M 5.181 7.925 L 6.553 7.925 L 4.287 4.907 L 2.915 4.907 L 5.181 7.925 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={6.631} height={7.046} viewBox="0 0 6.631 7.046" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0.181,
                    width: 6.631,
                    height: 7.046,
                    color: "var(--content-content-primary)",
                  }}>
                    <path d={"M 0 7.046 L 1.548 7.046 L 3.271 1.406 L 3.701 1.406 L 3.701 0 L 2.446 0 L 0 7.046 Z M 1.309 5.337 L 5.288 5.337 L 4.927 4.233 L 1.67 4.233 L 1.309 5.337 Z M 5.078 7.046 L 6.631 7.046 L 4.18 0 L 3.359 0 L 3.359 1.406 L 5.078 7.046 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 17,
                  width: 10,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: "var(--neutral-neutral-gray100)",
                }} />
              </div>
            </div>
            <span className="subheadline-emphasized" style={{
              position: "relative",
              whiteSpace: "nowrap",
              color: "var(--content-content-primary-invert)",
              flexShrink: 0,
            }}>{aqi}</span>
          </NavTap>
          )}
          {props.urkenergo && (
          <NavTap onClick={props.onPowerStatusClick} label="Стан електропостачання" style={{
            position: "relative",
            width: 32,
            height: 32,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--neutral-neutral-white-20)",
            }} />
            <div style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 24,
              height: 24,
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--vibrant-vibrant-green)",
            }} />
            <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 16,
                height: 16,
                color: "var(--neutral-neutral-white)",
              }}>{props.icon3 ?? <Ic2Light type={"on"} />}</div>
          </NavTap>
          )}
        </div>
        <NavTap onClick={props.onSearch} label="Пошук" style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
              position: "absolute",
              left: 2.5,
              top: 2.5,
              width: 11.667,
              height: 11.667,
              color: "var(--content-content-primary-invert)",
            }}>
              <path d={"M 0 5.833 L 1 5.833 L 1 5.833 L 0 5.833 Z M 11.667 5.833 L 10.667 5.833 L 10.667 5.833 L 11.667 5.833 Z M 5.833 0 L 5.833 -1 L 5.833 0 Z M 0 5.833 L -1 5.833 C -1 6.731 -0.823 7.619 -0.48 8.448 L 0.444 8.066 L 1.368 7.683 C 1.125 7.097 1 6.468 1 5.833 L 0 5.833 Z M 0.444 8.066 L -0.48 8.448 C -0.136 9.277 0.367 10.031 1.001 10.665 L 1.709 9.958 L 2.416 9.251 C 1.967 8.802 1.611 8.269 1.368 7.683 L 0.444 8.066 Z M 1.709 9.958 L 1.001 10.665 C 1.636 11.3 2.389 11.803 3.218 12.147 L 3.601 11.223 L 3.984 10.299 C 3.397 10.056 2.864 9.7 2.416 9.251 L 1.709 9.958 Z M 3.601 11.223 L 3.218 12.147 C 4.047 12.49 4.936 12.667 5.833 12.667 L 5.833 11.667 L 5.833 10.667 C 5.199 10.667 4.57 10.542 3.984 10.299 L 3.601 11.223 Z M 5.833 11.667 L 5.833 12.667 C 6.731 12.667 7.619 12.49 8.448 12.147 L 8.066 11.223 L 7.683 10.299 C 7.097 10.542 6.468 10.667 5.833 10.667 L 5.833 11.667 Z M 8.066 11.223 L 8.448 12.147 C 9.277 11.803 10.031 11.3 10.665 10.665 L 9.958 9.958 L 9.251 9.251 C 8.802 9.7 8.269 10.056 7.683 10.299 L 8.066 11.223 Z M 9.958 9.958 L 10.665 10.665 C 11.3 10.031 11.803 9.277 12.147 8.448 L 11.223 8.066 L 10.299 7.683 C 10.056 8.269 9.7 8.802 9.251 9.251 L 9.958 9.958 Z M 11.223 8.066 L 12.147 8.448 C 12.49 7.619 12.667 6.731 12.667 5.833 L 11.667 5.833 L 10.667 5.833 C 10.667 6.468 10.542 7.097 10.299 7.683 L 11.223 8.066 Z M 11.667 5.833 L 12.667 5.833 C 12.667 4.936 12.49 4.047 12.147 3.218 L 11.223 3.601 L 10.299 3.984 C 10.542 4.57 10.667 5.199 10.667 5.833 L 11.667 5.833 Z M 11.223 3.601 L 12.147 3.218 C 11.803 2.389 11.3 1.636 10.665 1.001 L 9.958 1.709 L 9.251 2.416 C 9.7 2.864 10.056 3.397 10.299 3.984 L 11.223 3.601 Z M 9.958 1.709 L 10.665 1.001 C 10.031 0.367 9.277 -0.136 8.448 -0.48 L 8.066 0.444 L 7.683 1.368 C 8.269 1.611 8.802 1.967 9.251 2.416 L 9.958 1.709 Z M 8.066 0.444 L 8.448 -0.48 C 7.619 -0.823 6.731 -1 5.833 -1 L 5.833 0 L 5.833 1 C 6.468 1 7.097 1.125 7.683 1.368 L 8.066 0.444 Z M 5.833 0 L 5.833 -1 C 4.936 -1 4.047 -0.823 3.218 -0.48 L 3.601 0.444 L 3.984 1.368 C 4.57 1.125 5.199 1 5.833 1 L 5.833 0 Z M 3.601 0.444 L 3.218 -0.48 C 2.389 -0.136 1.636 0.367 1.001 1.001 L 1.709 1.709 L 2.416 2.416 C 2.864 1.967 3.397 1.611 3.984 1.368 L 3.601 0.444 Z M 1.709 1.709 L 1.001 1.001 C 0.367 1.636 -0.136 2.389 -0.48 3.218 L 0.444 3.601 L 1.368 3.984 C 1.611 3.397 1.967 2.864 2.416 2.416 L 1.709 1.709 Z M 0.444 3.601 L -0.48 3.218 C -0.823 4.047 -1 4.936 -1 5.833 L 0 5.833 L 1 5.833 C 1 5.199 1.125 4.57 1.368 3.984 L 0.444 3.601 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={5} height={5} viewBox="0 0 5 5" fill="none" style={{
              position: "absolute",
              left: 12.5,
              top: 12.5,
              width: 5,
              height: 5,
              color: "var(--content-content-primary-invert)",
            }}>
              <path d={"M 4.293 5.707 C 4.683 6.098 5.317 6.098 5.707 5.707 C 6.098 5.317 6.098 4.683 5.707 4.293 L 5 5 L 4.293 5.707 Z M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 5 5 L 5.707 4.293 L 0.707 -0.707 L 0 0 L -0.707 0.707 L 4.293 5.707 L 5 5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span className="footnote-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-primary-invert)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Пошук</span>
        </NavTap>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 118,
        width: "100%",
        height: 62,
        display: "flex",
        flexDirection: "row",
        padding: "0px var(--space-5) 0px var(--space-5)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          minWidth: 0,
        }}>
          <span className="footnote" style={{
            position: "relative",
            opacity: 0.7,
            whiteSpace: "nowrap",
            color: "var(--neutral-neutral-white-70)",
            flexShrink: 0,
            maxWidth: "100%",
            overflow: "hidden", textOverflow: "ellipsis",
          }}>{props.date ?? "23 жовтня"}</span>
          <span className="title1-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-primary-invert)",
            flexShrink: 0,
            maxWidth: "100%",
            overflow: "hidden", textOverflow: "ellipsis",
          }}>{props.greeting ?? "Доброго дня!"}</span>
        </div>
        <NavTap onClick={props.onAvatarClick} label="Профіль" hit={0} style={{
          position: "relative",
          width: 44,
          height: 44,
          borderRadius: "50%",
          flexShrink: 0,
        }}>{navAvatar(props.avatar, 44)}</NavTap>
      </div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: 54,
          overflow: "hidden",
        }}>
        <StatusBarIPhone
          style={{ width: "calc(100% * 393 / 375)", transform: "scale(0.954, 1)", transformOrigin: "0 0" }}
          mode={"dark"}
          background={false}
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
        display: "flex",
        flexDirection: "row",
        padding: "6px var(--space-4) 6px var(--space-4)",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: "var(--space-3)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.showWeather && (
          <NavTap onClick={props.onWeatherClick} label={"Погода, " + temperature} style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "var(--space-2)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--background-bg-subtle)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                }}>{props.icon1 ?? weatherGlyph}</div>
            </div>
            <span className="subheadline-emphasized" style={{
              position: "relative",
              whiteSpace: "nowrap",
              color: "var(--content-content-primary)",
              flexShrink: 0,
            }}>{temperature}</span>
          </NavTap>
          )}
          {showAqi && (
          <NavTap onClick={props.onAqiClick} label={"Якість повітря, " + aqi} style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: "var(--space-2)",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--background-bg-subtle)",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute",
                  left: 3.6,
                  top: 6,
                  width: 16.851,
                  height: 7.925,
                  overflow: "hidden",
                }}>
                  <svg width={1.475} height={7.046} viewBox="0 0 1.475 7.046" fill="none" style={{
                    position: "absolute",
                    left: 15.376,
                    top: 0.181,
                    width: 1.475,
                    height: 7.046,
                    color: "var(--neutral-neutral-white)",
                  }}>
                    <path d={"M 0 7.046 L 1.475 7.046 L 1.475 0 L 0 0 L 0 7.046 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={6.782} height={7.925} viewBox="0 0 6.782 7.925" fill="none" style={{
                    position: "absolute",
                    left: 7.192,
                    top: 0,
                    width: 6.782,
                    height: 7.925,
                    color: "var(--neutral-neutral-white)",
                  }}>
                    <path d={"M 3.394 7.407 C 4.087 7.407 4.688 7.257 5.195 6.958 C 5.703 6.655 6.094 6.227 6.367 5.674 C 6.644 5.12 6.782 4.465 6.782 3.706 L 6.782 3.696 C 6.782 2.938 6.644 2.282 6.367 1.729 C 6.09 1.175 5.698 0.749 5.19 0.449 C 4.686 0.15 4.087 0 3.394 0 C 2.703 0 2.104 0.15 1.597 0.449 C 1.089 0.749 0.695 1.175 0.415 1.729 C 0.138 2.279 0 2.935 0 3.696 L 0 3.706 C 0 4.465 0.137 5.12 0.41 5.674 C 0.687 6.227 1.079 6.655 1.587 6.958 C 2.095 7.257 2.697 7.407 3.394 7.407 Z M 3.394 6.157 C 3.006 6.157 2.671 6.056 2.388 5.854 C 2.108 5.653 1.89 5.368 1.733 5 C 1.58 4.632 1.504 4.201 1.504 3.706 L 1.504 3.696 C 1.504 3.198 1.582 2.767 1.738 2.402 C 1.895 2.035 2.114 1.751 2.397 1.553 C 2.681 1.351 3.013 1.25 3.394 1.25 C 3.774 1.25 4.106 1.351 4.39 1.553 C 4.673 1.751 4.891 2.035 5.044 2.402 C 5.2 2.767 5.278 3.198 5.278 3.696 L 5.278 3.706 C 5.278 4.201 5.2 4.632 5.044 5 C 4.891 5.368 4.673 5.653 4.39 5.854 C 4.106 6.056 3.774 6.157 3.394 6.157 Z M 5.181 7.925 L 6.553 7.925 L 4.287 4.907 L 2.915 4.907 L 5.181 7.925 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                  <svg width={6.631} height={7.046} viewBox="0 0 6.631 7.046" fill="none" style={{
                    position: "absolute",
                    left: 0,
                    top: 0.181,
                    width: 6.631,
                    height: 7.046,
                    color: "var(--neutral-neutral-white)",
                  }}>
                    <path d={"M 0 7.046 L 1.548 7.046 L 3.271 1.406 L 3.701 1.406 L 3.701 0 L 2.446 0 L 0 7.046 Z M 1.309 5.337 L 5.288 5.337 L 4.927 4.233 L 1.67 4.233 L 1.309 5.337 Z M 5.078 7.046 L 6.631 7.046 L 4.18 0 L 3.359 0 L 3.359 1.406 L 5.078 7.046 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
                <div style={{
                  position: "absolute",
                  left: 7,
                  top: 17,
                  width: 10,
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: "var(--neutral-neutral-gray100)",
                }} />
              </div>
            </div>
            <span className="subheadline-emphasized" style={{
              position: "relative",
              whiteSpace: "nowrap",
              color: "var(--content-content-primary)",
              flexShrink: 0,
            }}>{aqi}</span>
          </NavTap>
          )}
          {props.urkenergo && (
          <NavTap onClick={props.onPowerStatusClick} label="Стан електропостачання" style={{
            position: "relative",
            width: 32,
            height: 32,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 32,
              height: 32,
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--background-bg-subtle)",
            }} />
            <div style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 24,
              height: 24,
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--vibrant-vibrant-green)",
            }} />
            <div style={{
                position: "absolute",
                left: 8,
                top: 8,
                width: 16,
                height: 16,
                color: "var(--neutral-neutral-white)",
              }}>{props.icon3 ?? <Ic2Light type={"on"} />}</div>
          </NavTap>
          )}
        </div>
        <NavTap onClick={props.onAvatarClick} label="Профіль" hit={6} style={{
          position: "relative",
          width: 32,
          height: 32,
          borderRadius: "50%",
          flexShrink: 0,
        }}>{navAvatar(props.avatar, 32)}</NavTap>
      </div>
    </div>
  );
  const __body2 = () => (
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
      }}>
        <div role={props.onViewChange ? "group" : undefined} aria-label={props.onViewChange ? "Вигляд" : undefined} style={{
          position: "absolute",
          left: "var(--space-4)",
          top: 6,
          borderRadius: "var(--radius-pill)",
          backgroundColor: "var(--background-bg-secondary-cta)",
          display: "flex",
          flexDirection: "row",
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <NavTap onClick={onView("grid")} label="Сітка" pressed={props.view !== "list"} hit={8} hitX={[16, 0]} style={{
            position: "relative",
            borderRadius: "var(--radius-pill)",
            backgroundColor: props.view === "list" ? undefined : "var(--background-bg-surface)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon1 ?? <Icon name="Ic2ViewGrid" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
          </NavTap>
          <NavTap onClick={onView("list")} label="Список" pressed={props.view === "list"} hit={8} hitX={[0, 16]} style={{
            position: "relative",
            borderRadius: "var(--radius-pill)",
            backgroundColor: props.view === "list" ? "var(--background-bg-surface)" : undefined,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon2 ?? <Icon name="Ic2ViewList" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
          </NavTap>
        </div>
        <span className="headline" style={{
          position: "absolute",
          left: 92,
          top: 11,
          right: 92,
          height: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary)",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{props.title ?? "Сервіси"}</span>
        <NavTap onClick={props.onHomeClick} label="Головна" style={{
          position: "absolute",
          right: "var(--space-4)",
          top: 6,
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
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 5.833,
              top: 5.833,
              width: 4.167,
              height: 8.333,
              color: "var(--neutral-neutral-gray30)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 10.833,
              top: 5.833,
              width: 4.167,
              height: 8.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </NavTap>
      </div>
    </div>
  );
  const __body3 = () => (
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
      }}>
        <span className="headline" style={{
          position: "absolute",
          left: 91,
          top: 11,
          right: 92,
          height: 22,
          textAlign: "center",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary)",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{props.title ?? props.userName ?? "Веніамін М."}</span>
        <NavTap onClick={props.onEdit} label="Змінити профіль" style={{
          position: "absolute",
          right: "var(--space-4)",
          top: 6,
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
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.774} height={12.774} viewBox="0 0 12.774 12.774" fill="none" style={{
              position: "absolute",
              left: 3.333,
              top: 3.893,
              width: 12.774,
              height: 12.774,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0 12.774 L -1 12.774 C -1 13.326 -0.552 13.774 0 13.774 L 0 12.774 Z M 3.333 12.774 L 3.333 13.774 C 3.599 13.774 3.853 13.668 4.04 13.481 L 3.333 12.774 Z M 12.774 2.357 L 13.774 2.357 L 12.774 2.357 Z M 10.417 0 L 10.417 1 L 10.417 0 Z M 0 9.44 L -0.707 8.733 C -0.895 8.921 -1 9.175 -1 9.44 L 0 9.44 Z M 0 12.774 L 0 13.774 L 3.333 13.774 L 3.333 12.774 L 3.333 11.774 L 0 11.774 L 0 12.774 Z M 3.333 12.774 L 4.04 13.481 L 12.79 4.731 L 12.083 4.024 L 11.376 3.317 L 2.626 12.067 L 3.333 12.774 Z M 12.083 4.024 L 12.79 4.731 C 13.102 4.419 13.349 4.049 13.518 3.642 L 12.594 3.259 L 11.67 2.876 C 11.602 3.041 11.502 3.191 11.376 3.317 L 12.083 4.024 Z M 12.594 3.259 L 13.518 3.642 C 13.687 3.234 13.774 2.798 13.774 2.357 L 12.774 2.357 L 11.774 2.357 C 11.774 2.535 11.739 2.712 11.67 2.876 L 12.594 3.259 Z M 12.774 2.357 L 13.774 2.357 C 13.774 1.916 13.687 1.48 13.518 1.072 L 12.594 1.455 L 11.67 1.838 C 11.739 2.002 11.774 2.179 11.774 2.357 L 12.774 2.357 Z M 12.594 1.455 L 13.518 1.072 C 13.349 0.665 13.102 0.295 12.79 -0.017 L 12.083 0.69 L 11.376 1.397 C 11.502 1.523 11.602 1.673 11.67 1.838 L 12.594 1.455 Z M 12.083 0.69 L 12.79 -0.017 C 12.479 -0.328 12.109 -0.576 11.701 -0.744 L 11.319 0.179 L 10.936 1.103 C 11.101 1.171 11.25 1.271 11.376 1.397 L 12.083 0.69 Z M 11.319 0.179 L 11.701 -0.744 C 11.294 -0.913 10.858 -1 10.417 -1 L 10.417 0 L 10.417 1 C 10.595 1 10.771 1.035 10.936 1.103 L 11.319 0.179 Z M 10.417 0 L 10.417 -1 C 9.976 -1 9.539 -0.913 9.132 -0.744 L 9.515 0.179 L 9.897 1.103 C 10.062 1.035 10.238 1 10.417 1 L 10.417 0 Z M 9.515 0.179 L 9.132 -0.744 C 8.725 -0.576 8.355 -0.328 8.043 -0.017 L 8.75 0.69 L 9.457 1.397 C 9.583 1.271 9.733 1.171 9.897 1.103 L 9.515 0.179 Z M 8.75 0.69 L 8.043 -0.017 L -0.707 8.733 L 0 9.44 L 0.707 10.147 L 9.457 1.397 L 8.75 0.69 Z M 0 9.44 L -1 9.44 L -1 12.774 L 0 12.774 L 1 12.774 L 1 9.44 L 0 9.44 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={3.333} height={3.333} viewBox="0 0 3.333 3.333" fill="none" style={{
              position: "absolute",
              left: 11.25,
              top: 5.417,
              width: 3.333,
              height: 3.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 2.626 4.04 C 3.017 4.431 3.65 4.431 4.04 4.04 C 4.431 3.65 4.431 3.017 4.04 2.626 L 3.333 3.333 L 2.626 4.04 Z M 0 0 L -0.707 0.707 L 2.626 4.04 L 3.333 3.333 L 4.04 2.626 L 0.707 -0.707 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </NavTap>
        <NavTap onClick={props.onHomeClick} label="Головна" style={{
          position: "absolute",
          left: "var(--space-4)",
          top: 6,
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
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,14.167,5.833)",
              transformOrigin: "0 0",
              width: 4.167,
              height: 8.333,
              color: "var(--neutral-neutral-gray30)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,9.167,5.833)",
              transformOrigin: "0 0",
              width: 4.167,
              height: 8.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </NavTap>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
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
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "6px 0px 6px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: "calc(50% - 32.5px)",
            top: 4,
            borderRadius: "var(--radius-pill)",
            display: "flex",
            flexDirection: "row",
            gap: "var(--space-2)",
            padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div role={props.onViewChange ? "group" : undefined} aria-label={props.onViewChange ? "Вигляд" : undefined} style={{
          position: "absolute",
          left: "var(--space-4)",
          top: 6,
          borderRadius: "var(--radius-pill)",
          backgroundColor: "var(--background-bg-surface)",
          boxShadow: "var(--shadow-elevation)",
          display: "flex",
          flexDirection: "row",
          padding: "2px 2px 2px 2px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <NavTap onClick={onView("grid")} label="Сітка" pressed={props.view !== "list"} hit={8} hitX={[16, 0]} style={{
            position: "relative",
            borderRadius: "var(--radius-pill)",
            backgroundColor: props.view === "list" ? "var(--background-bg-surface)" : "var(--vibrant-vibrant-blue-10)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon1 ?? <Icon name="Ic2ViewGrid" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
          </NavTap>
          <NavTap onClick={onView("list")} label="Список" pressed={props.view === "list"} hit={8} hitX={[0, 16]} style={{
            position: "relative",
            borderRadius: "var(--radius-pill)",
            backgroundColor: props.view === "list" ? "var(--vibrant-vibrant-blue-10)" : "var(--background-bg-surface)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "var(--space-1) var(--space-1) var(--space-1) var(--space-1)",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>{props.icon2 ?? <Icon name="Ic2ViewList" size={20} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
          </NavTap>
        </div>
        <NavTap onClick={props.onHomeClick} label="Головна" style={{
          position: "absolute",
          left: "calc(100% - 112px)",
          top: 6,
          height: 32,
          borderRadius: "var(--radius-pill)",
          backgroundColor: "var(--background-bg-surface)",
          boxShadow: "var(--shadow-elevation)",
          display: "flex",
          flexDirection: "row",
          gap: "var(--space-1)",
          padding: "var(--space-2) var(--space-2) var(--space-2) var(--space-3)",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <span className="footnote-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Головна</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 5.833,
              top: 5.833,
              width: 4.167,
              height: 8.333,
              color: "var(--neutral-neutral-gray30)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 10.833,
              top: 5.833,
              width: 4.167,
              height: 8.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </NavTap>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "3px var(--space-4) var(--space-2) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span className="large-title-emphasized" style={{
          position: "relative",
          whiteSpace: "nowrap",
          color: "var(--content-content-primary)",
          flexShrink: 1,
          minWidth: 0,
          overflow: "hidden", textOverflow: "ellipsis",
        }}>{props.title ?? "Міські сервіси"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
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
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "6px 0px 6px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 32,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: "calc(50% - 32.5px)",
            top: 4,
            borderRadius: "var(--radius-pill)",
            display: "flex",
            flexDirection: "row",
            gap: "var(--space-2)",
            padding: "var(--space-2) var(--space-3) var(--space-2) var(--space-3)",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
          }}>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              opacity: 0.3,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: 50,
              flexShrink: 0,
              color: "var(--neutral-neutral-white)",
            }}>
              <path d={"M 0 4 C 0 1.791 1.791 0 4 0 L 4 0 C 6.209 0 8 1.791 8 4 L 8 4 C 8 6.209 6.209 8 4 8 L 4 8 C 1.791 8 0 6.209 0 4 L 0 4 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <NavTap onClick={props.onHomeClick} label="Головна" style={{
          position: "absolute",
          left: "var(--space-4)",
          top: 6,
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
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,14.167,5.833)",
              transformOrigin: "0 0",
              width: 4.167,
              height: 8.333,
              color: "var(--neutral-neutral-gray30)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={4.167} height={8.333} viewBox="0 0 4.167 8.333" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,9.167,5.833)",
              transformOrigin: "0 0",
              width: 4.167,
              height: 8.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 4.167 4.167 L 4.874 4.874 C 5.264 4.483 5.264 3.85 4.874 3.46 L 4.167 4.167 Z M -0.707 7.626 C -1.098 8.017 -1.098 8.65 -0.707 9.04 C -0.317 9.431 0.317 9.431 0.707 9.04 L 0 8.333 L -0.707 7.626 Z M 0 0 L -0.707 0.707 L 3.46 4.874 L 4.167 4.167 L 4.874 3.46 L 0.707 -0.707 L 0 0 Z M 4.167 4.167 L 3.46 3.46 L -0.707 7.626 L 0 8.333 L 0.707 9.04 L 4.874 4.874 L 4.167 4.167 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span className="footnote-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-primary)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Головна</span>
        </NavTap>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "var(--space-4)",
        padding: "var(--space-4) var(--space-4) var(--space-4) var(--space-4)",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <NavTap onClick={props.onAvatarClick} label="Фото профілю" hit={0} style={{
            position: "relative",
            width: 48,
            height: 48,
            flexShrink: 0,
            borderRadius: "50%",
          }}>{navAvatar(props.avatar, 48)}</NavTap>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          minWidth: 0,
        }}>
          <span className="title3-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-primary)",
            flexShrink: 0,
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>{props.userName ?? "Веніамін М."}</span>
          <span className="footnote" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-secondary)",
            flexShrink: 0,
            maxWidth: "100%",
            overflow: "hidden", textOverflow: "ellipsis",
          }}>{props.phone ?? "+380 12 345 67 89"}</span>
        </div>
        <NavTap onClick={props.onEdit} label="Змінити профіль" style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.774} height={12.774} viewBox="0 0 12.774 12.774" fill="none" style={{
              position: "absolute",
              left: 3.333,
              top: 3.893,
              width: 12.774,
              height: 12.774,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0 12.774 L -1 12.774 C -1 13.326 -0.552 13.774 0 13.774 L 0 12.774 Z M 3.333 12.774 L 3.333 13.774 C 3.599 13.774 3.853 13.668 4.04 13.481 L 3.333 12.774 Z M 12.774 2.357 L 13.774 2.357 L 12.774 2.357 Z M 10.417 0 L 10.417 1 L 10.417 0 Z M 0 9.44 L -0.707 8.733 C -0.895 8.921 -1 9.175 -1 9.44 L 0 9.44 Z M 0 12.774 L 0 13.774 L 3.333 13.774 L 3.333 12.774 L 3.333 11.774 L 0 11.774 L 0 12.774 Z M 3.333 12.774 L 4.04 13.481 L 12.79 4.731 L 12.083 4.024 L 11.376 3.317 L 2.626 12.067 L 3.333 12.774 Z M 12.083 4.024 L 12.79 4.731 C 13.102 4.419 13.349 4.049 13.518 3.642 L 12.594 3.259 L 11.67 2.876 C 11.602 3.041 11.502 3.191 11.376 3.317 L 12.083 4.024 Z M 12.594 3.259 L 13.518 3.642 C 13.687 3.234 13.774 2.798 13.774 2.357 L 12.774 2.357 L 11.774 2.357 C 11.774 2.535 11.739 2.712 11.67 2.876 L 12.594 3.259 Z M 12.774 2.357 L 13.774 2.357 C 13.774 1.916 13.687 1.48 13.518 1.072 L 12.594 1.455 L 11.67 1.838 C 11.739 2.002 11.774 2.179 11.774 2.357 L 12.774 2.357 Z M 12.594 1.455 L 13.518 1.072 C 13.349 0.665 13.102 0.295 12.79 -0.017 L 12.083 0.69 L 11.376 1.397 C 11.502 1.523 11.602 1.673 11.67 1.838 L 12.594 1.455 Z M 12.083 0.69 L 12.79 -0.017 C 12.479 -0.328 12.109 -0.576 11.701 -0.744 L 11.319 0.179 L 10.936 1.103 C 11.101 1.171 11.25 1.271 11.376 1.397 L 12.083 0.69 Z M 11.319 0.179 L 11.701 -0.744 C 11.294 -0.913 10.858 -1 10.417 -1 L 10.417 0 L 10.417 1 C 10.595 1 10.771 1.035 10.936 1.103 L 11.319 0.179 Z M 10.417 0 L 10.417 -1 C 9.976 -1 9.539 -0.913 9.132 -0.744 L 9.515 0.179 L 9.897 1.103 C 10.062 1.035 10.238 1 10.417 1 L 10.417 0 Z M 9.515 0.179 L 9.132 -0.744 C 8.725 -0.576 8.355 -0.328 8.043 -0.017 L 8.75 0.69 L 9.457 1.397 C 9.583 1.271 9.733 1.171 9.897 1.103 L 9.515 0.179 Z M 8.75 0.69 L 8.043 -0.017 L -0.707 8.733 L 0 9.44 L 0.707 10.147 L 9.457 1.397 L 8.75 0.69 Z M 0 9.44 L -1 9.44 L -1 12.774 L 0 12.774 L 1 12.774 L 1 9.44 L 0 9.44 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={3.333} height={3.333} viewBox="0 0 3.333 3.333" fill="none" style={{
              position: "absolute",
              left: 11.25,
              top: 5.417,
              width: 3.333,
              height: 3.333,
              color: "var(--content-content-primary)",
            }}>
              <path d={"M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 2.626 4.04 C 3.017 4.431 3.65 4.431 4.04 4.04 C 4.431 3.65 4.431 3.017 4.04 2.626 L 3.333 3.333 L 2.626 4.04 Z M 0 0 L -0.707 0.707 L 2.626 4.04 L 3.333 3.333 L 4.04 2.626 L 0.707 -0.707 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span className="footnote-emphasized" style={{
            position: "relative",
            whiteSpace: "nowrap",
            color: "var(--content-content-accent)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Змінити</span>
        </NavTap>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=home, scrolled=false
    "type=home|scrolled=false": __body0,
    // figma: type=home, scrolled=true
    "type=home|scrolled=true": __body1,
    // figma: type=services, scrolled=true
    "type=services|scrolled=true": __body2,
    // figma: type=profile, scrolled=true
    "type=profile|scrolled=true": __body3,
    // figma: type=services, scrolled=false
    "type=services|scrolled=false": __body4,
    // figma: type=profile, scrolled=false
    "type=profile|scrolled=false": __body5,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}

export function NavbarMain({ type = "home", scrolled = true, showPowerStatus = true, showWeather = true, view = "grid", className, style, ...rest }) {
  ensureKdStyles();
  return <__FigmaNavbarMain {...rest} type={type} scrolled={scrolled} urkenergo={showPowerStatus} showWeather={showWeather} view={view} className={className} style={{ width: "100%", ...style }} />;
}
export default NavbarMain;
