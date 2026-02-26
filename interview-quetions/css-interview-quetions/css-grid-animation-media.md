  

* * *

# 📘 CSS Grid + CSS Animations + Media Queries

* * *

# 🟦 PART 1 — CSS GRID

## 1️⃣ What is CSS Grid? How is it different from Flexbox?

**CSS Grid**

-   2-dimensional layout system (rows + columns)
    
-   Best for full page layouts
    

**Flexbox**

-   1-dimensional layout (row OR column)
    
-   Best for alignment of items in a line
    

👉 Shortcut:

> Grid = Layout  
> Flexbox = Alignment

* * *

## 2️⃣ How do you define a grid container?

    .container {
      display: grid;
    }
    

OR

    .container {
      display: inline-grid;
    }
    

* * *

## 3️⃣ Difference between grid rows and columns

-   **Rows** → Horizontal lines
    
-   **Columns** → Vertical lines
    

Defined using:

    grid-template-rows
    grid-template-columns
    

* * *

## 4️⃣ How to place an item in a specific grid cell?

Use:

    grid-row
    grid-column
    

Example:

    .item {
      grid-row: 2 / 3;
      grid-column: 2 / 4;
    }
    

* * *

## 5️⃣ What does grid-gap do?

Adds spacing between rows and columns.

    .container {
      gap: 10px;
    }
    

(Modern property = `gap`)

* * *

## 6️⃣ Equal width columns grid?

Use `repeat()` with `fr`.

    grid-template-columns: repeat(3, 1fr);
    

* * *

## 7️⃣ Purpose of grid-auto-flow

Controls how items fill the grid automatically.

Values:

-   `row` (default)
    
-   `column`
    
-   `dense`
    

Example:

    grid-auto-flow: column;
    

* * *

## 8️⃣ Center item horizontally and vertically in grid?

    .item {
      justify-self: center;
      align-self: center;
    }
    

Shortcut:

    place-items: center;
    

* * *

## 9️⃣ What is grid-template-areas?

Used to create **named layout areas**.

Example:

    .container {
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    }
    
    .header {
      grid-area: header;
    }
    

* * *

## 🔟 Responsive grid layout using CSS Grid?

Use `auto-fit` or `auto-fill`.

    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    

Very important interview concept ⭐

* * *

# 🟦 PART 2 — CSS ANIMATIONS & TRANSITIONS

## 1️⃣ Key components of CSS animation

Important properties:

-   `@keyframes`
    
-   `animation-name`
    
-   `animation-duration`
    
-   `animation-timing-function`
    
-   `animation-delay`
    
-   `animation-iteration-count`
    
-   `animation-direction`
    
-   `animation-fill-mode`
    
-   `animation-play-state`
    

Example:

    @keyframes slide {
      from { transform: translateX(0); }
      to { transform: translateX(100px); }
    }
    
    .box {
      animation: slide 2s ease infinite;
    }
    

* * *

## 2️⃣ Smooth transition between two states?

Use `transition`.

    button {
      transition: background 0.3s ease;
    }
    
    button:hover {
      background: red;
    }
    

* * *

## 3️⃣ Difference between Transitions vs Animations

### CSS Transitions

-   Triggered by events (hover, click)
    
-   Simple property change
    
-   Easy to use
    

### CSS Animations

-   Uses keyframes
    
-   More powerful
    
-   Can run automatically
    
-   Complex motion possible
    

👉 Interview Tip:

> Transition = From A → B  
> Animation = Multiple steps timeline

* * *

## 4️⃣ Why CSS transitions are useful?

-   Improve UX
    
-   Smooth effects
    
-   No JavaScript required
    
-   Lightweight performance
    

* * *

## 5️⃣ Key properties of transition

3 main:

    transition-property
    transition-duration
    transition-timing-function
    

Shortcut:

    transition: all 0.3s ease;
    

* * *

## 6️⃣ Delay before transition starts?

Use:

    transition-delay: 2s;
    

Example:

    transition: background 0.3s ease 2s;
    

* * *

# 🟦 PART 3 — MEDIA QUERIES (RESPONSIVE DESIGN)

## 7️⃣ What are media queries?

Media queries allow CSS to change based on:

-   Screen width
    
-   Device type
    
-   Resolution
    
-   Orientation
    

Example:

    @media (max-width: 600px) {
      body {
        background: lightblue;
      }
    }
    

* * *

## 8️⃣ Common media query breakpoints

Typical industry values:

-   Mobile → `max-width: 767px`
    
-   Tablet → `768px – 1023px`
    
-   Desktop → `min-width: 1024px`
    

* * *

## 9️⃣ Responsive navbar → hamburger menu?

Steps:

1.  Hide menu on small screen
    
2.  Show hamburger icon
    
3.  Toggle menu using JS
    

Example CSS:

    .menu {
      display: flex;
    }
    
    @media (max-width: 767px) {
      .menu {
        display: none;
      }
    
      .menu-toggle {
        display: block;
      }
    }
    

* * *

## 🔟 Difference between min-width vs max-width

### min-width

Applies styles **above** a size.

    @media (min-width: 768px)
    

Used for:

> Desktop-first or modern responsive design

* * *

### max-width

Applies styles **below** a size.

    @media (max-width: 767px)
    

Used for:

> Mobile fixes

* * *

# ⭐ SUPER IMPORTANT INTERVIEW QUESTIONS (Focus)

If interviewer asks from this topic, most common:

1.  Grid vs Flexbox difference
    
2.  auto-fit vs auto-fill
    
3.  place-items vs justify-content
    
4.  Transition vs Animation
    
5.  min-width vs max-width
    
6.  Responsive navbar logic
    
7.  repeat() and fr unit
    
8.  Media query breakpoints
    
9.  Centering in CSS (favorite question)
    
10.  grid-template-areas
     

* * *

#