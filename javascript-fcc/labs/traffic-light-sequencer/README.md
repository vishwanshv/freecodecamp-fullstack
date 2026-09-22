# Traffic Light Sequencer – Simulate Configurable Traffic Light Cycles

## Preview

A JavaScript traffic light sequencer that simulates configurable traffic light phases across multiple cycles.

The program works with configuration objects containing traffic light phases, durations, and fault states. It validates phases, handles faults and missing phases, logs each valid phase transition, and generates a timeline of elapsed durations.

## Technical Highlights

- Created configuration objects containing `fault` states and traffic light `phases`.
- Represented each traffic light phase with a `color` and `duration`.
- Created a `runSequence()` function to simulate traffic light cycles.
- Used nested `for` loops to iterate through cycles and phases.
- Added handling for configurations with no phases.
- Added fault detection to terminate the sequence early.
- Validated phase durations and skipped invalid phases.
- Used template literals to log phase transitions dynamically.
- Created a `generateTimeline()` function to calculate cumulative elapsed time.
- Used an `elapsed` variable to track the total duration across multiple cycles.
- Stored calculated timestamps in a `timeline` array.
- Practiced working with objects, arrays, functions, loops, conditionals, and early `return` statements in JavaScript.
