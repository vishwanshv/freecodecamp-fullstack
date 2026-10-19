function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key =>
      obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
// [{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);
// [{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]