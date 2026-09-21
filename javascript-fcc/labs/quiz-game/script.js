const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson"
    ],
    answer: "George Washington"
  },
  {
    category: "Programming",
    question: "Which keyword declares a constant in JavaScript?",
    choices: ["const", "let", "var"],
    answer: "const"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}