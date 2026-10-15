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
// "Dolce &amp; Gabbana"

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// "Hamburgers &lt; Pizza &lt; Tacos"

console.log(convertHTML('Stuff in "quotation marks"'));
// "Stuff in &quot;quotation marks&quot;"

console.log(convertHTML("Schindler's List"));
// "Schindler&apos;s List"