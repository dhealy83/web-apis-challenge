var timeLeft = 5;
    var element = document.querySelector(".timeLeft");
    var secLeft = " seconds left.";
    var letsGo = document.querySelector(".timerStart");
    var introParagraph = document.querySelector(".intro");
    var letsGo = document.querySelector(".timerStart");
    var currentIndex = 0;
    var p1El = document.getElementById("q1");
    
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


// console.log(pEl);



function startQuizButton(event) {
    
    letsGo.setAttribute("style", "display: none");
    introParagraph.setAttribute("style", "display: none");
    
    
    
    
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
        nextQuestion()
    }
    

    letsGo.addEventListener("click", startQuizButton);
    
    
    function nextQuestion() {
        //TODO: When I click let's go we call the questions on the quiz. We need to show buttons as well.
        p1El.textContent = questions[0].title;

        var choiceArray = questions[currentIndex];

        for ( i=0; i < choiceArray.choices.length; i++) {
            var choiceButton = document.createElement("button");
            var choice = choiceArray.choices[i];
            choiceButton.setAttribute("class", ".timerStart");
            choiceButton.setAttribute("value", choice);
            choiceButton.textContent = choice;
            p1El.appendChild(choiceButton);
        }
        
        

    }