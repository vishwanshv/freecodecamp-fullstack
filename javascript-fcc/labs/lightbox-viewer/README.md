# Lightbox Viewer – Create an Interactive Museum Image Gallery

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/lightbox-viewer/)

## Preview

An interactive museum image gallery that allows users to view enlarged versions of images in a full-screen lightbox overlay. Clicking a gallery image opens its full-size version, while a close button or clicking the overlay dismisses the preview.

The application uses HTML, CSS, and JavaScript to create an interactive image-viewing experience with a responsive gallery layout.

## Technical Highlights

- Structured the gallery using HTML elements, including headings, images, buttons, and containers.
- Used `document.querySelectorAll()` to select all gallery images.
- Used `document.querySelector()` and `document.getElementById()` to access lightbox elements.
- Used `forEach()` to iterate through gallery images and attach click event listeners.
- Used `addEventListener()` to handle image clicks and lightbox interactions.
- Extracted the full-size image URL using the `replace()` string method to remove `-thumbnail` from the image source.
- Dynamically updated the lightbox image using the `src` property.
- Displayed and hid the lightbox using the CSS `display` property.
- Used `event.stopPropagation()` to prevent clicks on the enlarged image from triggering the overlay's click event.
- Implemented multiple ways to close the lightbox, including the close button and overlay click.
- Used CSS Flexbox to center gallery images and lightbox content.
- Applied `object-fit: cover` to maintain consistent gallery image dimensions.
- Used `object-fit: contain` to display full-size images without cropping.
- Created a fixed-position overlay with a semi-transparent background and `z-index` to cover the entire viewport.
- Implemented a media query at `700px` to switch the gallery from a horizontal layout to a vertical layout on smaller screens.
- Practiced DOM manipulation, event bubbling, event propagation, string methods, event listeners, CSS positioning, Flexbox, and responsive web design.
