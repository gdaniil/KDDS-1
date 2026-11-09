// Figma 4078:9699 div: a 1px line in border-border-regular that fills its container (327px in the frame = a 343px card
// minus its padding). `inset` starts it after the side margin (space-4), as between rows that share a block.
export function Divider({ inset = false, className, style, ...rest }) {
  return (
    <div role="separator" {...rest} className={className} style={{
      flexShrink: 0, height: 1, width: inset ? "auto" : "100%", marginLeft: inset ? "var(--space-4)" : undefined,
      alignSelf: "stretch", backgroundColor: "var(--border-border-regular)", ...style,
    }} />
  );
}
