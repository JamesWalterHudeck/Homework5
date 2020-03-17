
var myQuestions = [{questionTitle: "q1", choice: {a: "hello", b: "goodbye", c:"hello"}, answer : "a"}, 
                  {questionTitle: "q2", choice: {a: "a", b: "b", c:"c"}, answer : "c"}, 
                  {questionTitle: "q3", choice: {a: "a", b: "b", c:"c"}, answer : "c"}, 
                  {questionTitle: "q4", choice: {a: "a", b: "b", c:"c"}, answer : "c"},
                  {questionTitle: "q5", choice: {a: "a", b: "b", c:"c"}, answer : "c"},
];
var currentQuestionIndex = 0;
var q = myQuestions[currentQuestionIndex];
var questionIdex = myQuestions.length-1;
var time = myQuestions.length * 10;
//Testing note notation to pull out specific data

var startBtn = document.getElementById("#start");
var start = document.getElementById("start-screen");
var timerEl = document.getElementById("time");
var score = 0


console.log(score);
// function startQuiz() {};
$(document).ready(function(){
  $("#time").text(time);
  $("#start").click(function(){
    $("#start-screen").hide();
    $("#question").show();
    getQuestion();
    timer();
  });
});

function timer(){
  var timerInterval = setInterval(function() {

    time--;

    $("#time").text(time);    

    if(time === 0) {
      clearInterval(timerInterval);
      alert("Time is up!");
      $("#question").hide();
      $("#end-screen").show();
    }
  }, 1000); 
}

function getQuestion(){
  $("#questions").text(q.questionTitle);
  $("#a").text(q.choice.a);
  $("#b").text(q.choice.b);
  $("#c").text(q.choice.c);
  $("#nextQ").hide();
  console.log(score)
};

function nextQuestion(){  
  $("#nextQ").click(function(){
    $("#results").hide(); 
    if(currentQuestionIndex < questionIdex){
      currentQuestionIndex++;
      getQuestion();
    }
    else{
      $("#question").hide();
      $("#end-screen").show();
      stop(timer);
      saveHighscore();
    };
    return;
  });
};

function getAnswer(answer){
  if (q.answer == answer){
      score++;
      $("#results").text("Correct!");
      $("#results").show();
      $("#nextQ").show();
      nextQuestion();  }
  else{
      $("#results").text("Wrong! The correct answers is" + " " + q.answer + ".");
      $("#results").show();
      $("#nextQ").show();
      time-10;
      nextQuestion();
  };
};

var username = document.getElementById("username")
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var recentScore = sessionStorage.getItem("recentScore")
//finalScore.innerText= recentScore;


function saveHighscore() {
  $("#submit").click(function(){
  console.log("clicked the save button!");
  });
};










  //   for (var i = 0; i < myQuestions.length; i++){
  //     getQuestion(currentQuestionIndex[i]);
  //   }
  //   $("#results").hide();
  // });

// var score = 0
// function (){
//   if checkAnser true


//remove ids of questions and choices

//   // get current question object from array
//   // update title with current question
//   // clear out any old question choices
//   // loop over choices
//   for (i = 0; i < questions.length; i++){

//   };
//     // create new button for each choice
//     // attach click event listener to each choice
//     // display on the page

// }

// function questionClick() {
//   // check if user guessed wrong and penalize time if incorrect
//   // display new time on page
//   // else show correct feedback
//   // move to next question
//   currentQuestionIndex++;
//   // check if we've run out of questions

// }

//   // stop timer
//   // show end screen
//   // show final score
//   // hide questions section
// }

// // function clockTick() {
// // update time
// // check if user ran out of time
//    if (time <= 0) {
//      quizEnd();
//    }
//  }

// function saveHighscore() {
// // get value of input box
//    var initials = ("")

//    // make sure value wasn't empty
//   if (initials !== "") {
//      // get saved scores from localstorage, or if not any, set to empty array
//      // format new score object for current user
//      // save to localstorage
//      // redirect to next page

//    }
//  }

//  // user clicks button to submit initials
// // // user clicks button to start quiz