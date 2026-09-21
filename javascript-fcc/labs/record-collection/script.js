function updateRecords(records, id, prop, value) {
  // If value is empty, delete the property
  if (value === "") {
    delete records[id][prop];
  }

  // Handle the tracks property
  else if (prop === "tracks") {
    // Create the tracks array if it doesn't exist
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }

    // Add the new track
    records[id].tracks.push(value);
  }

  // Handle all other properties
  else {
    records[id][prop] = value;
  }

  return records;
}