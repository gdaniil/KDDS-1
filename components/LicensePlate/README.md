The Ukrainian licence-plate input: the typed characters in ink, the rest of the `XX0000XX` template greyed.

**Use it for** adding or finding a car by its plate.

**You provide** `value` + `onChange`, or `defaultValue`; `region` for the country code on the blue strip (default `UA`).

- Input, `value` and `defaultValue` are uppercased and limited to 8 letters and digits; Ukrainian letters that look Latin are accepted.
- The focused look follows real focus; `focused` forces it.
- It keeps its own width: centre it or align it left in the column, don't stretch it.
- Validate the format yourself and show the error in a `footnote` in `content-content-negative` under it.
