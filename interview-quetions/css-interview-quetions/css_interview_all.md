  

* * *

# ✅ 1. What is CSS and its purpose?

**Answer:**  
CSS (Cascading Style Sheets) is used to style and design web pages. It controls colors, fonts, spacing, layout, and positioning of HTML elements.

* * *

# ✅ 2. Difference between inline and block elements?

**Inline:**

-   Does not start on new line
    
-   Takes only required width  
    Example: `<span>`, `<a>`
    

**Block:**

-   Starts on new line
    
-   Takes full width  
    Example: `<div>`, `<p>`
    

* * *

# ✅ 3. What is the CSS Box Model?

**Answer:**  
Box model consists of:

1.  Content
    
2.  Padding
    
3.  Border
    
4.  Margin
    

It defines space around elements.

* * *

# ✅ 4. How to center a div horizontally and vertically?

**Horizontal:**

    margin: 0 auto;
    

**Both directions (best):**

    display: flex;
    justify-content: center;
    align-items: center;
    

* * *

# ✅ 5. What is a CSS selector?

**Answer:**  
Selectors target HTML elements for styling.

Examples:

    h1 {}
    .class {}
    #id {}
    

* * *

# ✅ 6. What is specificity in CSS?

**Answer:**  
Specificity decides which CSS rule applies when multiple rules target the same element.

Priority order:

    Inline > ID > Class > Tag
    

* * *

# ✅ 7. How to create gradient background?

    background: linear-gradient(to bottom, yellow, orange);
    

* * *

# ✅ 8. Difference between display: none and visibility: hidden?

| Property | Behavior |
| --- | --- |
| display: none | Element removed from layout |
| visibility: hidden | Element hidden but space remains |

* * *

# ✅ 9. How to include external CSS?

    <link rel="stylesheet" href="style.css">
    

* * *

# ✅ 10. What is box-shadow?

Adds shadow around element.

    box-shadow: 2px 2px 5px gray;
    

* * *

# ✅ 11. What is font-family?

Defines text font.

    font-family: Arial, sans-serif;
    

* * *

# ✅ 12. Serif vs Sans-serif?

-   Serif → decorative edges (Times New Roman)
    
-   Sans-serif → clean edges (Arial)
    

* * *

# ✅ 13. What is font-size?

Sets text size.

    font-size: 20px;
    

* * *

# ✅ 14. What is font-weight?

Controls boldness.

    font-weight: bold;
    

* * *

# ✅ 15. How to make text italic?

    font-style: italic;
    

* * *

# ✅ 16. What is font-variant?

Controls small caps.

    font-variant: small-caps;
    

* * *

# ✅ 17. What is line-height?

Space between lines.

    line-height: 1.5;
    

* * *

# ✅ 18. Vertical align property?

Aligns inline elements vertically.

    vertical-align: middle;
    

* * *

# ✅ 19. What is text-transform?

Controls capitalization.

    text-transform: uppercase;
    

* * *

# ✅ 20. How to add text shadow?

    text-shadow: 2px 2px 5px gray;
    

* * *

# ✅ 21. Difference between display: block, inline, inline-block?

**Block:** full width  
**Inline:** only content width  
**Inline-block:** inline + width/height allowed

* * *

# ✅ 22. What is float?

Moves element left or right.

    float: left;
    

Used for layouts (older method).

* * *

# ✅ 23. What is position property?

Controls element position.

Types:

-   static
    
-   relative
    
-   absolute
    
-   fixed
    
-   sticky
    

* * *

# ✅ 24. Relative vs Absolute?

**Relative:**

-   Moves from original position
    

**Absolute:**

-   Moves relative to nearest positioned parent
    

* * *

# ✅ 25. Responsive layout using media queries?

    @media (max-width: 768px) {
      body {
        background: red;
      }
    }
    

* * *

# ✅ 26. What is z-index?

Controls stacking order.

Higher value = on top.

    z-index: 10;
    

* * *

# ✅ 27. What is Flexbox?

Flexbox is a layout system for aligning and distributing space inside a container.

* * *

# ✅ 28. How to create flex container?

    display: flex;
    

* * *

# ✅ 29. Default flex direction?

Default = row

Change:

    flex-direction: column;
    

* * *

# ✅ 30. Distribute space between items?

    justify-content: space-between;
    

* * *

# ✅ 31. flex-grow, flex-shrink, flex-basis?

-   flex-grow → item grows
    
-   flex-shrink → item shrinks
    
-   flex-basis → initial size
    

* * *

# ✅ 32. Center items using Flexbox?

    display: flex;
    justify-content: center;
    align-items: center;
    

* * *

# ✅ 33. flex vs auto (flex-basis)?

    flex: 1 → grow & shrink equally
    auto → based on content size
    

* * *

# ✅ 34. Responsive navbar using Flexbox?

Use:

    display: flex;
    flex-direction: row;
    

Mobile:

    flex-direction: column;
    

* * *

# ✅ 35. flex-wrap property?

Controls wrapping.

    flex-wrap: wrap;
    

Values:

-   nowrap
    
-   wrap
    
-   wrap-reverse
    

* * *

# ✅ ⭐ Most Important Interview Topics From This

If limited time, focus:

1.  Box model
    
2.  Position
    
3.  Flexbox
    
4.  Specificity
    
5.  Media queries
    
6.  display property
    
7.  z-index
    

* * *

#