var timeLeft = 5;
    var element = document.querySelector(".timeLeft");
    var secLeft = " seconds left.";
    var letsGo = document.querySelector(".timerStart");
    
var questions = [
    {
        title: "What is the Snickers Bar original name?",
        correctAnswer: "Marathon Bar",
        choices: [
            "Wonka Bar",
            "Chunky Bar",
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
console.log(questions[0].title);


var introParagraph = document.querySelector(".intro");
var letsGo = document.querySelector(".timerStart");
var currentIndex = 0;
var  p2El = document.getElementById("q1");
// console.log(pEl);


correctAnswer.setAttribute("style", "display: none")



function startQuizButton(event) {
    
    letsGo.setAttribute("style", "display: none");
    introParagraph.setAttribute("style", "display: none");
    

    p2El.textContent = questions[0].title;


    console.log(letsGo);
    
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft === 0) {
            alert("Times Up");
            clearInterval(timerId);
                return;
            } else {
                timeLeft--;
            }
            console.log(timeLeft);
            element.textContent = timeLeft + " seconds left.";
        }
    }
    
    letsGo.addEventListener("click", startQuizButton);
    
    
