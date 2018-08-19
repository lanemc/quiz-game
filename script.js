// Quiz stored in an IIFE
/*
(function () {
    // Question Function Constructor
    function Question(question, possibleAnswers, correctAnswer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.possibleAnswers.length; i++) {
            console.log(i + ': ' + this.possibleAnswers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === 'exit') {
            window.stop();
        } else if(ans === this.correctAnswer) {
            alert("Correct!");
        } else {
            alert("Wrong answer. Try again.");
        }
    }

    // new question q1
    var q1 = new Question();
    q1.question = "What is the name of the dog in the movie \'As Good as it Gets\'?";
    q1.possibleAnswers = ['Buddy', 'Stanley', 'Verdell', 'or type exit to quit'];
    q1.correctAnswer = 2;

    // new question q2
    var q2 = new Question();
    q2.question = "Who played Batman in the 1960s TV series?";
    q2.possibleAnswers = ['George Clooney', 'Adam West', 'Tom Green', 'or type exit to quit'];
    q2.correctAnswer = 1;

    // new question q3
    var q3 = new Question();
    q3.question = "Which of these geological periods occurred most recently?";
    q3.possibleAnswers = ['Mesozoic', 'Mesoproterozoic', 'Cenozoic', 'or type exit to quit'];
    q3.correctAnswer = 2;

    // store the questions in an array
    var questions = [q1, q2, q3];

    // select a random question
    var activeQuestion = Math.floor(Math.random()*questions.length);

    // trigger showQuestion method for activeQuestion 
    questions[activeQuestion].showQuestion();

    // prompt user for an answer
    var userAnswer = parseInt(prompt("Enter the number corresponding to the correct answer."));

    questions[activeQuestion].checkAnswer(userAnswer);

    //var check = checkAnswer(activeQuestion.correctAnswer);
    //check(userAnswer);


})();
*/


(function () {
    // Question Function Constructor
    function Question(question, possibleAnswers, correctAnswer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.showQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.possibleAnswers.length; i++) {
            console.log(i + ': ' + this.possibleAnswers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correctAnswer) {
            alert("Correct!");
            sc = callback(true);
        } else {
            alert("Wrong answer. Try again.");
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    // new question q1
    var q1 = new Question();
    q1.question = "What is the name of the dog in the movie \'As Good as it Gets\'?";
    q1.possibleAnswers = ['Buddy', 'Stanley', 'Verdell', 'or type exit to quit'];
    q1.correctAnswer = 2;

    // new question q2
    var q2 = new Question();
    q2.question = "Who played Batman in the 1960s TV series?";
    q2.possibleAnswers = ['George Clooney', 'Adam West', 'Tom Green', 'or type exit to quit'];
    q2.correctAnswer = 1;

    // new question q3
    var q3 = new Question();
    q3.question = "Which of these geological periods occurred most recently?";
    q3.possibleAnswers = ['Mesozoic', 'Mesoproterozoic', 'Cenozoic', 'or type exit to quit'];
    q3.correctAnswer = 2;

    // store the questions in an array
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        // select a random question
        var activeQuestion = Math.floor(Math.random()*questions.length);

        // trigger showQuestion method for activeQuestion 
        questions[activeQuestion].showQuestion();

        // prompt user for an answer
        var userAnswer = prompt("Enter the number corresponding to the correct answer.");

        if(userAnswer !== 'exit') {
            questions[activeQuestion].checkAnswer(parseInt(userAnswer), keepScore);
            nextQuestion();
        }
    }
    
    nextQuestion();

})();










