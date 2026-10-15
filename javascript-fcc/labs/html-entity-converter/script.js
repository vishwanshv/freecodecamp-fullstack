function convertHTML(str) {
  let result = "";

  for (const char of str) {
    if (char === "&") {
      result += "&amp;";
    } else if (char === "<") {
      result += "&lt;";
    } else if (char === ">") {
      result += "&gt;";
    } else if (char === '"') {
      result += "&quot;";
    } else if (char === "'") {
      result += "&apos;";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

console.log(convertHTML('Stuff in "quotation marks"'));

console.log(convertHTML("Schindler's List"));

/*
Dolce & Gabbana
Hamburgers < Pizza < Tacos
Stuff in "quotation marks"
Schindler's List
*/