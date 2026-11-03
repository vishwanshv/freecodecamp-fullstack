# Theme Switcher – Build an Interactive Theme Selection Menu

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/theme-switcher/)

## Preview

An interactive theme switcher that allows users to change the appearance of a webpage by selecting between light, dark, and ocean themes. Clicking the Switch Theme button opens a dropdown menu containing the available themes.

When a theme is selected, the application dynamically updates the page background and text colors, displays a confirmation message, and closes the dropdown menu.

## Technical Highlights

- Structured the interface using semantic HTML elements, including `main`, `button`, `ul`, and `li`.
- Used ARIA attributes such as `aria-haspopup`, `aria-expanded`, `aria-controls`, `aria-labelledby`, and `aria-live` to improve accessibility.
- Used `role="menu"` and `role="menuitem"` to identify the dropdown menu and its selectable items.
- Used the `hidden` attribute to control dropdown visibility.
- Stored available themes and their corresponding confirmation messages in an array of objects.
- Used `document.getElementById()` and `document.querySelector()` to select DOM elements.
- Used `document.querySelectorAll()` to select all dropdown menu items.
- Used `addEventListener()` to handle button clicks and theme selections.
- Used `hasAttribute()` to check whether the dropdown has the `hidden` attribute.
- Used `removeAttribute()` and `setAttribute()` to dynamically control dropdown visibility and update ARIA attributes.
- Used `forEach()` to attach click event listeners to each theme option.
- Used the `find()` array method to identify the selected theme by comparing its name with the clicked menu item's text.
- Used `trim()` to remove unnecessary whitespace from the selected theme name.
- Used `classList.remove()` to clear previously applied theme classes.
- Used `classList.add()` and template literals to apply the selected theme dynamically.
- Updated the accessible status message using `textContent`.
- Defined separate CSS classes for light, dark, and ocean themes.
- Used CSS transitions to create smooth background and text color changes.
- Practiced arrays of objects, array methods, DOM manipulation, event handling, conditional statements, template literals, CSS classes, and ARIA accessibility in JavaScript.
