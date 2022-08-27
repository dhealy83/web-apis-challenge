var timeLeft = 10;
var element = document.querySelector(".timeLeft");
var secLeft = " seconds left.";
var letsGo = document.querySelector(".buttons");
var introParagraph = document.querySelector(".intro");
var currentIndex = 0;
var questionContainer = document.querySelector(".questionContainer");
var score = 0;
var stopQuizContainer = document.querySelector(".stopQuiz");
var savedScores = JSON.parse(localStorage.getItem("score")) || [];
var questions = [
  {
    title: "What is the Snickers Bar original name?",
    correctAnswer: "Marathon Bar",
    choices: ["Wonka Bar", "Marathon Bar", "OH! Henry"],
  },
  {
    title: "What was the original name for cotton candy?",
    correctAnswer: "Fairy Floss",
    choices: ["Fairy Floss", "Candy Spider Web", "Dental Damage"],
  },
];
function startQuizButton() {
  letsGo.setAttribute("style", "display: none");
  introParagraph.setAttribute("style", "display: none");
  // console.log(letsGo);
  //This sets the timer off when you click let's go. It also displays the timer on the page.
  var timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft === 0) {
      // alert("Times Up");
      clearInterval(timerId);
      return;
    } else if (currentIndex === questions.length) {
      clearInterval(timerId);
      element.innerHTML = "";
    } else {
      timeLeft--;
      element.textContent = timeLeft + " seconds left.";
    }
    // console.log(timeLeft);
  }
  nextQuestion();
}
letsGo.addEventListener("click", startQuizButton);
function nextQuestion() {
  // p1El.innerHTML = "";
  letsGo.innerHTML = "";
  questionContainer.innerHTML = "";
  var currentQuestion = questions[currentIndex];
  questionContainer.textContent = currentQuestion.title;
  console.log(currentQuestion);
  for (i = 0; i < currentQuestion.choices.length; i++) {
    var choiceOption = currentQuestion.choices[i];
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("value", choiceOption);
    choiceButton.setAttribute("class", "buttons");
    choiceButton.textContent = choiceOption;
    questionContainer.appendChild(choiceButton);
    // choiceButton.onclick = checkAnswer
    choiceButton.addEventListener("click", checkAnswer);
  }
  console.log("nextQuestion currentIndex: ", currentIndex);
}
console.log(questions.length);
function checkAnswer() {
  // check if the answer is correct, and give or retract numbers based on that
  if (this.value === questions[currentIndex].correctAnswer) {
    score += 2;
    console.log("score; ", score);
  } else {
    timeLeft -= 2;
  }
  // add one to the current index
  currentIndex++;
  // if cI is the same as the end of the question length, end quiz, otherwise next quest
  if (currentIndex === questions.length) {
    quizEnd();
  } else {
    nextQuestion();
  }
}
function quizEnd() {
  questionContainer.innerHTML = "";
  var apple = document.createElement("h1");
  var banana = (score += timeLeft);
  var orange = window.prompt("Enter your initials!!!");
  var fruitBasket = document.createElement("h2");
  fruitBasket.textContent = banana;
  var scoreBoard = {
    banana,
    orange,
  };
  apple.textContent = "YOUR SCORE";
  savedScores.push(scoreBoard);
  localStorage.setItem("score", JSON.stringify(savedScores));

  stopQuizContainer.appendChild(fruitBasket);
  console.log(scoreBoard);
  stopQuizContainer.appendChild(apple);
  for (i = 0; i < savedScores.length; i++) {
    var visibleScoreBoard = document.createElement("h3");
    visibleScoreBoard.textContent =
      savedScores[i].banana + "--" + savedScores[i].orange;
    stopQuizContainer.appendChild(visibleScoreBoard);
  }
}
