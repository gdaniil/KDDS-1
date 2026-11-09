A filled status pill: one status word with an optional 16px glyph, 24px tall, hugging its label.

**Use it for** the one urgent state on a card: «Відхилено», «Закінчується», «до 15:00 немає світла», and small labels such as «бета». For a quiet state line with a dot, use `Tag type="status"`; for a choice the person taps, use `Chip`.

**You provide** `label` and a `tone`; optionally `icon` (an `ic2_*` name or a node).

| `tone` | Figma type | Fill | Use for |
|---|---|---|---|
| `accent` (default) | default | `background-bg-accent` | In progress, new, beta |
| `neutral` | neutral | `background-bg-subtle`, secondary ink | Draft, archived, no action needed |
| `positive` | success | `background-bg-positive` | Confirmed, valid, done |
| `warning` | alert | `background-bg-warning` | Ends soon, needs attention |
| `negative` | error | `background-bg-negative` | Rejected, expired, failed |
| `dark` | dark | `chart-chart-power-off` | The «no power» state |

- Label is `caption1-emphasized` (12/16, 590) in `content-primary-invert`; padding `space-1` / `space-2`, `radius-pill`.
- In a card it sits at the start of the row, never stretched. One badge per card: several states go in status rows.
- Contrast is as drawn in Figma and short for small text on `positive` (2.1:1) and `warning` (3.5:1), and `dark` is faint on a dark-theme card. The label is the status word, so the state is never colour alone; keep labels short and don't use these tones for anything else.

Don't use a badge as a button, or put two badges side by side to say one thing.
