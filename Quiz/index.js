let questions = [
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Programming Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Control Processing Unit", correct: false },
    ],
  },
  {
    question: "Which of the following is not a programming language?",
    answers: [
      { text: "Python", correct: false },
      { text: "HTML", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What does RAM stand for?",
    answers: [
      { text: "Read And Modify", correct: false },
      { text: "Read Access Memory", correct: false },
      { text: "Random Access Memory", correct: true },
      { text: "Randomly Allocated Memory", correct: false },
    ],
  },
  {
    question: "Which company developed the Java programming language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Oracle", correct: false },
      { text: "Google", correct: false },
      { text: "Sun Microsystems", correct: true },
    ],
  },
  {
    question: "Which of these is a search algorithm?",
    answers: [
      { text: "Quick Sort", correct: false },
      { text: "DFS", correct: false },
      { text: "Merge Sort", correct: false },
      { text: "Binary Search", correct: true },
    ],
  },
  {
    question: "What does HTTP stand for?",
    answers: [
      { text: "Hyperlink Text Transfer Protocol", correct: false },
      { text: "High Transfer Text Protocol", correct: false },
      { text: "Hypertext Transfer Protocol", correct: true },
      { text: "Hyper Transfer Text Protocol", correct: false },
    ],
  },
  {
    question: "Which of the following is a NoSQL database?",
    answers: [
      { text: "MySQL", correct: false },
      { text: "SQLite", correct: false },
      { text: "MongoDB", correct: true },
      { text: "PostgreSQL", correct: false },
    ],
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question: "Which data structure uses LIFO?",
    answers: [
      { text: "Linked List", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Queue", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
      { text: "Cascading System Sheets", correct: false },
    ],
  },
  {
    question:
      "Which sorting algorithm has the best average-case time complexity?",
    answers: [
      { text: "Selection Sort", correct: false },
      { text: "Insertion Sort", correct: false },
      { text: "Merge Sort", correct: true },
      { text: "Bubble Sort", correct: false },
    ],
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Simple Query Language", correct: false },
      { text: "Standard Query Language", correct: false },
      { text: "Structured Query Language", correct: true },
      { text: "Sequential Query Language", correct: false },
    ],
  },
  {
    question: "Which of the following is a frontend framework?",
    answers: [
      { text: "Django", correct: false },
      { text: "Flask", correct: false },
      { text: "Node.js", correct: false },
      { text: "React", correct: true },
    ],
  },
  {
    question: "Which of the following is an example of an operating system?",
    answers: [
      { text: "JVM", correct: false },
      { text: "Python", correct: false },
      { text: "HTML", correct: false },
      { text: "Linux", correct: true },
    ],
  },
  {
    question: "Which of these is a principle of Object-Oriented Programming?",
    answers: [
      { text: "Compilation", correct: false },
      { text: "Encapsulation", correct: true },
      { text: "Recursion", correct: false },
      { text: "Synchronization", correct: false },
    ],
  },
  {
    question: "What is the default port for HTTP?",
    answers: [
      { text: "21", correct: false },
      { text: "80", correct: true },
      { text: "443", correct: false },
      { text: "22", correct: false },
    ],
  },
  {
    question: "What does DNS stand for?",
    answers: [
      { text: "Distributed Name Service", correct: false },
      { text: "Domain Name System", correct: true },
      { text: "Domain Name Server", correct: false },
      { text: "Data Network System", correct: false },
    ],
  },
  {
    question: "Which of the following is an interpreted language?",
    answers: [
      { text: "C++", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: true },
      { text: "Java", correct: false },
    ],
  },
  {
    question: "What is the purpose of a firewall in a computer network?",
    answers: [
      { text: "To enhance internet speed", correct: false },
      { text: "To manage DNS", correct: false },
      { text: "To prevent unauthorized access", correct: true },
      { text: "To store data securely", correct: false },
    ],
  },
  {
    question: "Which of the following is used to style web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "SQL", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
];

let qusetion_tag = document.querySelector(".question");
let answerButtons = document.querySelector(".answers");
let nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;
newGame();
function newGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let currentQuestionNo = currentQuestionIndex + 1;
  qusetion_tag.innerHTML = currentQuestionNo + " . " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    newGame();
  }
});
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function showScore() {
  resetState();
  qusetion_tag.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
