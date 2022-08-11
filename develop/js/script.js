var timeLeft = 5;
    var element = document.querySelector(".timeLeft");
    var secLeft = " seconds left.";
    var nextPage = document.querySelector(".timerStart");

    
    
    function nextPage001(event) {
        console.log(nextPage);
        
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft === 0) {
                alert("Times Up")
                clearInterval(timerId);
                return;
            } else {
                timeLeft--;
            }
            console.log(timeLeft);
            element.textContent = timeLeft + " seconds left.";
            }
    }
    
    nextPage.addEventListener("click", nextPage001);

// function genQuiz(questions, quizContainer, resultContainer, submitButton) {

//     function showQuestions(questions, quizContainer); {

//     }

//     function showResults(questions, quizContainer, resultContainer); {

//     }

//     showQuestions(questions, quizContainer); {

//     }

//     submitButton.timerStart = function() {
//         showResults(showResults, quizContainer, resultContainer);
//     }

// }

var questions = [
    {
        questions: "How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?",

        answer: {
            a: "3",
            b: "7",
            c: "1,395,209"
        },
        {
        question: "What was the original name of the Snickers Bar?",
            a: "Marathon",
            b: "Horse Bar",
            c: "Wonka Bar"
        },
        {
        question: "What was the original name of cotton candy?",
            a: "Dental Damage",
            b: "Fairy Floss",
            c: "Candy Spider Web"
        },       
    }
];

function showQuestions(questions, quizContainer) {
    var outPut = [];
    var answer;

    for (var i=0; 1<questions.length; i++) {

        answer = [];

        for(letter in question[i].answer) {
            answer.push(
                "<label>"
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + question[i].answer[letter]
                + '</label>'
            );
        }

        outPut.push(
            '<div class="answer">' + question[i].question + '</div>'
        );
    }

    questionContainer.innerHtml = outPut.join("");
}

showQuestions(questions, quizContainer);