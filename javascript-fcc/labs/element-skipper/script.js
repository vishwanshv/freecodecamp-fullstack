function dropElements(arr, func) {
  const result = [...arr];

  while (result.length > 0 && !func(result[0])) {
    result.shift();
  }

  return result;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))

/*
[ 3, 4 ]
[ 1, 0, 1 ]
[ 3, 9, 2 ]
*/