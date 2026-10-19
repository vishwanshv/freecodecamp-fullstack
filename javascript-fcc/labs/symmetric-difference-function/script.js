function diffArray(arr1, arr2) {
  const firstDifference = arr1.filter(item => !arr2.includes(item));
  const secondDifference = arr2.filter(item => !arr1.includes(item));

  return firstDifference.concat(secondDifference);
}

console.log(diffArray(
  ["diamond", "stick", "apple"],
  ["stick", "emerald", "bread"]
));
// ["diamond", "apple", "emerald", "bread"]

console.log(diffArray([1, 2, 3], [1, 2, 3]));
// []

console.log(diffArray([1, 2, 3], [3, 4, 5]));
// [1, 2, 4, 5]