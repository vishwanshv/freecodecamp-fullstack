# Library Book Search – Search Books Using JavaScript Error Handling

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/library-book-search/)

## Preview

A simple library book search application that allows users to check whether a book is available in a library collection. Users can enter a book title and search for it using a predefined list of books.

The application displays availability messages, handles empty search inputs and unavailable books using error handling, and provides a scan completion message after every search attempt.

## Technical Highlights

- Created a `library` array containing a collection of available book titles.
- Used `document.getElementById()` to select the search button, input field, and status elements.
- Created a `findBook()` function using an arrow function to search for books.
- Used `trim()` to remove leading and trailing whitespace from user input.
- Used `includes()` to check whether the entered book title exists in the library array.
- Used `throw new Error()` to handle empty search fields and unavailable books.
- Implemented `try...catch...finally` for structured error handling.
- Used `try` to execute the book search operation.
- Used `catch` to handle errors and display appropriate error messages using `err.message`.
- Used `console.error()` to log search errors in the browser console.
- Used `finally` to execute cleanup operations regardless of whether the search succeeds or fails.
- Cleared the search input using the `value` property after every search attempt.
- Updated search results and scan completion messages dynamically using `textContent`.
- Used `addEventListener()` to handle button click events.
- Applied CSS Flexbox to center the search interface horizontally and vertically.
- Practiced arrow functions, arrays, string methods, DOM manipulation, event handling, custom errors, and JavaScript exception handling.
