$(document).ready(function () {
    var triviaGame = {
        questionNumber: 0,
        incorrect: 0,
        correct: 0,
        questionArray: [{
            question: "In which U.S. city was Nirvana formed?",
            correctAnswer: "Seattle, Washington",
             answersList: "<ul><li>Portland, Maine</li><li>Boston, Massachusetts</li><li class= 'correct_answer'>Seattle, Washington</li><li>Oakland, Californina</li></ul>",
        }, {
            question: "What is The Notorious B.I.G's real name?",
            correctAnswer: "Christopher Wallace",
            answersList: "<ul><li class= 'correct_answer'>Christopher Wallace</li><li>Michael Billings</li><li>Jordan Allen</li><li>Steven Jackson</li></ul>",
        }, {
            question: "What was the name of Pearl Jam's debut album?",
            correctAnswer: "Ten",
            answersList: "<ul><li>Doolittle</li><li class= 'correct_answer'>Ten</li><li>Backspacer</li><li>EleMental</li></ul>",
        }, {
            question: "In 1991, the album, Blood Sugar Sex Magik, was released by which band?",
            correctAnswer: "The Red Hot Chili Peppers",
            answersList: "<ul><li class= 'correct_answer'>The Red Hot Chili Peppers</li><li>The Pixies</li><li>Green Day</li><li>No Doubt</li></ul>",
        }, {
            question: "Thome Yorke is the lead singer of which band?",
            correctAnswer: "Radiohead",
            answersList: "<ul><li>SoundGarden</li><li>Imagine Dragons</li><li>The Smashing Pumpkins</li><li class= 'correct_answer>Radiohead</li></ul>",
        }, {
            question: "In what year was Tupac Shakur shot and killed?",
            correctAnswer: "1996",
            answersList: "<ul><li>1999</li><li class= 'correct_answer>1996</li><li>2010</li><li>1990</li>",
        }, {
            question: "Who released the album, Jagged Little Pill, in 1995?",
            correctAnswer: "Alanis Morissette",
            answersList: "<ul><li>Celine Dion</li><li>Paul McCartney</li><li>Madonna</li><li class= 'correct_answer'>Alanis Morissette</li></ul>",
        }, {
            question: "In what year was the band, R.E.M., inducted to the Rock and Roll Hall of Fame?",
            correctAnswer: "2007",
            answersList: "<ul><li>1999</li><li>2015</li><li class= 'correct_answer'>2007</li><li>1995</li></ul>",
        }, {
            question: "The Wu-Tang Clan formed in Staten Island, New York in 1991 with how many original members?",
            correctAnswer: "9",
            answersList: "<ul><li class= 'correct_answer'>9</li><li>5</li><li>3</li><li>12</li></ul>",
        },
        ],
        startGame: function () {
            $("#start-button").on("click", function () {
                // remove start button
                $("#start-button").remove();

                // start first question
                triviaGame.play();
            });
        },

        play: function () {
            // make timer div set to 30 seconds
            $("#game").append("<div id= 'timer'><h2>Time remaining: <span id= 'time-remaining'>30</span> seconds</h2></div>");
            var timeRemaining = 29;

            // start question timer- interval 1 second
            var questionTimer = setInterval(function () {

                // display time remaining
                $("#time-remaining").text(timeRemaining);

                // if time runs out
                if (timeRemaining === 0) {

                    // stop timer
                    clearInterval(questionTimer);

                    // clear game div
                    $("#game").empty();

                    // display result
                    $("#game").append("<div class= 'result'>Time's Up</div>");
                };

                // decrement time
                timeRemaining--;
            }, 1000);

            // display question
            $("#game").append("<div id= 'question'><h2>" + this.questionArray[this.questionNumber].question + "</h2></div>");

            //display answers
            $("#game").append("<ul><li>" + this.questionArray[this.questionNumber].incorrectAnswers[0] + "</li><li class= 'correct_answer'>" + this.questionArray[this.questionNumber].correctAnswer + "</li><li>" + this.questionArray[this.questionNumber].incorrectAnswers[1] + "</li><li>" + this.questionArray[this.questionNumber].incorrectAnswers[2] + "</li></ul>");

            // when you choose an answer...
            $("li").on("click", function () {

                // stop timer
                clearInterval(questionTimer);

                // clear game div
                $("#game").empty();

                // if correct
                if (this.className === 'correct_answer') {

                    // display result
                    $("#game").append("<div class= 'result'>Correct!</div>");

                }
                // if incorrect
                else {

                    // diaplay result
                    $("#game").append("<div class= 'result'>Incorrect!</div>");
                };
                // increment question number
                questionNumber++;
            });
        },
    };
    triviaGame.startGame();
});