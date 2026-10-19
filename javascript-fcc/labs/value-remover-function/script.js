function destroyer(arr, ...valuesToRemove) {
  return arr.filter(item => !valuesToRemove.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]

console.log(destroyer(["hello", "world", "hello"], "hello"));
// ["world"]

console.log(destroyer([5, 6, 7, 8], 5, 8));
// [6, 7]