function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(titleCase("I like to code"));
// "I Like To Code"

console.log(titleCase("javaScript is fun"));
// "Javascript Is Fun"

//Remember: split() turns a string into an array, while join() turns an array back into a string.

/*
I Like To Code
Javascript Is Fun
*/