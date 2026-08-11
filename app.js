import { questions } from "./questions.js";

const questionDiv = document.getElementById("question-div");
const questionTitle = document.getElementById("question");
const questionList = document.getElementById("question-list");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const scoreTotal = document.getElementById("score");
const restart = document.getElementById("restart-btn");
const start = document.getElementById("start-btn");

let position = 0;
let score = 0;

start.addEventListener("click", (e) => {
  questionDiv.classList.remove("hide");
  start.classList.add("hide");
  showQuestions();
});

questionList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const choices = questionList.querySelectorAll("li");
    choices.forEach((li) => li.classList.remove("btn"));

    e.target.classList.add("btn");
    nextBtn.classList.remove("hide");
  }
});

nextBtn.addEventListener("click", (e) => {
  const selectedChoice = document.querySelector("li.btn");

  if (
    selectedChoice &&
    selectedChoice.innerText.trim() === questions[position].answer
  ) {
    score++;
  }
  position++;
  if (position >= questions.length) {
    showResult();
  } else {
    showQuestions();
  }
});

restart.addEventListener("click", (e) => {
  restartGame();
});

function showQuestions() {
  if (position < questions.length) {
    questionTitle.innerText = `${questions[position].question}`;
    questionList.innerHTML = "";
    questions[position].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.className = "choice";
      li.innerHTML = choice;
      questionList.appendChild(li);
    });
    nextBtn.classList.add("hide");
  }
}

function showResult() {
  result.classList.remove("hide");
  scoreTotal.innerText = score;
  questionDiv.classList.add("hide");
}

function restartGame() {
  result.classList.add("hide");
  start.classList.remove("hide");
  position = 0;
  score = 0;
}
