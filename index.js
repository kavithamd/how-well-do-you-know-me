var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("May I know your name? ");
console.log("Welcome " + userName + " to DO YOU KNOW Kavitha?");

console.log("------------------------");

var highScore = [
  {
    name: "kmd",
    score: 5,
  },
  {
    name: "savitha",
    score: 4,
  },
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score++;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("------------");
}

var questions = [
  {
    question: "where do I live? ",
    answer: "Bangalore",
  },
  {
    question: "where do I work? ",
    answer: "IT",
  },
  {
    question: "whats my profession? ",
    answer: "Engineer",
  },
  {
    question: "whats my native language? ",
    answer: "Kannada",
  },
  {
    question: "whats my favorite color? ",
    answer: "Purple",
  },
  {
    question: "whats my favorite anime? ",
    answer: "Naruto",
  },
];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("Your Total Score is : ", score);
console.log(
  "Check out the high scores, if you should be there ping me and I'll update it,"
);
highScore.map((score) => console.log(score.name, ":", score.score));

console.log("Thank you for playing !");
