## Module 1: CSS Fundamentals  
- **Introduction to CSS**: Explain what CSS is, how it links to HTML via `<link>` and `<style>` tags, and the role of selectors, properties, and values .  
- **Syntax and Cascade**: Cover rule-set structure (`selector { property: value; }`), cascading order (inline > ID > class > element), and specificity calculations .  
- **Comments and Formatting**: Teach how to write comments (`/* comment */`) and best practices for organizing stylesheets for readability.  
- **Exercise**: Create a simple stylesheet to style headings and paragraphs in a provided HTML page.  

## Module 2: Selectors Deep Dive  
- **Basic Selectors**: Element, class, ID, universal selectors, and grouping selectors   
- **Combinators & Pseudo‑classes**: Descendant (` `), child (`>`), adjacent sibling (`+`), general sibling (`~`), and pseudo‑classes like `:hover`, `:nth-child()`.  
- **Attribute Selectors**: Matching by attribute presence/value (`[attr]`, `[attr="value"]`)   
- **Exercise**: Style a navigation menu using various selector types.  

## Module 3: The Box Model  
- **Content, Padding, Border, Margin**: Teach how each part contributes to element dimensions and how `box-sizing: border-box;` alters calculations .  
- **Width, Height, and Overflow**: Explain fixed vs. auto sizing, and `overflow: hidden/scroll/auto`   
- **Exercise**: Build a card component that correctly spaces and sizes content.  

## Module 4: Text, Fonts, and Colors  icons
- **Typography Properties**: `font-family`, `font-size`, `line-height`, `font-weight`, and web fonts via `@font-face`.  
- **Color Models**: Hex, RGB(A), HSL(A), and currentColor keyword .  
- **Text Effects**: `text-shadow`, `letter-spacing`, `word-spacing`.  
- **Exercise**: Replicate a blog post header style with custom fonts and colors.  

## Module 5: Backgrounds & Borders  
- **Background Properties**: `background-color`, `background-image`, `background-size`, `background-position`, `background-repeat`   
- **Border Styling**: `border-width`, `border-style`, `border-radius`, and using shorthand syntax   
- **Exercise**: Create a hero section with a full‑width background image and rounded‑corner buttons.  

## Module 6: Layout Basics  
- **Display Types**: `block`, `inline`, `inline-block`, `none`, and their default behaviors .  
- **Positioning**: Static, relative, absolute, fixed, and sticky positioning with examples of each   
- **Exercise**: Position a floating sidebar and a sticky header.  

## Module 7: Flexbox  
- **Flex Container & Items**: `display: flex;`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`.  
- **Flex Properties**: `flex-grow`, `flex-shrink`, `flex-basis`, and shorthand `flex`.  
- **Interactive Game**: Assign Flexbox Froggy to reinforce concepts in a playful way.  
- **Exercise**: Build a responsive card grid using flexbox.  

## Module 8: CSS Grid  
- **Grid Container & Items**: `display: grid;`, grid-template-rows/columns, `grid-gap`, `grid-auto-flow`.  
- **Placement & Spanning**: `grid-column-start/end`, `grid-row-start/end`, and shorthand `grid-area`.  
- **Interactive Game**: Use Grid Garden to practice grid concepts hands‑on.  
- **Exercise**: Create a magazine‑style layout with CSS Grid.  

## Module 9: Responsive Design  
- **Media Queries**: Syntax (`@media (max-width: 600px) { … }`), mobile‑first vs. desktop‑first approaches.  
- **Fluid Units**: `%`, `vw`, `vh`, `rem`, and `em` best use cases.  
- **Responsive Images & Videos**: `max-width: 100%`, aspect‑ratio preservation.  
- **Exercise**: Convert a fixed‑width page to a fully responsive design.  

## Module 10: Transitions & Animations  
- **Transitions**: `transition-property`, `transition-duration`, `transition-timing-function`.  
- **Keyframe Animations**: `@keyframes`, `animation-name`, `animation-duration`, `animation-iteration-count`.  
- **Exercise**: Animate a loading spinner and hover effects on buttons.  

## Module 11: Advanced Topics  
- **CSS Variables (Custom Properties)**: `--main-color: #3498db;`, `var(--main-color)` usage.  
- **Preprocessors Overview**: Introduction to Sass/LESS syntax and features (nesting, mixins, variables).  
- **Tooling**: Setting up a build process with npm scripts or task runners (e.g., Gulp) for preprocessing.  
- **Exercise**: Refactor an existing stylesheet to use CSS variables and a simple Sass mixin.  

## Module 12: Debugging & Best Practices  
- **DevTools Mastery**: Inspecting elements, live‑editing styles, performance panel for rendering issues.  
- **Accessibility & Semantics**: Ensuring sufficient contrast, `:focus` styles, and logical reading order.  
- **Optimization**: Minification, combining files, and critical‑CSS strategies citeturn0news102.  
- **Exercise**: Audit and optimize a slow‑loading CSS file.  

## Module 13: Inspiration & Creativity  
- **CSS Zen Garden**: Explore varied design submissions to appreciate the power of CSS separation of concerns.  
- **CSS1K Challenge**: Introduce the CSS1K constraint to encourage minimal, efficient styling citeturn0news102.  
- **Showcase**: Let students submit and review each other’s small CSS experiments.  

## Module 14: Capstone Project & Assessment  
- **Project Brief**: Build a multi‑page responsive website of your choice (e.g., portfolio, blog, product landing page) incorporating all learned CSS features.  
- **Peer Review & Presentation**: Students present their sites, critique on code quality, responsiveness, and design aesthetics.  
- **Final Quiz & Reflection**: Test deep understanding of selectors, layout, and advanced features, followed by group discussion on challenges and takeaways.  
