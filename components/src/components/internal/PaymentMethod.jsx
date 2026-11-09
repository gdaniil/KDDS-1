import { Icon } from '../../assets/icons/Icon.jsx';

// figma node: 159:895 payment-method (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "dark=" + __venc(p.dark);

export function PaymentMethod(_p = {}) {
  const props = { ..._p, type: _p.type ?? "apple", dark: _p.dark ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
        backgroundColor: "rgba(255,255,255,0.0001)",
      }} />
      <div style={{
        position: "absolute",
        left: 0.17,
        top: 6.022,
        width: 46.97,
        height: 19.925,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 13.044,
          height: 16.033,
          overflow: "hidden",
        }}>
          <svg width={3.254} height={3.704} viewBox="0 0 3.254 3.704" fill="none" style={{
            position: "absolute",
            left: 6.469,
            top: 0,
            width: 3.254,
            height: 3.704,
          }}>
            <path d={"M 2.409 2.569 C 2.962 1.878 3.337 0.949 3.238 0 C 2.428 0.04 1.44 0.534 0.869 1.226 C 0.355 1.819 -0.1 2.787 0.019 3.696 C 0.928 3.775 1.836 3.242 2.409 2.569"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={13.044} height={12.165} viewBox="0 0 13.044 12.165" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 3.868,
            width: 13.044,
            height: 12.165,
          }}>
            <path d={"M 9.696 0.005 C 8.376 -0.073 7.254 0.754 6.624 0.754 C 5.994 0.754 5.029 0.045 3.985 0.064 C 2.626 0.084 1.366 0.852 0.676 2.074 C -0.742 4.518 0.302 8.143 1.681 10.134 C 2.351 11.118 3.158 12.203 4.221 12.164 C 5.226 12.124 5.62 11.513 6.841 11.513 C 8.061 11.513 8.416 12.164 9.479 12.144 C 10.582 12.124 11.272 11.159 11.942 10.173 C 12.71 9.05 13.024 7.967 13.044 7.907 C 13.024 7.887 10.917 7.079 10.898 4.655 C 10.878 2.626 12.552 1.661 12.631 1.601 C 11.685 0.203 10.208 0.045 9.696 0.005"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 15.645,
          top: 1.127,
          width: 31.325,
          height: 18.798,
          overflow: "hidden",
        }}>
          <svg width={10.408} height={14.782} viewBox="0 0 10.408 14.782" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 10.408,
            height: 14.782,
          }}>
            <path d={"M 10.408 4.856 C 10.408 1.977 8.41 0 5.542 0 L 5.542 0 L 0 0 L 0 14.782 L 2.294 14.782 L 2.294 9.732 L 5.47 9.732 C 8.369 9.732 10.408 7.745 10.408 4.856 Z M 4.927 7.806 L 2.294 7.806 L 2.294 1.936 L 4.937 1.936 C 6.925 1.936 8.062 3.002 8.062 4.866 C 8.062 6.73 6.925 7.806 4.927 7.806 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={9.158} height={11.156} viewBox="0 0 9.158 11.156" fill="none" style={{
            position: "absolute",
            left: 11.007,
            top: 3.811,
            width: 9.158,
            height: 11.156,
          }}>
            <path d={"M 4.006 4.723 C 1.444 4.866 0 6.023 0 7.909 C 0 9.845 1.475 11.156 3.586 11.156 C 4.999 11.156 6.362 10.398 6.987 9.199 L 7.038 9.199 L 7.038 10.971 L 9.158 10.971 L 9.158 3.544 C 9.158 1.383 7.488 0 4.876 0 C 2.213 0 0.553 1.434 0.43 3.381 L 2.52 3.381 C 2.715 2.418 3.514 1.803 4.794 1.803 C 6.146 1.803 6.956 2.52 6.956 3.719 L 6.956 4.548 L 4.006 4.723 Z M 6.956 6.085 L 6.956 6.935 C 6.956 8.339 5.747 9.404 4.2 9.404 C 3.012 9.404 2.233 8.789 2.233 7.847 C 2.233 6.925 2.981 6.341 4.302 6.249 L 6.956 6.085 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={10.224} height={14.793} viewBox="0 0 10.224 14.793" fill="none" style={{
            position: "absolute",
            left: 21.102,
            top: 4.005,
            width: 10.224,
            height: 14.793,
          }}>
            <path d={"M 1.065 14.741 L 1.065 12.949 C 1.229 12.989 1.598 12.989 1.782 12.989 C 2.807 12.989 3.36 12.559 3.698 11.453 C 3.698 11.432 3.893 10.797 3.893 10.787 L 0 0 L 2.397 0 L 5.122 8.769 L 5.163 8.769 L 7.888 0 L 10.224 0 L 6.187 11.34 C 5.265 13.953 4.2 14.793 1.967 14.793 C 1.782 14.793 1.229 14.772 1.065 14.741 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      color: "var(--neutral-neutral-white)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
        backgroundColor: "rgba(255,255,255,0.0001)",
      }} />
      <div style={{
        position: "absolute",
        left: 0.17,
        top: 6.022,
        width: 46.97,
        height: 19.925,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 13.044,
          height: 16.033,
          overflow: "hidden",
        }}>
          <svg width={3.254} height={3.704} viewBox="0 0 3.254 3.704" fill="none" style={{
            position: "absolute",
            left: 6.469,
            top: 0,
            width: 3.254,
            height: 3.704,
          }}>
            <path d={"M 2.409 2.569 C 2.962 1.878 3.337 0.949 3.238 0 C 2.428 0.04 1.44 0.534 0.869 1.226 C 0.355 1.819 -0.1 2.787 0.019 3.696 C 0.928 3.775 1.836 3.242 2.409 2.569"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={13.044} height={12.165} viewBox="0 0 13.044 12.165" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 3.868,
            width: 13.044,
            height: 12.165,
          }}>
            <path d={"M 9.696 0.005 C 8.376 -0.073 7.254 0.754 6.624 0.754 C 5.994 0.754 5.029 0.045 3.985 0.064 C 2.626 0.084 1.366 0.852 0.676 2.074 C -0.742 4.518 0.302 8.143 1.681 10.134 C 2.351 11.118 3.158 12.203 4.221 12.164 C 5.226 12.124 5.62 11.513 6.841 11.513 C 8.061 11.513 8.416 12.164 9.479 12.144 C 10.582 12.124 11.272 11.159 11.942 10.173 C 12.71 9.05 13.024 7.967 13.044 7.907 C 13.024 7.887 10.917 7.079 10.898 4.655 C 10.878 2.626 12.552 1.661 12.631 1.601 C 11.685 0.203 10.208 0.045 9.696 0.005"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 15.645,
          top: 1.127,
          width: 31.325,
          height: 18.798,
          overflow: "hidden",
        }}>
          <svg width={10.408} height={14.782} viewBox="0 0 10.408 14.782" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 10.408,
            height: 14.782,
          }}>
            <path d={"M 10.408 4.856 C 10.408 1.977 8.41 0 5.542 0 L 5.542 0 L 0 0 L 0 14.782 L 2.294 14.782 L 2.294 9.732 L 5.47 9.732 C 8.369 9.732 10.408 7.745 10.408 4.856 Z M 4.927 7.806 L 2.294 7.806 L 2.294 1.936 L 4.937 1.936 C 6.925 1.936 8.062 3.002 8.062 4.866 C 8.062 6.73 6.925 7.806 4.927 7.806 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={9.158} height={11.156} viewBox="0 0 9.158 11.156" fill="none" style={{
            position: "absolute",
            left: 11.007,
            top: 3.811,
            width: 9.158,
            height: 11.156,
          }}>
            <path d={"M 4.006 4.723 C 1.444 4.866 0 6.023 0 7.909 C 0 9.845 1.475 11.156 3.586 11.156 C 4.999 11.156 6.362 10.398 6.987 9.199 L 7.038 9.199 L 7.038 10.971 L 9.158 10.971 L 9.158 3.544 C 9.158 1.383 7.488 0 4.876 0 C 2.213 0 0.553 1.434 0.43 3.381 L 2.52 3.381 C 2.715 2.418 3.514 1.803 4.794 1.803 C 6.146 1.803 6.956 2.52 6.956 3.719 L 6.956 4.548 L 4.006 4.723 Z M 6.956 6.085 L 6.956 6.935 C 6.956 8.339 5.747 9.404 4.2 9.404 C 3.012 9.404 2.233 8.789 2.233 7.847 C 2.233 6.925 2.981 6.341 4.302 6.249 L 6.956 6.085 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={10.224} height={14.793} viewBox="0 0 10.224 14.793" fill="none" style={{
            position: "absolute",
            left: 21.102,
            top: 4.005,
            width: 10.224,
            height: 14.793,
          }}>
            <path d={"M 1.065 14.741 L 1.065 12.949 C 1.229 12.989 1.598 12.989 1.782 12.989 C 2.807 12.989 3.36 12.559 3.698 11.453 C 3.698 11.432 3.893 10.797 3.893 10.787 L 0 0 L 2.397 0 L 5.122 8.769 L 5.163 8.769 L 7.888 0 L 10.224 0 L 6.187 11.34 C 5.265 13.953 4.2 14.793 1.967 14.793 C 1.782 14.793 1.229 14.772 1.065 14.741 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
        backgroundColor: "rgba(255,255,255,0.0001)",
      }} />
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 42,
        height: 26,
        overflow: "hidden",
      }}>
        <svg width={11.366} height={20.438} viewBox="0 0 11.366 20.438" fill="none" style={{
          position: "absolute",
          left: 15.3,
          top: 2.781,
          width: 11.366,
          height: 20.438,
          color: "rgb(255,90,0)",
        }}>
          <path d={"M 11.366 0 L 0 0 L 0 20.438 L 11.366 20.438 L 11.366 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={21} height={26} viewBox="0 0 21 26" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 21,
          height: 26,
          color: "rgb(235,0,27)",
        }}>
          <path d={"M 16.057 13 C 16.057 8.848 18.007 5.162 21 2.781 C 18.797 1.048 16.019 0 12.988 0 C 5.809 0 0 5.814 0 13 C 0 20.186 5.809 26 12.988 26 C 16.019 26 18.797 24.952 21 23.219 C 18.003 20.872 16.057 17.152 16.057 13 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={21} height={26} viewBox="0 0 21 26" fill="none" style={{
          position: "absolute",
          left: 21,
          top: 0,
          width: 21,
          height: 26,
          color: "rgb(247,158,27)",
        }}>
          <path d={"M 21 13 C 21 20.186 15.191 26 8.012 26 C 4.981 26 2.203 24.952 0 23.219 C 3.031 20.834 4.943 17.152 4.943 13 C 4.943 8.848 2.993 5.162 0 2.781 C 2.198 1.048 4.977 0 8.007 0 C 15.191 0 21 5.852 21 13 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
        backgroundColor: "rgba(255,255,255,0.0001)",
      }} />
      <div style={{
        position: "absolute",
        left: 0.105,
        top: 7.108,
        width: 46.748,
        height: 18.826,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 20.384,
          top: 1.087,
          width: 26.364,
          height: 17.739,
          overflow: "hidden",
        }}>
          <svg width={8.774} height={13.639} viewBox="0 0 8.774 13.639" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8.774,
            height: 13.639,
            color: "rgb(0,0,0)",
          }}>
            <path d={"M 1.726 13.639 L 1.726 8.114 L 4.578 8.114 C 5.747 8.114 6.733 7.722 7.537 6.95 L 7.73 6.755 C 9.199 5.156 9.103 2.665 7.537 1.186 C 6.755 0.403 5.682 -0.021 4.578 0.001 L 0 0.001 L 0 13.639 L 1.726 13.639 Z M 1.726 6.439 L 1.726 1.676 L 4.621 1.676 C 5.243 1.676 5.832 1.915 6.272 2.35 C 7.205 3.263 7.226 4.786 6.326 5.732 C 5.886 6.2 5.264 6.461 4.621 6.439 L 1.726 6.439 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={8.138} height={9.940} viewBox="0 0 8.138 9.940" fill="none" style={{
            position: "absolute",
            left: 8.748,
            top: 4.003,
            width: 8.138,
            height: 9.94,
            color: "rgb(0,0,0)",
          }}>
            <path d={"M 7.034 1.033 C 6.294 0.348 5.287 0 4.011 0 C 2.37 0 1.137 0.609 0.323 1.816 L 1.845 2.784 C 2.402 1.958 3.164 1.544 4.129 1.544 C 4.74 1.544 5.329 1.773 5.79 2.186 C 6.241 2.578 6.498 3.143 6.498 3.741 L 6.498 4.144 C 5.833 3.774 4.997 3.578 3.968 3.578 C 2.767 3.578 1.802 3.861 1.084 4.437 C 0.365 5.014 0.001 5.775 0.001 6.743 C -0.021 7.624 0.355 8.461 1.019 9.027 C 1.695 9.636 2.553 9.94 3.56 9.94 C 4.75 9.94 5.694 9.407 6.412 8.342 L 6.487 8.342 L 6.487 9.636 L 8.138 9.636 L 8.138 3.883 C 8.138 2.675 7.774 1.718 7.034 1.033 Z M 2.349 7.917 C 1.995 7.656 1.781 7.232 1.781 6.775 C 1.781 6.264 2.017 5.84 2.478 5.503 C 2.949 5.166 3.539 4.992 4.236 4.992 C 5.201 4.981 5.951 5.199 6.487 5.634 C 6.487 6.373 6.198 7.015 5.63 7.559 C 5.115 8.081 4.418 8.374 3.689 8.374 C 3.207 8.385 2.735 8.222 2.349 7.917 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={9.188} height={13.431} viewBox="0 0 9.188 13.431" fill="none" style={{
            position: "absolute",
            left: 17.176,
            top: 4.308,
            width: 9.188,
            height: 13.431,
            color: "rgb(0,0,0)",
          }}>
            <path d={"M 9.188 0 L 3.42 13.431 L 1.64 13.431 L 3.785 8.733 L 0 0 L 1.876 0 L 4.61 6.699 L 4.642 6.699 L 7.312 0 L 9.188 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 15.131,
          height: 15.661,
          overflow: "hidden",
        }}>
          <svg width={7.409} height={7.352} viewBox="0 0 7.409 7.352" fill="none" style={{
            position: "absolute",
            left: 7.722,
            top: 6.417,
            width: 7.409,
            height: 7.352,
            color: "rgb(66,133,244)",
          }}>
            <path d={"M 7.409 1.588 C 7.409 1.055 7.366 0.522 7.28 0 L 0 0 L 0 3.013 L 4.171 3.013 C 3.999 3.98 3.442 4.851 2.627 5.394 L 2.627 7.352 L 5.114 7.352 C 6.572 5.992 7.409 3.98 7.409 1.588 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12.008} height={6.330} viewBox="0 0 12.008 6.330" fill="none" style={{
            position: "absolute",
            left: 0.828,
            top: 9.332,
            width: 12.008,
            height: 6.33,
            color: "rgb(52,168,83)",
          }}>
            <path d={"M 6.894 6.33 C 8.974 6.33 10.732 5.634 12.008 4.437 L 9.521 2.48 C 8.824 2.958 7.934 3.23 6.894 3.23 C 4.878 3.23 3.174 1.849 2.562 0 L 0 0 L 0 2.023 C 1.308 4.666 3.978 6.33 6.894 6.33 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3.391} height={7.026} viewBox="0 0 3.391 7.026" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 4.318,
            width: 3.391,
            height: 7.026,
            color: "rgb(251,188,4)",
          }}>
            <path d={"M 3.391 5.014 C 3.069 4.046 3.069 2.991 3.391 2.012 L 3.391 0 L 0.828 0 C -0.276 2.208 -0.276 4.818 0.828 7.026 L 3.391 5.014 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12.062} height={6.341} viewBox="0 0 12.062 6.341" fill="none" style={{
            position: "absolute",
            left: 0.828,
            top: 0,
            width: 12.062,
            height: 6.341,
            color: "rgb(234,67,53)",
          }}>
            <path d={"M 6.894 3.1 C 7.998 3.078 9.06 3.502 9.853 4.275 L 12.062 2.034 C 10.657 0.707 8.813 -0.021 6.894 0 C 3.978 0 1.308 1.675 0 4.318 L 2.562 6.341 C 3.174 4.481 4.878 3.1 6.894 3.1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
        backgroundColor: "rgba(255,255,255,0.0001)",
      }} />
      <div style={{
        position: "absolute",
        left: 0.105,
        top: 7.108,
        width: 46.748,
        height: 18.826,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 20.384,
          top: 1.087,
          width: 26.364,
          height: 17.739,
          overflow: "hidden",
        }}>
          <svg width={8.774} height={13.639} viewBox="0 0 8.774 13.639" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8.774,
            height: 13.639,
            color: "var(--neutral-neutral-white)",
          }}>
            <path d={"M 1.726 13.639 L 1.726 8.114 L 4.578 8.114 C 5.747 8.114 6.733 7.722 7.537 6.95 L 7.73 6.755 C 9.199 5.156 9.103 2.665 7.537 1.186 C 6.755 0.403 5.682 -0.021 4.578 0.001 L 0 0.001 L 0 13.639 L 1.726 13.639 Z M 1.726 6.439 L 1.726 1.676 L 4.621 1.676 C 5.243 1.676 5.832 1.915 6.272 2.35 C 7.205 3.263 7.226 4.786 6.326 5.732 C 5.886 6.2 5.264 6.461 4.621 6.439 L 1.726 6.439 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={8.138} height={9.940} viewBox="0 0 8.138 9.940" fill="none" style={{
            position: "absolute",
            left: 8.748,
            top: 4.003,
            width: 8.138,
            height: 9.94,
            color: "var(--neutral-neutral-white)",
          }}>
            <path d={"M 7.034 1.033 C 6.294 0.348 5.287 0 4.011 0 C 2.37 0 1.137 0.609 0.323 1.816 L 1.845 2.784 C 2.402 1.958 3.164 1.544 4.129 1.544 C 4.74 1.544 5.329 1.773 5.79 2.186 C 6.241 2.578 6.498 3.143 6.498 3.741 L 6.498 4.144 C 5.833 3.774 4.997 3.578 3.968 3.578 C 2.767 3.578 1.802 3.861 1.084 4.437 C 0.365 5.014 0.001 5.775 0.001 6.743 C -0.021 7.624 0.355 8.461 1.019 9.027 C 1.695 9.636 2.553 9.94 3.56 9.94 C 4.75 9.94 5.694 9.407 6.412 8.342 L 6.487 8.342 L 6.487 9.636 L 8.138 9.636 L 8.138 3.883 C 8.138 2.675 7.774 1.718 7.034 1.033 Z M 2.349 7.917 C 1.995 7.656 1.781 7.232 1.781 6.775 C 1.781 6.264 2.017 5.84 2.478 5.503 C 2.949 5.166 3.539 4.992 4.236 4.992 C 5.201 4.981 5.951 5.199 6.487 5.634 C 6.487 6.373 6.198 7.015 5.63 7.559 C 5.115 8.081 4.418 8.374 3.689 8.374 C 3.207 8.385 2.735 8.222 2.349 7.917 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={9.188} height={13.431} viewBox="0 0 9.188 13.431" fill="none" style={{
            position: "absolute",
            left: 17.176,
            top: 4.308,
            width: 9.188,
            height: 13.431,
            color: "var(--neutral-neutral-white)",
          }}>
            <path d={"M 9.188 0 L 3.42 13.431 L 1.64 13.431 L 3.785 8.733 L 0 0 L 1.876 0 L 4.61 6.699 L 4.642 6.699 L 7.312 0 L 9.188 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 15.131,
          height: 15.661,
          overflow: "hidden",
        }}>
          <svg width={7.409} height={7.352} viewBox="0 0 7.409 7.352" fill="none" style={{
            position: "absolute",
            left: 7.722,
            top: 6.417,
            width: 7.409,
            height: 7.352,
            color: "rgb(66,133,244)",
          }}>
            <path d={"M 7.409 1.588 C 7.409 1.055 7.366 0.522 7.28 0 L 0 0 L 0 3.013 L 4.171 3.013 C 3.999 3.98 3.442 4.851 2.627 5.394 L 2.627 7.352 L 5.114 7.352 C 6.572 5.992 7.409 3.98 7.409 1.588 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12.008} height={6.330} viewBox="0 0 12.008 6.330" fill="none" style={{
            position: "absolute",
            left: 0.828,
            top: 9.332,
            width: 12.008,
            height: 6.33,
            color: "rgb(52,168,83)",
          }}>
            <path d={"M 6.894 6.33 C 8.974 6.33 10.732 5.634 12.008 4.437 L 9.521 2.48 C 8.824 2.958 7.934 3.23 6.894 3.23 C 4.878 3.23 3.174 1.849 2.562 0 L 0 0 L 0 2.023 C 1.308 4.666 3.978 6.33 6.894 6.33 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3.391} height={7.026} viewBox="0 0 3.391 7.026" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 4.318,
            width: 3.391,
            height: 7.026,
            color: "rgb(251,188,4)",
          }}>
            <path d={"M 3.391 5.014 C 3.069 4.046 3.069 2.991 3.391 2.012 L 3.391 0 L 0.828 0 C -0.276 2.208 -0.276 4.818 0.828 7.026 L 3.391 5.014 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12.062} height={6.341} viewBox="0 0 12.062 6.341" fill="none" style={{
            position: "absolute",
            left: 0.828,
            top: 0,
            width: 12.062,
            height: 6.341,
            color: "rgb(234,67,53)",
          }}>
            <path d={"M 6.894 3.1 C 7.998 3.078 9.06 3.502 9.853 4.275 L 12.062 2.034 C 10.657 0.707 8.813 -0.021 6.894 0 C 3.978 0 1.308 1.675 0 4.318 L 2.562 6.341 C 3.174 4.481 4.878 3.1 6.894 3.1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      color: "var(--content-content-primary)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
      }} />
      <svg width={32} height={8} viewBox="0 0 32 8" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 12,
        width: 32,
        height: 8,
      }}>
        <path d={"M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z M 16 0 C 18.209 0 20 1.791 20 4 C 20 6.209 18.209 8 16 8 C 13.791 8 12 6.209 12 4 C 12 1.791 13.791 0 16 0 Z M 28 0 C 30.209 0 32 1.791 32 4 C 32 6.209 30.209 8 28 8 C 25.791 8 24 6.209 24 4 C 24 1.791 25.791 0 28 0 Z M 4 2 C 2.895 2 2 2.895 2 4 C 2 5.105 2.895 6 4 6 L 4.149 5.994 C 5.184 5.918 6 5.054 6 4 C 6 2.946 5.184 2.082 4.149 2.006 L 4 2 Z M 16 2 C 14.895 2 14 2.895 14 4 C 14 5.105 14.895 6 16 6 L 16.149 5.994 C 17.184 5.918 18 5.054 18 4 C 18 2.946 17.184 2.082 16.149 2.006 L 16 2 Z M 28 2 C 26.895 2 26 2.895 26 4 C 26 5.105 26.895 6 28 6 L 28.149 5.994 C 29.184 5.918 30 5.054 30 4 C 30 2.946 29.184 2.082 28.149 2.006 L 28 2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
      }} />
      <div style={{
          position: "absolute",
          left: 8,
          top: 0,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Icon name="Ic2Card" size={32} style={{ display: "block", color: "var(--content-content-primary)" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 32,
      position: "relative",
      color: "var(--neutral-neutral-white)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 32,
      }} />
      <svg width={32} height={8} viewBox="0 0 32 8" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 12,
        width: 32,
        height: 8,
      }}>
        <path d={"M 4 0 C 6.209 0 8 1.791 8 4 C 8 6.209 6.209 8 4 8 C 1.791 8 0 6.209 0 4 C 0 1.791 1.791 0 4 0 Z M 16 0 C 18.209 0 20 1.791 20 4 C 20 6.209 18.209 8 16 8 C 13.791 8 12 6.209 12 4 C 12 1.791 13.791 0 16 0 Z M 28 0 C 30.209 0 32 1.791 32 4 C 32 6.209 30.209 8 28 8 C 25.791 8 24 6.209 24 4 C 24 1.791 25.791 0 28 0 Z M 4 2 C 2.895 2 2 2.895 2 4 C 2 5.105 2.895 6 4 6 L 4.149 5.994 C 5.184 5.918 6 5.054 6 4 C 6 2.946 5.184 2.082 4.149 2.006 L 4 2 Z M 16 2 C 14.895 2 14 2.895 14 4 C 14 5.105 14.895 6 16 6 L 16.149 5.994 C 17.184 5.918 18 5.054 18 4 C 18 2.946 17.184 2.082 16.149 2.006 L 16 2 Z M 28 2 C 26.895 2 26 2.895 26 4 C 26 5.105 26.895 6 28 6 L 28.149 5.994 C 29.184 5.918 30 5.054 30 4 C 30 2.946 29.184 2.082 28.149 2.006 L 28 2 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: type=apple, dark=false
    "type=apple|dark=false": __body0,
    // figma: type=apple, dark=true
    "type=apple|dark=true": __body1,
    // figma: type=master, dark=false
    "type=master|dark=false": __body2,
    // figma: type=master, dark=true
    "type=master|dark=true": __body2,
    // figma: type=google, dark=false
    "type=google|dark=false": __body3,
    // figma: type=google, dark=true
    "type=google|dark=true": __body4,
    // figma: type=more, dark=false
    "type=more|dark=false": __body5,
    // figma: type=card, dark=false
    "type=card|dark=false": __body6,
    // figma: type=more, dark=true
    "type=more|dark=true": __body7,
    // figma: type=card, dark=true
    "type=card|dark=true": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaymentMethod;
