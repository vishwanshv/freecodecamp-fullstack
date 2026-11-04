# Spam Filter – Detect Spam Messages Using Regular Expressions

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/spam-filter/)

## Preview

A JavaScript spam detection application that checks user-entered messages against a collection of predefined spam patterns using regular expressions.

The application identifies suspicious phrases related to requests for help, money offers, stock alerts, and other common spam expressions. It displays an appropriate result indicating whether a message appears to be spam and clears the input after each check.

## Technical Highlights

- Created an interactive interface using HTML elements, including `textarea`, `label`, `button`, and `p`.
- Used `document.getElementById()` to select the message input, result display, and check button.
- Created multiple regular expressions to identify common spam phrases.
- Used regex flags such as `i` to perform case-insensitive pattern matching.
- Used character classes (`[]`) to match alternative characters and detect common text obfuscation techniques.
- Used quantifiers such as `+` to match one or more occurrences of a character.
- Used `\s` to match whitespace characters.
- Used non-capturing groups (`?:`) to group pattern alternatives without capturing them.
- Used anchors (`^` and `$`) to match the beginning and end of a string.
- Used optional quantifiers (`?`) to match variations in spam phrases.
- Created a `denyList` array to organize all spam detection regular expressions.
- Created an `isSpam()` arrow function to determine whether a message matches any spam pattern.
- Used the `some()` array method to check whether at least one regular expression matches the input message.
- Used the `test()` regex method to evaluate message content against each pattern.
- Implemented conditional logic to handle empty input fields using `alert()` and an early `return`.
- Used a ternary operator to display different messages depending on the spam detection result.
- Updated the result dynamically using `textContent`.
- Cleared the textarea using its `value` property after each successful check.
- Applied CSS custom properties using `:root` to manage reusable colors.
- Used CSS gradients and `:hover` effects to style the check button.
- Practiced regular expressions, regex methods, arrays, arrow functions, array methods, conditional statements, DOM manipulation, and event handling in JavaScript.
