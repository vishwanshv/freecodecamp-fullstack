function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");

  return lowerWord === reversedWord;
}

function findPalindromeBreaks(words) {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  const repeatedPhrases = [];

  if (phraseLength >= words.length) {
    return repeatedPhrases;
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {
    for (let j = i + 1; j <= words.length - phraseLength; j++) {
      let match = true;

      for (let k = 0; k < phraseLength; k++) {
        if (words[i + k] !== words[j + k]) {
          match = false;
          break;
        }
      }

      if (match) {
        repeatedPhrases.push(i);
        repeatedPhrases.push(j);
        break;
      }
    }
  }

  return repeatedPhrases;
}

function analyzeTexts(texts, phraseLength) {
  const results = [];

  for (const text of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text)
    });
  }

  return results;
}

console.log(isPalindrome("level"))