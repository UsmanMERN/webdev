## 1. What Is CSS?  
CSS (Cascading Style Sheets) is a **stylesheet language** used to describe the **presentation** of HTML or XML documents, controlling layout, colors, fonts, and more.  
It allows you to **separate** content (HTML) from design (CSS), making maintenance and reuse far easier.  

### Example  
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS Demo</title>
  <style>
    /* Style applied to all <h1> elements */
    h1 { color: #2c3e50; font-family: Arial, sans-serif; }
  </style>
</head>
<body>
  <h1>Welcome to CSS!</h1>
  <p>This text is unstyled HTML.</p>
</body>
</html>
```  

---

## 2. Syntax and Cascade  
### 2.1 CSS Syntax  
A **rule set** comprises a **selector** and a **declaration block**:  
```css
selector {
  property: value;
  /* multiple declarations separated by semicolons */
}
```  
Each declaration ends with a semicolon, and the block is enclosed in curly braces.

### Example  
```html
<style>
  /* Type selector (least specific) */
  p { color: blue; }  

  /* Class selector (more specific) */
  .highlight { color: orange; }  

  /* Inline style (most specific) */
</style>
<p class="highlight" style="color: green;">
  Which color applies?
</p>
<!-- Result: green (inline style) -->
```  

---

## 3. Comments and Formatting  
### 3.1 Comments  
Use `/* ... */` to annotate CSS. Comments are **ignored** by the browser but invaluable for explaining logic.  

```css
/* Main navigation styles */
nav { 
  display: flex; 
  /* Align items horizontally */
  align-items: center;
}
```

### 3.2 Formatting Best Practices  
- **Indent** declarations for readability.  
- Place **comments** on lines before the relevant code.  
- Group related properties together (e.g., layout vs. typography).  

---

## 4. CSS Selectors  
Selectors target elements to apply rules.  

| Selector      | Matches                            |
|---------------|------------------------------------|  
| `h1`          | All `<h1>` elements                |  
| `.btn`        | Any element with class="btn"       |  
| `#header`     | Element with id="header"           |  
| `*`           | Every element                      |  
| `h2, .title`  | All `<h2>` and all `.title` items  | .  

### Combinators  
- Descendant: `ul li` (any `<li>` inside `<ul>`)  
- Child: `ul > li` (direct children only)  
- Adjacent sibling: `h1 + p` (first `<p>` after an `<h1>`)  
- General sibling: `h1 ~ p` (all `<p>` after an `<h1>`).  

### Example  
```css
/* Style all list items within any <ul> */
ul li {
  margin-bottom: 0.5em;
}
/* Highlight direct children */
ul > li {
  font-weight: bold;
}
```  

---

## 6. How to Apply CSS  
1. **Inline**: Directly in an element’s `style` attribute  
   ```html
   <p style="color: red;">Red text</p>
   ``` .  
2. **Internal**: Within a `<style>` block in the HTML’s `<head>`  
   ```html
   <style>
     body { background: #f9f9f9; }
   </style>
   ```  
3. **External**: In a separate `.css` file linked via `<link>`  
   ```html
   <link rel="stylesheet" href="styles.css">

---

## 7. Coloring Systems  
### 7.1 Color Models  
- **Named colors**: e.g., `tomato`, `lightblue`  
- **Hexadecimal**: `#RRGGBB` or `#RGB`  
- **RGB(A)**: `rgb(255,0,0)` or `rgba(255,0,0,0.5)`  
- **HSL(A)**: `hsl(120, 60%, 50%)` or `hsla(120,60%,50%,0.3)`.  

### 7.2 Applying Color  
```css
body {
  background-color: #f0f8ff;    /* hexadecimal */
  color: rgb(44, 62, 80);       /* rgb */
}
a {
  color: hsl(200, 80%, 50%);
}
```  

---

## 8. Text Styling  
### 8.1 Font Properties  
- `font-family`: e.g., `font-family: "Arial", sans-serif;`  
- `font-size`: e.g., `font-size: 1.2rem;`  
- `font-weight`: `normal`, `bold`, or numeric (100–900)  
- `font-style`: `normal`, `italic`, `oblique`.  

### 8.2 Spacing & Alignment  
- `line-height`: controls vertical spacing  
- `letter-spacing`, `word-spacing`: adjust tracking/kern  
- `text-align`: `left`, `right`, `center`, `justify`  

### 8.3 Decoration & Transformation  
- `text-decoration`: underlines, overlines, line-through  
- `text-transform`: `uppercase`, `lowercase`, `capitalize`  
- `text-shadow`: e.g., `text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`.  

### Example  
```css
h2 {
  font-family: "Georgia", serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}
p {
  font-family: "Verdana", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```  