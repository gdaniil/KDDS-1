import icons from './icon-data.js';

export function Icon({ name, size = 24, ...rest }) {
  const d = icons[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox={d.viewBox}
      fill="none"
      // body strings come from the system's own icon-data.js: SVG geometry,
      // fills, strokes and masks only.
      dangerouslySetInnerHTML={{ __html: d.body }}
      {...rest}
    />
  );
}
export default Icon;
