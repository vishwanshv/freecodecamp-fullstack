function bouncer(arr) {
  const result = [];

  for (const element of arr) {
    if (element) {
      result.push(element);
    }
  }

  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
// [7, "ate", 9]
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
console.log(bouncer([null, NaN, 1, 2, undefined]))
console.log(bouncer([]))

/*
[ 7, 'ate', 9 ]
[]
[ 1, 2 ]
[]
*/