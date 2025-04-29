## 1. Color Models  

### 1.1 Hexadecimal Colors  
Hex colors are written as `#RRGGBB` (or the short form `#RGB`), where each pair/character represents the red, green, and blue channels in two-digit hexadecimal (00–FF). You can also include alpha as `#RRGGBBAA` for transparency in supporting browsers.  
**Real-world example**: A brand’s primary blue might be `#1E90FF`, ensuring exact color reproduction across web and print.

### 1.2 RGB(A) Colors  
The `rgb()` function takes three values (0–255) or percentages to define red, green, and blue. To include transparency, use `rgba(r, g, b, a)` where `a` is 0.0–1.0.  
```css
/* Semi-transparent red overlay */
.overlay {
  background-color: rgba(255, 0, 0, 0.3);
}
```

### 1.3 HSL(A) Colors  
The `hsl()` function uses a hue angle (0°–360°), plus saturation and lightness percentages to define color. The `hsla()` variant adds an alpha channel for transparency.  
```css
/* Softer green using HSL */
.alert {
  background-color: hsl(120, 50%, 80%);
}
```
HSL is often easier when you need to adjust brightness or saturation programmatically.

---

## 2. Selectors and Combinators  

### 2.1 Basic Selectors  
- **Type selector** (`h1`) targets all `<h1>` elements  
- **Class selector** (`.btn`) matches any element with `class="btn"`  
- **ID selector** (`#header`) matches the element with that exact ID  
- **Universal selector** (`*`) matches every element  
- **Grouping selector** (`h1, .title`) applies to both groups.  

### 2.2 Combinators  
- **Descendant**: `ul li` selects any `<li>` inside a `<ul>`  
- **Child**: `ul > li` selects direct `<li>` children of `<ul>`  
- **Adjacent sibling**: `h2 + p` selects the first `<p>` immediately after an `<h2>`  
- **General sibling**: `h2 ~ p` selects all `<p>` that follow an `<h2>` on the same level.  

### 2.3 Pseudo-selectors  
- **Pseudo-classes** (states): e.g., `:hover`, `:first-child`, `:nth-child(2)`.  
- **Pseudo-elements** (parts): e.g., `::before`, `::after`, `::first-letter`.  
```css
/* Highlight text on hover */
a:hover {
  text-decoration: underline;
}
/* Add decorative quote before blockquote */
blockquote::before {
  content: "“";
}
```

### 2.4 Attribute Selectors  
- `[attr]` any element with that attribute  
- `[attr="value"]` exact match  
- `[attr^="start"]` begins with  
- `[attr$="end"]` ends with  
- `[attr*="mid"]` contains substring.  
```css
/* Style only external links */
a[target="_blank"] {
  color: #1E90FF;
}
```

---

## 3. CSS Units  

### 3.1 Absolute Units  
- **px** (pixels), **pt** (points), **cm**, **in**: Fixed sizes unaffected by user settings, best for print media or very precise controls.

### 3.2 Relative Units  
- **%** relative to parent dimension  
- **em** relative to the font-size of the current element  
- **rem** relative to the root (`<html>`) font-size  
- **vw**, **vh** relative to viewport width/height.  

**Tip**: Use `rem` for consistent scaling across the page, `%` for fluid layouts, and `vw`/`vh` for full-screen sections.

---

## 4. Text Styling  

### 4.1 Typography Properties  
- `font-family`: fallback stacks, e.g., `"Helvetica Neue", Arial, sans-serif`  
- `font-size`: absolute (px) or relative (em/rem)  
- `font-weight`: `normal`/`bold` or numeric `100–900`  
- `font-style`: `italic`, `oblique`.

### 4.2 Spacing & Decoration  
- `line-height` controls vertical rhythm  
- `letter-spacing`, `word-spacing` adjust tracking  
- `text-align`: `left`, `center`, `justify`  
- `text-decoration`: `underline`, `overline`, `line-through`  
- `text-transform`: `uppercase`, `capitalize`  
- `text-shadow`: adds depth, e.g., `2px 2px 4px rgba(0,0,0,0.2)`.  

```css
h2 {
  font-family: Georgia, serif;
  font-size: 2rem;
  line-height: 1.3;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}
```

---

## 5. Box Model  

### 5.1 Content, Padding, Border, Margin  
Every element is a box comprised of:  
1. **Content**: The actual text or media  
2. **Padding**: Inner space around content  
3. **Border**: Edge around padding (shorthand via `border`)  
4. **Margin**: Outer space separating boxes.  

### 5.2 Width, Height & `box-sizing`  
By default, `width`/`height` apply only to the content box. With `box-sizing: border-box;`, they include padding and border, simplifying responsive layouts.  
```css
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #ccc;
}
```

### 5.3 Outline vs. Border  
- **Border** occupies layout space and can be styled per-side (`border-top`, etc.).  
- **Outline** draws outside the border without affecting flow; cannot target individual sides.  
```css
button:focus {
  outline: 3px dashed #1E90FF;
}
```

---

## 6. Display Properties  

### 6.1 `inline` vs `block` vs `inline-block`  
- **inline**: Flows with text, width/height ignored (e.g., `<span>`)  
- **block**: Takes full width, starts on new line (e.g., `<div>`)  
- **inline-block**: Behaves like inline but accepts width/height.  
```css
.nav-item {
  display: inline-block;
  width: 150px;
  text-align: center;
}
```

### 6.2 `display: none`  
Completely removes an element from layout and accessibility tree, useful for toggling UI components.  
```css
.modal {
  display: none; /* hidden by default */
}
```

---

## Assignment  
Create a **multi-section landing page** (`index.html` + `styles.css`) that incorporates all the above concepts:

1. **Header** with a navigation bar using **class** selectors and **inline-block** items.  
2. A **hero section** styled with an **HSL** background and an **RGBA** overlay.  
3. A **features card** using **inline-block** with cards sized in **rem** units and styled via **hex** borders.  
4. Each card must include:
   - A title styled with `text-shadow`, `font-family`, and **pseudo-element** `::before`.  
   - A description paragraph with `line-height` and `letter-spacing`.  
   - A link styled via an **attribute selector** `[href^="https"]` and a **pseudo-class** `:hover`.  
5. Apply **box-sizing: border-box** globally, and demonstrate both **border** and **outline** on different buttons.  