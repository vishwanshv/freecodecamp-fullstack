# Favorite Icon Toggler – Toggle Favorite States with JavaScript and CSS

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/favorite-icon-toggler/)

## Preview

An interactive favorite list that allows users to mark items as favorites by clicking heart icons. The heart toggles between an outlined state and a filled red state, providing immediate visual feedback.

The application combines JavaScript DOM manipulation, CSS classes, event listeners, and responsive styling to create an interactive and mobile-friendly interface.

## Technical Highlights

- Used `document.querySelectorAll()` to select all elements with the `.favorite-icon` class.
- Used `forEach()` to iterate through the favorite buttons.
- Attached click event listeners using `addEventListener()`.
- Used `classList.contains()` to check whether a favorite button is already selected.
- Used `classList.add()` and `classList.remove()` to toggle the `filled` CSS class.
- Updated heart symbols dynamically using `innerHTML` and HTML character references.
- Styled selected favorites using the `.favorite-icon.filled` CSS selector.
- Used Flexbox to align list items and distribute content.
- Applied `box-sizing: border-box` for predictable element sizing.
- Used `max-width`, automatic margins, and padding to control the container layout.
- Implemented a media query at `500px` to adapt typography, spacing, and list item sizes for smaller screens.
- Used `clamp()` to make the heading font size responsive.
- Applied `flex-shrink: 0` to prevent favorite icons from shrinking when space is limited.
- Practiced DOM selection, event handling, conditional statements, CSS class manipulation, HTML character references, Flexbox, and responsive web design.
