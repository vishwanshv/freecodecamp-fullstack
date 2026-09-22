# Space Mission Roster - Astronaut Crew Manager – Manage, Sort, Filter, and Organize a Space Crew

## Preview

A JavaScript astronaut crew management system that adds crew members, prevents duplicate IDs, swaps crew positions, sorts astronauts by priority, filters EVA-eligible crew members, divides them into groups, and prints a sorted crew summary.

## Technical Highlights

- Created astronaut objects containing IDs, names, roles, EVA eligibility, and priority levels.
- Created an `addCrewMember()` function to add astronauts while preventing duplicate IDs.
- Used loops and conditional statements to validate crew member IDs.
- Created a `swapCrewMembers()` function to safely swap astronauts at specified indexes.
- Used `slice()` and `splice()` to create and modify a copy of the crew array.
- Added index validation to prevent invalid crew operations.
- Created a `sortByPriorityDescending()` function using a nested loop and swapping logic.
- Implemented a manual sorting algorithm without using JavaScript's built-in `sort()`.
- Created `getEVAReadyCrew()` to filter astronauts eligible for EVA missions.
- Sorted the EVA-ready crew by descending priority.
- Created `chunkCrew()` to divide the crew into groups of a specified size.
- Used `slice()` to create crew chunks without modifying the original array.
- Added validation to ensure the chunk size is at least `1`.
- Created `printCrewSummary()` to copy and sort the crew before logging astronaut names.
- Practiced arrays, objects, functions, loops, nested loops, conditionals, `slice()`, `splice()`, filtering, sorting, and array manipulation in JavaScript.
