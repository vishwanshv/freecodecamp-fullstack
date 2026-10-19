function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let lcm = min;

  for (let i = min + 1; i <= max; i++) {
    let a = lcm;
    let b = i;

    // Find the GCD using the Euclidean algorithm
    while (b !== 0) {
      const remainder = a % b;
      a = b;
      b = remainder;
    }

    // LCM = (first number * second number) / GCD
    lcm = (lcm * i) / a;
  }

  return lcm;
}

console.log(smallestCommons([1, 5])); // 60
console.log(smallestCommons([5, 1])); // 60
console.log(smallestCommons([2, 10])); // 2520
console.log(smallestCommons([3, 7])); // 420