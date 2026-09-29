# Proofreading Tool – Detect Palindromes and Repeated Phrases

## Preview

A JavaScript proofreading tool that analyzes text for palindrome breaks and repeated phrases.

The program checks whether individual words are palindromes, identifies the positions of words that break a palindrome pattern, detects repeated phrases of a specified length, and combines these results into an analysis for multiple texts.

## Technical Highlights

- Created an `isPalindrome()` function to determine whether a word reads the same forwards and backwards.
- Used `toLowerCase()` so the palindrome check is not affected by uppercase letters.
- Used `split("")` to convert the word into an array of individual characters.
- Used `reverse()` to reverse the character array.
- Used `join("")` to convert the reversed array back into a string.
- Compared `lowerWord` with `reversedWord` using `===` and returned the resulting boolean value.

### Finding Palindrome Breaks

- Created `findPalindromeBreaks()` to find the indexes of words that are not palindromes.
- Created an empty `breaks` array to store the indexes of non-palindromic words.
- Used a `for` loop to go through every word in the `words` array.
- Called `isPalindrome(words[i])` to check the current word.
- Used `!` to negate the returned boolean value:
  - `isPalindrome()` returns `true` → `!true` becomes `false`, so the index is not added.
  - `isPalindrome()` returns `false` → `!false` becomes `true`, so the index is pushed into `breaks`.
- Used `push(i)` to store the index of each word that breaks the palindrome pattern.
- Returned the `breaks` array after checking all words.

### Finding Repeated Phrases

- Created `findRepeatedPhrases()` to find positions where the same sequence of words appears more than once.
- Used `phraseLength` to determine how many consecutive words make up a phrase.
- Added an early `return` when `phraseLength >= words.length` because there are not enough words to form a repeated phrase.
- Used a first `for` loop with `i` to select the starting position of the first phrase.
- Used a second `for` loop with `j` to select another starting position to compare against.
- Created `match = true` assuming the two phrases match before comparing their individual words.
- Used a third `for` loop with `k` to compare each word in the two phrases.
- Compared `words[i + k]` with `words[j + k]` to check whether the words at the corresponding positions are equal.
- Set `match = false` when a mismatch is found.
- Used `break` to immediately stop checking the current pair once a mismatch is detected.
- If `match` remains `true`, both starting indexes are added to `repeatedPhrases`.
- Used `break` after finding a match for the current `i` so the same starting position is not repeatedly added.
- Returned the `repeatedPhrases` array containing the indexes of repeated phrase occurrences.

### Analyzing Multiple Texts

- Created `analyzeTexts()` to analyze multiple text arrays using the same functions.
- Created an empty `results` array to store the analysis for each text.
- Used a `for...of` loop to directly access each `text` from the `texts` array.
- Called `findRepeatedPhrases(text, phraseLength)` to find repeated phrases.
- Called `findPalindromeBreaks(text)` to find non-palindromic words.
- Created an object for each text containing:
  - `repeatedPhrases`
  - `palindromeBreaks`
- Used `push()` to add each analysis object to the `results` array.
- Returned the completed `results` array.
