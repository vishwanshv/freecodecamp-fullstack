
function translatePigLatin(str) {
  const vowels = /[aeiou]/i;

  // If the word starts with a vowel
  if (vowels.test(str[0])) {
    return str + "way";
  }

  // Find the position of the first vowel
  const vowelIndex = str.search(vowels);

  // If there are no vowels
  if (vowelIndex === -1) {
    return str + "ay";
  }

  // Move the consonant cluster to the end
  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
}

console.log(translatePigLatin("california"))

console.log(translatePigLatin("paragraphs"))

console.log(translatePigLatin("algorithm"))

//If it starts with a vowel add way, else if consonant add ay

/*
aliforniacay
aragraphspay
algorithmway
*/