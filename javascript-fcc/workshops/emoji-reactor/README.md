# Emoji Reactor – Track Emotion Ratings with Interactive Emoji Buttons

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/emoji-reactor/)

## Preview

An interactive emoji rating application that lets users rate their feelings by clicking emoji buttons representing happiness, confusion, anger, and love. Each button maintains its own counter, increasing from `0/10` to a maximum of `10/10`.

The application combines JavaScript event handling and DOM manipulation with responsive CSS styling to create an engaging, accessible interface.

## Technical Highlights

- Structured the interface using semantic HTML elements, including `main`, headings, paragraphs, and buttons.
- Used four emoji buttons to represent different emotions.
- Added `aria-label` attributes to improve button accessibility.
- Used `role="img"` and `aria-hidden="true"` to manage emoji accessibility.
- Created an `updateCount()` function to increment the rating associated with a clicked button.
- Used `querySelector()` to select the counter element inside each button.
- Used `textContent` and `split()` to extract and update the current rating.
- Used the unary plus (`+`) operator to convert the counter value from a string to a number.
- Added a maximum rating limit of `10` using a conditional statement and an early `return`.
- Used `document.querySelectorAll()` to select all elements with the `.emoji-btn` class.
- Used `forEach()` and `addEventListener()` to attach click handlers to every emoji button.
- Applied CSS custom properties using `:root` for reusable colors.
- Used Flexbox to align and distribute the emoji buttons.
- Implemented a media query at `768px` to make the layout responsive across screen sizes.
- Added CSS gradients, hover effects, transitions, and rounded borders to enhance the interface.
- Practiced DOM manipulation, event listeners, functions, type conversion, conditional statements, array methods, CSS variables, and responsive design.
