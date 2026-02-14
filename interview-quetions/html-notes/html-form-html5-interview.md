# 📘 HTML Forms 

* * *

## 1️⃣ What is the purpose of the `<form>` element in HTML?

The `<form>` element is used to collect data from users.

It allows users to enter information like:

-   Name
    
-   Email
    
-   Password
    
-   Comments
    

After filling the form, the data is sent to the server for processing.

👉 Example: Login form, registration form.

* * *

## 2️⃣ What is the `action` attribute in `<form>`?

The `action` attribute tells the browser **where to send the form data** after submission.

It contains the URL of the server or file that will handle the form data.

👉 Example:

`<form action="submit.php">`

This means data will go to `submit.php`.

* * *

## 3️⃣ What does the `method` attribute do?

The `method` attribute defines **how the data will be sent** to the server.

There are mainly two types:

### 🔹 GET

-   Data is visible in the URL
    
-   Used for searching
    
-   Less secure
    

### 🔹 POST

-   Data is hidden
    
-   More secure
    
-   Used for login and sensitive data
    

👉 In interviews:  
“GET shows data in URL, POST hides data.”

* * *

## 4️⃣ How do you create text input fields?

You use:

`<input type="text">`

It creates a single-line input box where users can type text.

* * *

## 5️⃣ What is the purpose of `<label>`?

The `<label>` is used to describe an input field.

It improves:

-   Accessibility
    
-   User experience
    

When you click the label, the input gets selected.

👉 Example:

`<label for="username">Username</label> <input type="text" id="username">`

* * *

## 6️⃣ What is `<select>` used for?

The `<select>` element creates a dropdown list.

It allows users to choose one option from multiple options.

👉 Example: Selecting country, gender, etc.

* * *

## 7️⃣ How to create radio buttons and checkboxes?

Using:

`<input type="radio"> <input type="checkbox">`

### Radio Button

-   User can select only ONE option.
    

### Checkbox

-   User can select MULTIPLE options.
    

* * *

## 8️⃣ What is `<textarea>`?

`<textarea>` is used for multi-line text input.

Used for:

-   Comments
    
-   Messages
    
-   Feedback
    

Unlike `<input>`, it allows writing paragraphs.

* * *

## 9️⃣ What is `<button>` used for?

The `<button>` element creates clickable buttons.

It can:

-   Submit form
    
-   Reset form
    
-   Trigger JavaScript
    

* * *

## 🔟 How to group related form elements?

Using:

`<fieldset> <legend>`

`<fieldset>` groups related inputs.  
`<legend>` gives a title to that group.

Example: Contact Information section.

* * *

# 📘 HTML5 – Easy & Clear Interview Notes

* * *

## 1️⃣ What is HTML5?

HTML5 is the latest version of HTML.

It introduced:

-   Better multimedia support (`<video>`, `<audio>`)
    
-   New form input types
    
-   Semantic tags (`<section>`, `<article>`, etc.)
    
-   Better structure for websites
    

* * *

## 2️⃣ What is `<!DOCTYPE html>`?

It tells the browser:

“This document is written in HTML5.”

Without it, the browser may not render properly.

* * *

## 3️⃣ What is `<header>` used for?

`<header>` defines the top section of a webpage.

It usually contains:

-   Logo
    
-   Title
    
-   Navigation menu
    

* * *

## 4️⃣ How to embed video in HTML5?

Using the `<video>` tag.

Example:

`<video controls>`

It allows playing videos directly in the browser.

* * *

## 5️⃣ What is `<canvas>` used for?

`<canvas>` is used to draw graphics using JavaScript.

Used for:

-   Animations
    
-   Games
    
-   Charts
    

* * *

## 6️⃣ What are new input types in HTML5?

HTML5 introduced:

-   `email`
    
-   `date`
    
-   `number`
    
-   `tel`
    
-   `url`
    

These provide automatic validation.

Example:

`<input type="email">`

Browser checks if email format is correct.

* * *

## 7️⃣ Difference between `<section>` and `<article>`?

### `<section>`

Used to group related content.

### `<article>`

Used for independent content like:

-   Blog post
    
-   News article
    

Interview Tip:  
“Article can exist independently, section groups related content.”

* * *

## 8️⃣ What is `<nav>` used for?

`<nav>` is used for navigation links.

It usually contains:

-   Home
    
-   About
    
-   Contact links
    

* * *

## 9️⃣ What is `<aside>` used for?

`<aside>` is used for side content.

Example:

-   Sidebar
    
-   Advertisements
    
-   Related links
    

It is not the main content.