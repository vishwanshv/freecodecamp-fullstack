# Loan Ledger – IT Hardware Device Loan Management

## Preview

A JavaScript-based hardware loan ledger for managing device checkouts, check-ins, borrowers, due dates, overdue devices, and ledger serialization.

## Technical Highlights

- Managed hardware devices using an object-based ledger keyed by asset tags.
- Implemented `checkoutDevice()` to assign borrowers and update device status.
- Implemented `checkinDevice()` to clear borrower information and reset device status.
- Used deep cloning to prevent mutations to the original ledger.
- Handled missing asset tags and devices that are already checked out.
- Implemented `listOverdueDevices()` to identify and sort overdue devices.
- Compared `MM/DD/YYYY` dates without using the JavaScript `Date` object.
- Supported both zero-padded and non-zero-padded months and days.
- Implemented `serializeLedger()` using `JSON.stringify()`.
- Implemented `loadLedger()` using `JSON.parse()`.
