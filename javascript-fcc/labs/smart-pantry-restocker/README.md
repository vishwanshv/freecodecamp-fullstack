# Smart Pantry Restocker – Parse Shipments and Plan Pantry Inventory Actions

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/smart-pantry-restocker/)

## Preview

A JavaScript pantry management tool that processes incoming shipment data, removes duplicate SKUs, validates item quantities, determines the appropriate inventory action, groups actions by storage zone, and works with a cloned pantry inventory.

The program parses pipe-separated shipment records and categorizes each item as a restock, donation, or discard action based on the existing pantry inventory and item quantity.

## Technical Highlights

- Created a `pantry` array containing existing inventory items.
- Used pipe-separated strings in `rawData` to represent incoming shipment records.
- Created `parseShipment()` to convert raw shipment strings into structured objects.
- Used `split("|")` to extract SKU, name, quantity, expiration date, and storage zone.
- Used `Number()` to convert quantity values from strings to numbers.
- Added a default `"general"` zone when no zone is provided.
- Used a `seenSkus` array with `includes()` to prevent duplicate shipment SKUs.
- Created `planRestock()` to determine the appropriate action for each shipment item.
- Classified items with zero or negative quantities as `"discard"`.
- Checked whether an item's SKU already exists in the pantry to determine whether it should be `"restock"` or `"donate"`.
- Created `groupByZone()` to organize actions according to their storage zones.
- Used dynamic object properties to create zone-based groups.
- Created `clonePantry()` to produce a separate copy of the pantry inventory.
- Processed the shipment through multiple reusable functions.
- Practiced arrays, objects, loops, conditionals, nested loops, string parsing, type conversion, `includes()`, `push()`, and object grouping in JavaScript.
