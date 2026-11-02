# Rock, Paper, Scissors – Build an Interactive Game Against the Computer

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/workshops/rock-paper-scissors/)

## Preview

An interactive Rock, Paper, Scissors game where players compete against the computer. Players choose between Rock, Paper, and Scissors, while the computer randomly selects its move. Scores are updated after each round, and the first player to reach three points wins the game.

The application includes game rules, real-time score tracking, round results, winner announcements, and a reset option to start a new game.

## Technical Highlights

- Structured the game interface using semantic HTML elements, including `main`, `section`, `details`, and `summary`.
- Stored the available game options in an array.
- Created `getRandomComputerResult()` to generate a random computer choice using `Math.random()` and `Math.floor()`.
- Created `hasPlayerWonTheRound()` to determine whether the player wins based on the game rules.
- Used logical OR (`||`) and AND (`&&`) operators to evaluate winning combinations.
- Maintained player and computer scores using variables.
- Created `getRoundResults()` to determine round outcomes, update scores, and return appropriate result messages.
- Used template literals to generate dynamic game messages.
- Created `showResults()` to update scores, display round results, and check for the overall winner.
- Implemented a winning condition where the first player to reach three points wins.
- Used conditional statements and the ternary operator to determine and display the winner.
- Dynamically controlled element visibility using the `style.display` property.
- Created `resetGame()` to reset scores, clear messages, and restore the game interface.
- Used `getElementById()` and `querySelector()` to select DOM elements.
- Attached click event listeners using `addEventListener()` to handle player choices and game resets.
- Used CSS custom properties for reusable colors and styled buttons with gradient backgrounds and hover effects.
- Implemented Flexbox to distribute player and computer scores.
- Used a media query at `760px` to adjust the rules container width for larger screens.
- Practiced arrays, functions, random number generation, conditional logic, logical operators, template literals, DOM manipulation, event handling, and game state management in JavaScript.
