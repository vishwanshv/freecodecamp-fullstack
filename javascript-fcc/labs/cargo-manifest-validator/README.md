# Cargo Manifest Validator – Normalize and Validate Cargo Data

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/labs/cargo-manifest-validator/)

## Technical Highlights

- Validates required cargo manifest properties:
  - `containerId`
  - `destination`
  - `weight`
  - `unit`
  - `hazmat`
- Distinguishes between missing and invalid properties.
- Validates positive integers, positive numbers, strings, booleans, and allowed units.
- Converts cargo weight from pounds (`lb`) to kilograms (`kg`) using the `0.45` conversion factor.
- Uses object spread syntax to create new objects without mutating the original manifest.
- Processes valid manifests and reports validation errors for invalid manifests.
- Uses JavaScript functions, conditionals, object properties, `Object.keys()`, `typeof`, `Number.isInteger()`, `Number.isNaN()`, and `.trim()`.
