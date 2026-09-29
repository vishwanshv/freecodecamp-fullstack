# Festival Crowd Flow Simulator – Process Gate Capacity and Reroute Crowd Overflow

## Preview

A JavaScript festival crowd flow simulator that models attendee movement through multiple entry gates during different time blocks.

The program processes attendees at each gate based on its capacity, tracks the total number of attendees processed, reroutes overflow to the next available gate, and generates a throughput summary for each simulation.

## Technical Highlights

- Created separate gate configurations for morning and night simulations.
- Represented each gate using an object containing an ID, processing capacity, and queue of attendees.
- Created `initializeThroughput()` to initialize a throughput summary for every gate.
- Created `processGateFlow()` to process attendees according to each gate's capacity.
- Used a `while` loop to continue processing attendees until either the queue is empty or the gate reaches its capacity.
- Tracked unprocessed attendees as overflow.
- Created `rerouteOverflow()` to transfer overflow attendees to the next gate.
- Used the modulo operator (`%`) to cycle overflow back to the first gate when necessary.
- Created `handleGateAtTick()` to coordinate processing, throughput tracking, and overflow handling for each gate.
- Created `printSummary()` to display the total attendees processed by each gate.
- Created `simulateFestival()` to run the complete crowd simulation across multiple time ticks.
- Used nested loops and a `while` loop to process every gate at every time tick.
- Used objects, arrays, functions, loops, conditionals, arithmetic operations, and dynamic object properties to model the crowd flow.
- Simulated both morning and night festival crowd patterns using the same reusable functions.
