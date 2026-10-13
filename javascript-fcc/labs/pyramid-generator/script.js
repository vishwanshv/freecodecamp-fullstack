function pyramid(pattern, rows, isInverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    const spaces = isInverted ? i : rows - 1 - i;
    const characters = 2 * (rows - 1 - spaces) + 1;

    result += " ".repeat(spaces) + pattern.repeat(characters) + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false))
console.log(pyramid("p", 5, true))

/*
   o
  ooo
 ooooo
ooooooo


ppppppppp
 ppppppp
  ppppp
   ppp
    p
 */