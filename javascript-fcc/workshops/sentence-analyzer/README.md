# Sentence Analyzer – Count Vowels, Consonants, Punctuation, and Words

## Preview

A JavaScript sentence analyzer that calculates the number of vowels, consonants, punctuation characters, and words in a given sentence.

The program defines separate functions for each type of analysis and logs the results to the console.

## Technical Highlights

- Created a `getVowelCount()` function to count vowels using `includes()`.
- Created a `getConsonantCount()` function to count consonants.
- Used `toLowerCase()` to make vowel and consonant checks case-insensitive.
- Created a `getPunctuationCount()` function to identify and count punctuation characters.
- Created a `getWordCount()` function to count words in a sentence.
- Used `trim()` to handle leading and trailing whitespace.
- Handled empty strings and strings containing only spaces by returning a word count of `0`.
- Used `for...of` loops to iterate through characters and words.
- Used template literals to display the calculated results in the console.
