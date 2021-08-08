alert ("Welcome to my first Rock Paper Scissors Game -- by David Ortiz");

//Declare acceptable responses
var computerChoice = ["ROCK", "PAPER", "SCISSORS"];

//Make and Array of smack talk and randomly pull from the array
var smackTalk = ["Ah, someone has taught you well, I see.", 
                "You think you're smart, huh?", 
                "That's a nice try, I guess",
                "Your mother was a TOASTER!!", 
                "That is an odd choice, but whatevs",
                "What is THAT supposed to mean?",
                "I think you might have tried that one before"]

var randomSmack = Math.floor((Math.random() * smackTalk.length));

//randomly chooses from the array of acceptable game moves

var computer = Math.floor((Math.random(computerChoice)* 3));
    console.log(computer);

//Creates and array of smack-talk for when the computer wins and randomly pulls from the array

var winningSmack = ["My Kung Fu is better than your Kung Fu. YOU LOSE!!!", 
                    "HA!!! YOU LOSE!! Better Luck Next time!", 
                    "You will have to think harder if you want to beat me! YOU LOSE!",
                    "YAWN!! Too Easy.  YOU LOSE!", 
                    "C'mon, this is my first game and you STILL can't beat me? YOU LOSE!"]

var randomWinningSmack = Math.floor((Math.random() * winningSmack.length));

//Creates an array of smack-talk for when the user loses and randomly pulls from the array

var losingSmack = ["Congratulations! Your Kung Fu was better than my Kung Fu.", 
                    "YOU WIN! Begginers' Luck", 
                    "YOU WIN! Let's play again!",
                    "OK, I Guess You win! Congratulations!", 
                    "You Win!  Good Job! whatever..."]

var randomLosingSmack = Math.floor((Math.random() * losingSmack.length));




//Prompt the user to enter their selection and force it to all uppercase
var playGame = function () {
    userChoice = prompt ("please input 'Rock', 'Paper', or 'Scissors'").toUpperCase()
}

//loops prompt until an acceptable input is made, then talks smack.
playGame()
    while (!computerChoice.includes(userChoice.toUpperCase())) {
        alert ("Your input does not have good kung fu.  Try Again!!");
        playGame()
    }
alert (smackTalk[randomSmack]); 

alert ("You have chosen " + userChoice + "!!     " + "I have chosen " + (computerChoice[computer]) + "!");

//makes the comparisons to determine the winner then talks more smack

var gametime = function () {
    if (userChoice === computerChoice[computer]) {
        alert ("THE GAME IS A TIE!!! I'LL GET YOU NEXT TIME!!!!");
        return;

}   if (userChoice === "ROCK" && computerChoice[computer] === "SCISSORS" || 
        userChoice === "PAPER" && computerChoice[computer] === "ROCK" ||
        userChoice === "SCISSORS" && computerChoice[computer] === "PAPER"){
            alert(losingSmack[randomLosingSmack]);
        }
    else if (userChoice === "ROCK" && computerChoice[computer] === "PAPER" || 
            userChoice === "PAPER" && computerChoice[computer] === "SCISSORS" ||
            userChoice === "SCISSORS" && computerChoice[computer] === "ROCK"){
            alert(winningSmack[randomWinningSmack]);
            }
        }

gametime()

alert ("THANK YOU FOR PLAYING MY GAME");



