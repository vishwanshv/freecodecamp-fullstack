function uniteUnique(...arrays) {
  const result = [];

  for (const arr of arrays) {
    for (const value of arr) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]))

/*
[ 1, 3, 2, 5, 4 ]
[ 1, 2, 3, 5 ]
[ 1, 2, 3, 5, 4, 6, 7, 8 ]
[ 1, 3, 2, 5, 4 ]
*/