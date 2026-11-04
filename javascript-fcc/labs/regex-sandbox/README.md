# Regex Sandbox – Test Regular Expressions and Highlight Matching Patterns

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/regex-sandbox/)

## Preview

An interactive regular expression testing tool that allows users to enter a regex pattern, select matching flags, and test it against custom text.

The application dynamically identifies matching patterns, highlights matched text, and displays the results. It also handles invalid regular expressions and provides feedback when no matches are found.

## Technical Highlights

- Structured the interface using HTML elements, including `input`, `checkbox`, `button`, and a `contenteditable` div.
- Used `document.getElementById()` to select input fields, checkboxes, buttons, and result elements.
- Created a `getFlags()` function to dynamically generate regular expression flags.
- Used the `checked` property to determine whether the case-insensitive (`i`) and global (`g`) flags are selected.
- Used string concatenation (`+=`) to build the regex flags dynamically.
- Created a `RegExp()` constructor to generate regular expressions from user-provided patterns and flags.
- Used `textContent` to retrieve the test string from the editable element.
- Used the `match()` string method to identify matching patterns.
- Used `join()` to display multiple matches as a comma-separated string.
- Implemented `try...catch` to handle invalid regular expression patterns without crashing the application.
- Used conditional statements to distinguish between successful matches and unmatched patterns.
- Used `replace()` with a callback function to wrap matched text inside dynamically generated HTML elements.
- Applied a `highlight` CSS class to visually highlight matching text.
- Used `innerHTML` to update the test string with highlighted matches.
- Used `textContent` to display error messages and handle cases where no matches are found.
- Applied CSS Flexbox to organize the regex controls, test area, and results section.
- Used CSS custom properties (`:root`) to manage reusable colors, borders, and spacing.
- Created a custom placeholder effect for the `contenteditable` test area using the `:empty:before` pseudo-element and `attr()`.
- Practiced regular expressions, the `RegExp` constructor, string methods, callback functions, DOM manipulation, dynamic HTML rendering, conditional statements, and exception handling in JavaScript.
