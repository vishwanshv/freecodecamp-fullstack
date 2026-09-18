let lunches = [];

// Add lunch to the end
function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

// Add lunch to the start
function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// Remove lunch from the end
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedLunch = array.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  }

  return array;
}

// Remove lunch from the start
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedLunch = array.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
  }

  return array;
}

// Get a random lunch
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];

    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

// Show lunch menu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(", ")}`);
  }
}