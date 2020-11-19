const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homebox = document.querySelector(".home-box");
const resultBox = document.querySelector(".result-box");
const quizBox = document.querySelector(".quiz-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let count = 1;
var quiz;
var next_page = false;
var passingScore;
var status;

// TODO push the question into the available question array
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i]);
    }
}

// TODO set question number and its options
function getNewQuestion() {
    //question number
    questionNumber.innerHTML = "Question " + count + " of " + quiz.length;

    //question text
    //random question
    const questionIndex =
        availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    // get the position of questionInex from the available questions array
    const index1 = availableQuestions.indexOf(questionIndex);
    // remove the question from the array to avoid repetition of questions
    availableQuestions.splice(index1, 1);
    // console.log(questionIndex);

    // set options
    const optionLength = currentQuestion.options.length;
    for (let i = 0; i < optionLength; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = "";
    let animationDelay = 0.15;
    //create options in html
    for (let i = 0; i < optionLength; i++) {
        // random options
        const optionIndex =
            availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);
        //console.log(optionIndex);

        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
    count++;
}

// TODO get the result of current attempt question
function getResult(element) {
    const id = parseInt(element.id);
    // get the correct answer
    if (id === currentQuestion.answer) {
        // green when correct
        // element.classList.add("correct");
        // progress
        updateAnswerIndicator("correct");
        correctAnswers++;
        console.log("c: " + correctAnswers);
        next_page = true;
    } else {
        // red when incorrect
        // element.classList.add("wrong");
        // progress
        updateAnswerIndicator("wrong");
        next_page = true;

        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                // optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}
// TODO restrict the user in changing anwers
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = "";
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(
        markType
    );
}

function next() {
    if (next_page == false) {
        JSalert();
    } else {
        if (questionCounter === quiz.length) {
            console.log("quiz over");
            quizOver();
        } else {
            getNewQuestion();
        }
    }
    next_page = false;
}

function JSalert() {
    swal("Sorry!", "Please Pick Your Answer", "error");
}

function quizOver() {
    // hide quiz box
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    document.getElementById("scoreToDB").setAttribute("value", correctAnswers);
    resultBox.querySelector(".total-score").innerHTML = correctAnswers;

    passingScore = Math.round(quiz.length * 80 * 0.01);
    status = getScoreStatus();

    if (status == "passed") {
        saveToDb();
        swal("PASSED!", "Score successfully recorded!", "success");
    } else {
        saveToDb();
        if (!swal("FAILED!", "Score successfully recorded!", "error")) {
            window.location.reload();
        }
    }
}

//Ajax save score and other data to database.
function saveToDb() {
    //get 80% of the total number of questions

    $.post("../Filipino Page/php/connectdb.php", {
        lesson_name: lesson_name,
        score: correctAnswers,
        passing_score: passingScore,
        no_of_items: quiz.length,
        status: status,
    });
}

//get score status if pass or fail
function getScoreStatus() {
    if (correctAnswers >= passingScore) {
        return "passed";
    }
    return "failed";
}

function start() {
    if (sessionStorage.getItem("ID") == 1) {
        quiz = assessfil1;
    } else if (sessionStorage.getItem("ID") == 2) {
        quiz = assessfil2;
    } else if (sessionStorage.getItem("ID") == 3) {
        quiz = assessfil3;
    } else if (sessionStorage.getItem("ID") == 4) {
        quiz = assessfil4;
    } else if (sessionStorage.getItem("ID") == 5) {
        quiz = assessfil5;
    }
    // hide home box

    // show quizbox

    // set all the questions in the available questions array
    setAvailableQuestions();
    // cthen call the get new question
    getNewQuestion();
    // progress indicator
    answersIndicator();
}

function goHome() {
    window.location.href = "../Filipino Page/topics_filipino.html";
}