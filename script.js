// Quiz stored in an IIFE
function startQuiz() {

    // Question Function Constructor
    var Question = function(question, possibleAnswers, correctAnswer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
        this.showQuestion = function(question, possibleAnswers) {
            if (question !== null && possibleAnswers !== null) {
                console.log(this.question);
                console.log(this.possibleAnswers);
            }
        }
    }

    // new question q1
    var q1 = new Question();
    q1.question = "What is the name of the dog in the movie \'As Good as it Gets\'?";
    q1.possibleAnswers = ['1: Buddy', '2: Stanley', '3: Verdell', 'or type exit to quit'];
    q1.correctAnswer = "3";

    // new question q2
    var q2 = new Question();
    q2.question = "Who played Batman in the 1960s TV series?";
    q2.possibleAnswers = ['1: George Clooney', '2: Adam West', '3: Tom Green', 'or type exit to quit'];
    q2.correctAnswer = "2";

    // new question q3
    var q3 = new Question();
    q3.question = "Which of these geological periods occurred most recently?";
    q3.possibleAnswers = ['1: Mesozoic', '2: Mesoproterozoic', '3: Cenozoic', 'or type exit to quit'];
    q3.correctAnswer = "3";

    // store the questions in an array
    var questions = [q1, q2, q3];

    // select a random question
    var activeQuestion = questions[Math.floor(Math.random()*questions.length)];

    // trigger showQuestion method for activeQuestion 
    activeQuestion.showQuestion();

    var points = 0;
    var winningScore = 10;

    // prompt user for an answer
    var userAnswer = prompt("Enter the number corresponding to the correct answer:");

    var check = checkAnswer(activeQuestion.correctAnswer);
    check(userAnswer);

    function checkAnswer(correctAnswer){
        return function(userAnswer) {
            if(userAnswer === activeQuestion.correctAnswer) {
                alert("Correct!");
                points += 1;
                console.log("Points: " + points);
                startQuiz();
            } else {
                alert("Wrong answer.");
                startQuiz();
            }
        }
    }

    
}

alert("Get ready to start the quiz!");
startQuiz();










