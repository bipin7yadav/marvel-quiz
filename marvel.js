// ex15: print the final score to the user

var readline=require("readline-sync")
var chalk = require("chalk")
var username=readline.question("May I have your name? ")
console.log(chalk.blue("Welcome, ")+username+"!")
var score=0

function quiz(question,answer){
    var userAnswer=readline.question(question)
    if (userAnswer===answer){
        console.log("right answer!")
        score+=1
        console.log("Your current score is ",score)
    }else{
        console.log("Wrong answer")
    }
    console.log("You total score is "+score)
    console.log("---------------------")
}

var questions=[{
    question:"Who is the father of cricket? \n A.Dhoni \n B. Sachin Tendulkar\n",
    answer:"Sachin Tendulkar"
},{
    question:"What is Known as Captian-Cool?\n A.Rohit Sharma \n B.Dhoni\n ",
    answer:"Dhoni"
},{
    question:"Who is the first president of India? \n A.Dr Rajendra Prasad \n B. Modi \n",
    answer:"Dr Rajendra Prasad"
},{
    question:"Where am I from? \n A.Pune \n B.Mumbai\n",
    answer:"Mumbai"
}]

var highscore=[{
    name:"Sachin",
    hc:4
}]

for (var i=0;i<questions.length;i+=1){
    var currentQuestion=questions[i]
    quiz(currentQuestion.question,currentQuestion.answer)
}
console.log("You Highest score is ",score + " and current highest score is "+highscore[0].hc)