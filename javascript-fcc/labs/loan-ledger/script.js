const ledger = {
  "1": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: {
      name: "",
      email: ""
    },
    dueDate: ""
  },
  "2": {
    type: "Monitor",
    status: "CheckedOut",
    borrower: {
      name: "John Doe",
      email: "john@example.com"
    },
    dueDate: "9/5/2025"
  }
};

// Checkout a device
function checkoutDevice(ledger, assetTag, borrower) {
  // Deep clone the ledger so the original is not mutated
  const updatedLedger = JSON.parse(JSON.stringify(ledger));

  // Asset tag does not exist
  if (!updatedLedger[assetTag]) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  // Device is already checked out
  if (updatedLedger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Device ${assetTag} is already checked out.`
    };
  }

  // Update borrower and status
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} has been checked out to ${borrower.name}.`
  };
}


// Checkin a device
function checkinDevice(ledger, assetTag) {
  // Deep clone the ledger
  const updatedLedger = JSON.parse(JSON.stringify(ledger));

  // Asset tag does not exist
  if (!updatedLedger[assetTag]) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  // Clear borrower information
  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";

  // Reset device information
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} has been checked in.`
  };
}


// List overdue devices
function listOverdueDevices(ledger, today) {
  // Convert MM/DD/YYYY into YYYY, MM, DD
  // without using the Date object.
  function parseDate(dateString) {
    const parts = dateString.split("/");

    const month = Number(parts[0]);
    const day = Number(parts[1]);
    const year = Number(parts[2]);

    return {
      year,
      month,
      day
    };
  }

  // Compare two dates
  function compareDates(dateA, dateB) {
    const a = parseDate(dateA);
    const b = parseDate(dateB);

    if (a.year !== b.year) {
      return a.year - b.year;
    }

    if (a.month !== b.month) {
      return a.month - b.month;
    }

    return a.day - b.day;
  }

  return Object.values(ledger)
    .filter(device => {
      return (
        device.status === "CheckedOut" &&
        device.dueDate !== "" &&
        compareDates(device.dueDate, today) < 0
      );
    })
    .sort((a, b) => compareDates(a.dueDate, b.dueDate));
}


// Convert ledger to JSON
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}


// Convert JSON back into an object
function loadLedger(json) {
  return JSON.parse(json);
}