function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex(element => element >= num);

  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([3, 10, 5], 3));             // 0
console.log(getIndexToIns([2, 5, 10], 15));            // 3
console.log(getIndexToIns([], 1));                      // 0