# Real-Time Character Counter – Track Text Input and Enforce Character Limits

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/real-time-character-counter/)

## Preview

A real-time character counter web application that tracks the number of characters entered into a textarea. It displays the current character count against a maximum limit of 50 characters and prevents users from exceeding that limit.

The application provides immediate visual feedback by changing the counter text color when the character limit is reached. It also features a responsive layout for different screen sizes.

## Technical Highlights

- Structured the interface using semantic HTML elements, including `main`, `textarea`, and `p`.
- Used `document.getElementById()` to select the textarea and character counter elements.
- Added an `input` event listener to track text changes in real time.
- Used the `value` property to access and update the textarea content.
- Defined a `maxLength` variable to maintain the maximum character limit.
- Used `slice()` to restrict input to the first 50 characters.
- Used the `length` property to calculate the current character count.
- Updated the counter dynamically using `textContent` and template literals.
- Implemented conditional statements to detect when the character limit is reached.
- Changed the counter text color dynamically to provide visual feedback.
- Used CSS classes and selectors to style the character counter and its limit-reached state.
- Applied Flexbox to center and organize the application elements.
- Used `max-width` to maintain a controlled textarea width.
- Implemented a media query at `600px` to adjust typography and spacing for smaller screens.
- Used `clamp()` for responsive heading typography.
- Practiced DOM manipulation, event handling, string methods, conditional statements, template literals, CSS Flexbox, and responsive web design.
