import { Icon } from '../../assets/icons/Icon.jsx';

// Figma icon_service 3942:1214. The faq disc is #EEEEEE in Figma; background-bg-subtle (#F1F1F1) is used so it follows the theme.
export function ServiceIcon({ icon = "Ic2Tk", type = "default", className, style }) {
  if (type === "faq") {
    return (
      <span className={className} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 32, height: 32,
        borderRadius: "var(--radius-pill)", flexShrink: 0, backgroundColor: "var(--background-bg-subtle)", color: "var(--content-content-primary)", ...style }}>
        <Icon name={icon} size={20} style={{ display: "block" }} />
      </span>
    );
  }
  return (
    <span className={className} style={{ display: "inline-flex", width: 24, height: 24, flexShrink: 0,
      color: type === "link" ? "var(--content-content-link)" : "var(--content-content-primary)", ...style }}>
      <Icon name={icon} size={24} style={{ display: "block" }} />
    </span>
  );
}
export default ServiceIcon;
