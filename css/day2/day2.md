Color Models: How HSL, RGB(A), and Hex notations define colors in CSS, with practical use‑cases.

Selector Combinators: Targeting elements based on DOM relationships (descendant, child, sibling).

Combinator | Syntax | Meaning
Descendant | A B | Any B inside A
Child | A > B | Direct children only
Adj. sib. | A + B | B immediately after A
Gen. sib. | A ~ B | Any B after A at the same level

```
/* Descendant */
ul li { color: #333; }
/* Child */
ul > li { font-weight: bold; }
/* Adjacent sibling */
li.highlight + li { text-decoration: underline; }
/* General sibling */
li.highlight ~ li { opacity: 0.6; }
```

CSS Units: Absolute vs. relative units (px, em, rem, %, vh, vw, fr, etc.) and when to use each.



Text Styling: Controlling typography—fonts, sizing, spacing, decoration, and transformation.

Box Model: Understanding content, padding, border, margin, outline, and sizing properties.

Display Properties: How display shapes layout (block, inline, inline-block, flex, grid, none).

