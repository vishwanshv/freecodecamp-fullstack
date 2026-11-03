# Note Taking App – Create an Editable Note with Save Status Feedback

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/note-taking-app/)

## Preview

A simple interactive note-taking application that allows users to edit text directly within a note card. When users finish editing and move away from the note, the application detects whether the content has changed and displays a save confirmation message.

The application uses HTML's `contenteditable` attribute and JavaScript event listeners to provide an inline editing experience with basic change detection and status feedback.

## Technical Highlights

- Created an editable note card using the `contenteditable="true"` attribute.
- Used `aria-label` to provide an accessible name for the note editor.
- Used `aria-live="polite"` to make save status updates accessible to screen readers.
- Used `document.getElementById()` to select the note editor and status elements.
- Initialized a `currentContent` variable to keep track of the original note content.
- Used the `focus` event to clear the previous save status message when editing begins.
- Used the `blur` event to detect when the user leaves the note editor.
- Retrieved updated note content using the `innerHTML` property.
- Compared the edited content with the previously stored content to detect changes.
- Used an early `return` to prevent unnecessary save confirmations when the content remains unchanged.
- Updated `currentContent` after detecting changes.
- Used `textContent` to display the save confirmation message dynamically.
- Used `console.log()` to inspect the updated note content.
- Used the `DOMContentLoaded` event to initialize the original note content after the HTML document has been parsed.
- Applied CSS styling with `box-shadow`, `border-radius`, and `white-space: pre-wrap` to create an editable note card that preserves line breaks.
- Practiced DOM manipulation, event handling, content editing, conditional statements, comparison logic, and browser events in JavaScript.
