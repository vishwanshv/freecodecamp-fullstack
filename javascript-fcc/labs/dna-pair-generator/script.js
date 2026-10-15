function pairElement(str) {
  const pairs = [];

  for (const base of str) {
    if (base === "A") {
      pairs.push(["A", "T"]);
    } else if (base === "T") {
      pairs.push(["T", "A"]);
    } else if (base === "C") {
      pairs.push(["C", "G"]);
    } else if (base === "G") {
      pairs.push(["G", "C"]);
    }
  }

  return pairs;
}

console.log(pairElement("ATCGA"));

console.log(pairElement("CTCTA"))

/*
[ [ 'A', 'T' ],
  [ 'T', 'A' ],
  [ 'C', 'G' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ] ]
[ [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'C', 'G' ],
  [ 'T', 'A' ],
  [ 'A', 'T' ] ]
 */