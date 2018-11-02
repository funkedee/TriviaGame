$(document).ready(function () {
    var triviaGame = {
        questionNumber: 0,
        incorrect: 0,
        correct: 0,
        unanswered: 0,
        timeRemaining: 30,
        questionArray: [{
            question: "In which U.S. city was Nirvana formed?",
            correctAnswer: "Seattle, Washington",
            answersList: "<ul><li>Portland, Maine</li><li>Boston, Massachusetts</li><li class= 'correct_answer'>Seattle, Washington</li><li>Oakland, Californina</li></ul>",
            gif: "<img src= 'assets/images/seattle.webp' alt='seatle gif'></img>",
        }, {
            question: "What is The Notorious B.I.G's real name?",
            correctAnswer: "Christopher Wallace",
            answersList: "<ul><li class= 'correct_answer'>Christopher Wallace</li><li>Michael Billings</li><li>Jordan Allen</li><li>Steven Jackson</li></ul>",
            gif: "<img src='assets/images/biggie.webp' alt= 'biggie gif'></img>",
        }, {
            question: "What was the name of Pearl Jam's debut album?",
            correctAnswer: "Ten",
            answersList: "<ul><li>Doolittle</li><li class= 'correct_answer'>Ten</li><li>Backspacer</li><li>EleMental</li></ul>",
            gif: "<img src= 'assets/images/ten.webp' alt= 'ten gif'></img>"
        }, {
            question: "In 1991, the album, Blood Sugar Sex Magik, was released by which band?",
            correctAnswer: "The Red Hot Chili Peppers",
            answersList: "<ul><li class= 'correct_answer'>The Red Hot Chili Peppers</li><li>The Pixies</li><li>Green Day</li><li>No Doubt</li></ul>",
            gif: "<img src= ' assets/images/rhcp.webp' alt= 'rhcp gif'></img>",
        }, {
            question: "Thome Yorke is the lead singer of which band?",
            correctAnswer: "Radiohead",
            answersList: "<ul><li>SoundGarden</li><li>Imagine Dragons</li><li>The Smashing Pumpkins</li><li class= 'correct_answer'>Radiohead</li></ul>",
            gif: "<img src= 'assets/images/radiohead.webp' alt= 'radiohead gif'></img>",
        }, {
            question: "In what year was Tupac Shakur shot and killed?",
            correctAnswer: "1996",
            answersList: "<ul><li>1999</li><li class= 'correct_answer'>1996</li><li>2010</li><li>1990</li>",
            gif: "<img src= 'assets/images/tupac.webp' alt= 'tupac gif'></img>",
        }, {
            question: "Who released the album, Jagged Little Pill, in 1995?",
            correctAnswer: "Alanis Morissette",
            answersList: "<ul><li>Celine Dion</li><li>Paul McCartney</li><li>Madonna</li><li class= 'correct_answer'>Alanis Morissette</li></ul>",
            gif: "<img src= 'assets/images/alanis.webp' alt= 'alanis gif'></img>",
        }, {
            question: "In what year was the band, R.E.M., inducted to the Rock and Roll Hall of Fame?",
            correctAnswer: "2007",
            answersList: "<ul><li>1999</li><li>2015</li><li class= 'correct_answer'>2007</li><li>1995</li></ul>",
            gif: "<img src= 'assets/images/r.e.m..webp' alt= 'r.e.m. gif'></img>",
        }, {
            question: "The Wu-Tang Clan formed in Staten Island, New York in 1991 with how many original members?",
            correctAnswer: "9",
            answersList: "<ul><li class= 'correct_answer'>9</li><li>5</li><li>3</li><li>12</li></ul>",
            gif: "<img src= 'assets/images/wu-tang.webp' alt= 'wu-tang gif'></img>",
        },
        ],
        startGame: function () {
            $("#start-button").on("click", function () {

                // start first question
                triviaGame.play();
            });
        },

        play: function () {
            // clear game div
            $("#game").empty();

            // if out of questions end game
            if (triviaGame.questionNumber === 9) {
                triviaGame.end();
            }
            else {
                // make timer div set to 30 seconds
                $("#game").append("<div id= 'timer'><h2>Time remaining: <span id= 'time-remaining'>30</span> seconds</h2></div>");
                triviaGame.timeRemaining = 30;

                // start question timer- interval 1 second
                var questionTimer = setInterval(function () {

                    // decrement time
                    triviaGame.timeRemaining--;

                    // display time remaining
                    $("#time-remaining").text(triviaGame.timeRemaining);

                    // if time runs out
                    if (triviaGame.timeRemaining === 0) {
                        // stop timer
                        clearInterval(questionTimer);
                        triviaGame.timesUp();
                    };
                }, 1000);

                // display question
                $("#game").append("<div id= 'question'><h2>" + this.questionArray[this.questionNumber].question + "</h2></div>");

                //display answers
                $("#game").append(this.questionArray[this.questionNumber].answersList);

                // when you choose an answer...
                $("li").on("click", function () {

                    // stop timer
                    clearInterval(questionTimer);

                    // clear game div
                    $("#game").empty();

                    // if correct
                    if (this.className === 'correct_answer') {
                        triviaGame.ifCorrect();
                    }
                    // if incorrect
                    else {
                        triviaGame.ifIncorrect();
                    };
                });
            };
        },
        timesUp: function () {
            // clear game div
            $("#game").empty();

            // display result and gif
            $("#game").append("<div class= 'result'>Time's Up</div><div class= 'answer'>The correct answer is " + triviaGame.questionArray[triviaGame.questionNumber].correctAnswer);
            $("#game").append(triviaGame.questionArray[triviaGame.questionNumber].gif);

            // set response timer to 5 seconds
            var responseTimer = setTimeout(function () {
                triviaGame.play();
            }, 5000);

            // increment question number and unanswered
            triviaGame.questionNumber++;
            triviaGame.unanswered++;
        },

        ifCorrect: function () {
            // display result and gif
            $("#game").append("<div class= 'result'>Correct!</div>");
            $("#game").append(triviaGame.questionArray[triviaGame.questionNumber].gif);

            // set response timer for 5 seconds
            var responseTimer = setTimeout(function () {
                triviaGame.play();
            }, 5000);

            // increment question number and correct
            triviaGame.questionNumber++;
            triviaGame.correct++;
        },

        ifIncorrect: function () {
            // diaplay result and gif
            $("#game").append("<div class= 'result'>Incorrect!</div><div class= 'answer'>The correct answer is " + triviaGame.questionArray[triviaGame.questionNumber].correctAnswer);
            $("#game").append(triviaGame.questionArray[triviaGame.questionNumber].gif);

            // set response timer for 5 seconds
            var responseTimer = setTimeout(function () {
                triviaGame.play();
            }, 5000);

            // increment question number and incorrect
            triviaGame.questionNumber++;
            triviaGame.incorrect++;
        },

        end: function () {
            // clear game div
            $("#game").empty()

            // display results
            $("#game").append("<div id= 'results'><h2> All done! Here's how you did:</h2><br>correct: " + triviaGame.correct + "<br>Incorrect: " + triviaGame.incorrect + "<br>Unanswered: " + triviaGame.unanswered + "</div>");

            // make start over
            $("#game").append("<div id=start-over><h2>Start over ?</h2></div>");

            // when you click on start over
            $("#start-over").on("click", function () {
                triviaGame.startOver();
            });
        },
        startOver: function () {
            // reset variables
            triviaGame.questionNumber = 0;
            triviaGame.incorrect = 0;
            triviaGame.correct = 0;
            triviaGame.unanswered = 0;

            // clear game div
            $("#game").empty();

            // make start button
            $("#game").append("<h2 id='start-button'>Start Game</h2>");

            triviaGame.startGame();
        }
    };
    triviaGame.startGame();
});