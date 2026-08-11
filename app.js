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
    e.target.classList.add("btn");
    console.log(e.target.innerText);
    nextBtn.classList.remove("hide");
    if (e.target.innerText === questions[position].choices[position]) {
      score++;
    }
  }
});

nextBtn.addEventListener("click", (e) => {
  position++;
  showQuestions();
  if (position > 3) {
    showResult();
  }
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
