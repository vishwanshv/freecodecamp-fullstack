function findLongestWordLength(sentence) {
  const words = sentence.split(" ");
  let longestWord = 0;

  for (const word of words) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }

  return longestWord;
}