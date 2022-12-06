var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("May I know your name? ");
console.log("Welcome " + userName + " to DO YOU KNOW Kavitha?");

console.log("------------------------");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right👌");
    score++;
  } else {
    console.log("wrong👎");
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
    answer: "Black",
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

console.log("Thank you for playing");
