
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const pattern = regexPattern.value;
  const testString = stringToTest.textContent;
  const flags = getFlags();

  try {
    const regex = new RegExp(pattern, flags);
    const matches = testString.match(regex);

    if (matches) {
      testResult.textContent = matches.join(", ");

      stringToTest.innerHTML = testString.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });
    } else {
      testResult.textContent = "no match";
      stringToTest.textContent = testString;
    }
  } catch (error) {
    testResult.textContent = "Invalid regular expression";
    stringToTest.textContent = testString;
  }
});
