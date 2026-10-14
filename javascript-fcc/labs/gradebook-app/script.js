function getAverage(scores) {
  let total = 0;

  for (const score of scores) {
    total += score;
  }

  return total / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]))

console.log(getGrade(80))
console.log(hasPassingGrade(85))
console.log(hasPassingGrade(40))

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))

/*
71.7
85.4
47.25
B
true
false
Class average: 71.7. Your grade: F. You failed the course.
Class average: 50.8. Your grade: A+. You passed the course.
*/