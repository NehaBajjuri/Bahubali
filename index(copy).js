var readlineSync = require ("readline-sync");

score =0
function welcome(){
var userId = readlineSync.question("May I have your name? ")
console.log("Welcome "+userId+"!!")
console.log("Hey "+userId +" Let's play Bahubali Quiz")
}
//array of objects

var questions = [{
    question: "Who is the hero in Bahubali? ",
    answer: "prabhas"
  },{
     question: "Who is the music director of Bahubali?(You can give the shortcut of his name ;) ",
    answer:"MMK"
  },
  {
    question: "What is the nickname of the one who acted as devasena in the film?  ",
    answer:"sweety"
  },
  {
    question:"In which year BAHUBALI-The Beginning did release? ",
    answer: "2015"
  },
  {
    question:"Who played the role kattappa? ",
    answer:"sathyaraj"
  }
  
];


function quiz(question,answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase())
    {
      console.log("Yay!You were right!!")
      score++;
    }
    else{
      console.log("I'm sorry! You are wrong!!")
      
    }

    console.log("Current score:  ",score)
    console.log("..................")
  }
function game(){
  for(var i=0;i<questions.length;i++)
  {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question,currentQuestion.answer)
  }
  }

welcome();
game();

  console.log("Yayy! You scored ",score);
