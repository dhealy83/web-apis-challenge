var timeLeft = 5;
var element = document.querySelector(".timeLeft");
var secLeft = " seconds left.";
var letsGo = document.querySelector(".buttons");
var introParagraph = document.querySelector(".intro");
var currentIndex = 0;
var p1El = document.getElementById("q1");
var p2El = document.getElementById("q2");
var questionContainer = document.querySelector(".questionContainer")

    
var questions = [
    {
        title: "What is the Snickers Bar original name?",
        correctAnswer: "Marathon Bar",
        choices: [
            "Wonka Bar",
            "Marathon Bar",
            "OH! Henry"
        ]
    },
    {
        title: "What was the original name for cotton candy?",
        correctAnswer: "Fairy Floss",
        choices: [
            "Fairy Floss",
            "Candy Spider Web",
            "Dental Damage"
        ]
    },
]
// console.log(questions[0].title);


function startQuizButton() {
    
    letsGo.setAttribute("style", "display: none");
    introParagraph.setAttribute("style", "display: none");
 
    
    // console.log(letsGo);
//This sets the timer off when you click let's go. It also displays the timer on the page.    
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft === 0) {
            alert("Times Up");
            clearInterval(timerId);
            return;
        } else {
            timeLeft--;
            }
            // console.log(timeLeft);
            element.textContent = timeLeft + " seconds left.";
        }
        nextQuestion()
    }
    

    letsGo.addEventListener("click", startQuizButton);


    function nextQuestion() {
        // p1El.innerHTML = "";
        letsGo.innerHTML = "";
        questionContainer.textContent = questions[0].title;
        var currentQuestion = questions[currentIndex];
        console.log(currentQuestion);
        for ( i=0; i < currentQuestion.choices.length; i++) {
            var choiceOption = currentQuestion.choices[i];
            var choiceButton= document.createElement("button");
            // choiceButton.setAttribute("class", "choice-option");
            choiceButton.setAttribute("value", choiceOption);
            choiceButton.setAttribute("class", "buttons")
            choiceButton.textContent = choiceOption;
            questionContainer.appendChild(choiceButton);


            choiceButton.addEventListener("click", function()
            {
                if (this.value == currentQuestion.correctAnswer) {
                    currentIndex++;
                    nextQuestion();
                }
            })
        }
    }
