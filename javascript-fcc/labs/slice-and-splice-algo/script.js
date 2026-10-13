/*
In this lab, you will need to create an algorithm to merge two arrays.
*/

function frankenSplice(arr1, arr2, n) {
  const newArr = arr2.slice();

  newArr.splice(n, 0, ...arr1);

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice([1, 2], ["a", "b"], 1))
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))

/*
[ 4, 1, 2, 3, 5 ]
[ 'a', 1, 2, 'b' ]
[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
*/