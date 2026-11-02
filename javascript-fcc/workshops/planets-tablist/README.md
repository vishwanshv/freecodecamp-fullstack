# Planets Tablist – Build an Accessible Interactive Tab Interface

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/planets-tablist/)

## Preview

An interactive planets information interface that displays facts about Earth, Saturn, and Mars using a tab-based navigation system. Users can switch between planets by clicking their respective tabs, revealing the corresponding information panel while hiding the others.

The application uses HTML, CSS, and JavaScript to create an accessible tab interface with dynamic content switching and visual feedback for the selected tab.

## Technical Highlights

- Structured the interface using semantic HTML elements and ARIA roles, including `tablist`, `tab`, and `tabpanel`.
- Used `aria-labelledby` to associate the tab list and content panels with their respective labels.
- Used `aria-controls` to connect each tab to its corresponding content panel.
- Used `aria-selected` to indicate which tab is currently active.
- Used the `hidden` attribute to control the visibility of inactive content panels.
- Used `document.querySelectorAll()` to select all tab buttons and content panels.
- Used `forEach()` to iterate through tabs and attach click event listeners.
- Used `addEventListener()` to handle tab selection.
- Used `setAttribute()` to dynamically update the `aria-selected` attribute.
- Used the `hidden` property to hide inactive panels and display the selected panel.
- Used `getAttribute()` to retrieve the associated panel ID from the clicked tab.
- Used `getElementById()` to select and display the corresponding content panel.
- Applied CSS Flexbox to arrange tabs horizontally with consistent spacing.
- Used attribute selectors to style tabs based on their ARIA roles and selected states.
- Added visual feedback for the active tab using the `aria-selected="true"` selector.
- Practiced DOM manipulation, event handling, attribute selectors, ARIA accessibility, iteration, and dynamic content visibility in JavaScript.
