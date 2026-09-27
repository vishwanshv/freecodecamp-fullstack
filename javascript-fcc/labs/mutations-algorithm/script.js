function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (const letter of second) {
    if (!first.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["floor", "for"]))

console.log(mutation(["hello", "neo"]))

/* 
true
false
*/