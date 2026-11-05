
function myReplace(str, before, after) {
  // Check whether the original word starts with an uppercase letter
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  // Replace the original word with the new word
  return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"))

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))

console.log(myReplace("I think we should look up there", "up", "Down"))

/*
Let us go to the mall
He is Sitting on the couch
I think we should look down there
 */