function steamrollArray(arr) {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...steamrollArray(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log(steamrollArray([[1], [], [2, [3]]]));
// [1, 2, 3]

console.log(steamrollArray([1, { foo: "bar" }, [2]]));
// [1, { foo: "bar" }, 2]

console.log(steamrollArray(["baz", [1, 2], {}]));
// ["baz", 1, 2, {}]

console.log(steamrollArray([1, [2, [3, [4]]]]));
// [1, 2, 3, 4]