
function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_\s]+/g, "-")
    .toLowerCase();
}

console.log(spinalCase("This is Spoinal Tap"))
console.log(spinalCase("thisIsSpinalTap"))