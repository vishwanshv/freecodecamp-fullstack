function largestOfAll(arr) {
  const largestNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }

    largestNumbers.push(largest);
  }

  return largestNumbers;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

/*
[ 5, 27, 39, 1001 ]
[ 27, 5, 39, 1001 ]
 */