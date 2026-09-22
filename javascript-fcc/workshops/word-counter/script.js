function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"))

/* 
h
e
l
l
o
Checking "I" against "really" | Running count: 0
Checking "really" against "really" | Running count: 1
Checking "really" against "really" | Running count: 2
Checking "really" against "really" | Running count: 3
Checking "like" against "really" | Running count: 3
Checking "to" against "really" | Running count: 3
Checking "code" against "really" | Running count: 3
3
Checking "Do" against "dandy" | Running count: 0
Checking "not" against "dandy" | Running count: 0
Checking "fear" against "dandy" | Running count: 0
Checking "the" against "dandy" | Running count: 0
Checking "dandy" against "dandy" | Running count: 1
Checking "lion" against "dandy" | Running count: 1
1
*/