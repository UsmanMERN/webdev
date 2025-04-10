## Assignment 1: Boilerplate & Basic Structure  
**Objective:** Make sure every student can create a valid HTML document from scratch.  
1. **Create** a new file named `day1-structure.html`.  
2. **Include** the HTML5 doctype and the basic `<html lang="en">`, `<head>`, and `<body>` tags.  
3. **Within** `<head>`, add:  
   - `<meta charset="UTF-8">`  
   - `<title>` “Day 1 Structure” `</title>`  
4. **Inside** `<body>`, add an `<h1>` with the text “My First HTML Page” and a `<p>` with a brief description of yourself.  
5. **Save** and open it in the browser—take a screenshot and submit it alongside your HTML file.

---

## Assignment 2: Headings, Paragraphs & Reading Docs  
**Objective:** Practice semantic hierarchy and documentation lookup.  
1. **Choose** a short news article or blog post (100–150 words).  
2. **In** a file named `day1-text.html`, mark it up with:  
   - A single `<h1>` for the title.  
   - One or more `<h2>` subheadings (if the text has logical sections).  
   - `<p>` for each paragraph, and `<br>` only if you need a forced line break.  
3. **Pick** one of the HTML tags you used (e.g., `<h2>` or `<p>`) and **look it up** on MDN Web Docs.  
4. **Write** a 2–3 sentence summary of that tag’s most important attributes or best practices as a comment at the top of your HTML file.  

---

## Assignment 3: Text Formatting & Global Attributes  
**Objective:** Apply inline formatting and use global attributes.  
1. **In** your `day1-text.html` (or a new file `day1-format.html`), take one paragraph of text.  
2. **Within** that paragraph:  
   - Wrap one word in `<strong>`, another in `<em>`, and another in `<mark>`.  
   - Add a `title` attribute to the `<p>` (e.g., `title="This is a tooltip"`).  
   - Add a custom data attribute to the `<p>`, e.g., `data-author="YourName"`.  
3. **Add** an `id="intro"` to the paragraph and a `class="highlight"` to the `<strong>` element.  
4. **Validate** your HTML with the W3C Validator (https://validator.w3.org/) and fix any errors.

---

## Assignment 4: CSS & Color Formats  
**Objective:** Practice including CSS and using different color notations.  
1. **Create** a stylesheet named `day1-styles.css`.  
2. **In** your `day1-structure.html`:  
   - Link to `day1-styles.css` via `<link rel="stylesheet" href="day1-styles.css">`.  
3. **In** `day1-styles.css`, write rules to:  
   - Set `body { background-color: #f2f2f2; }`  
   - Style all `<h1>` elements with `color: rgb(0, 51, 102);`  
   - Style all `<p>` elements with `color: hsl(0, 0%, 20%);` and `line-height: 1.6;`  
4. **Open** your page and verify the styles apply correctly.

---

## Assignment 5: Links & Images  
**Objective:** Embed navigational links and accessible images.  
1. **In** a new file `day1-media.html`:  
   - Add a `<nav>` containing three `<a>` links: one to your Day 1 “structure” page, one to your “text” page, and one to any external site (e.g., https://developer.mozilla.org). Use `target="_blank"` and `rel="noopener noreferrer"` on the external link.  
2. **Below** the `<nav>`, insert an `<img>` of your choice (e.g., a logo or photo):  
   - Use a local file or an external URL.  
   - Include a meaningful `alt` attribute.  
   - Add `loading="lazy"`.  
3. **Bonus:** Use `srcset` to provide two image resolutions (e.g., `small.jpg 480w, large.jpg 960w`) and a `sizes` attribute.

---

## Day 1 Mini‑Project (Combine Modules 1–5)  
**Objective:** Bring it all together in a single “About Me” page.  
- **File:** `about-me.html` + `about-me.css`.  
- **Requirements:**  
  - Proper HTML5 boilerplate.  
  - At least one heading hierarchy (`<h1>` through `<h3>`).  
  - Formatted text (`<strong>`, `<em>`, etc.) with global attributes (`id`, `class`, `data-*`).  
  - Linked CSS that sets background, heading, and paragraph colors.  
  - A navigation menu linking to two other pages.  
  - At least two images with `alt` text and `loading="lazy"`.  
- **Deliverables:**  
  - HTML and CSS files.  
  - A short write‑up (in a comment or separate TXT) describing which global attributes you used and why.  
  - A screenshot or live URL (if hosted).

---

### Submission & Review  
- **Due:** Before Day 2 begins.  
- **Peer Review:** Swap with a partner, validate each other’s code, and leave one suggestion for improvement.  