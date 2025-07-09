// let first_number = prompt("Enter the First Number !");
// let second_number = prompt("Enter the Second Number !");
var humanScore = 0;
var computerScore = 0;
var noOfRounds = parseInt(prompt("How many Rounds you want to play ?"));
function getComputerChoice()
{
    var number = Math.floor(Math.random() * 3 + 1);
    if(number == 1)
    {
        return "rock";
    }
    else if(number == 2)
    {
        return "paper";
    }
    else if (number == 3)
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    var userChoice = prompt("Enter your choice (rock/paper/scissors)");
    return userChoice;
}

function playRound(humanChoice,computerChoice){

    humanChoice =(getHumanChoice()).toLowerCase();
    computerChoice =getComputerChoice();

    console.log(`Human Chose : ${humanChoice} Computer Chose : ${computerChoice}`);
    if(humanChoice == "rock" && computerChoice == "paper")
    {
        computerScore++;
        console.log("Computer Wins ! Paper beats Rock");
    }
    else if(humanChoice == "rock" && computerChoice == "rock")
    {
        console.log( "Draw !");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors")
    {
        humanScore++;
        console.log( "Human Wins ! Rock beats Scissors");
    }
    else if(humanChoice == "paper" && computerChoice == "rock")
    {
        humanScore++;
        console.log("Human Wins ! Paper beats Rock");
    }
    else if(humanChoice == "paper" && computerChoice == "paper")
    {
        console.log("Draw !");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        computerScore++
        console.log("Computer Wins ! Scissors beats Paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "scissors")
    {
        console.log("Draw !");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        humanScore++
        console.log("Human Wins ! Scissors beats paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        computerScore++;
        console.log("Computer Wins ! Rock beats Scissors");
    }
    else{console.log("error")}
}

function playGame()
{
    for(var i = 1 ; i <= noOfRounds; i++)
    {
        console.log(`Round ${i}`);
        console.log(playRound());
        console.log(`Human Score : ${humanScore} Computer Score ${computerScore}`);
        console.log(" ");
    }
    if(humanScore > computerScore)
    {
        console.log("Human Wins !");
    }
    else if(humanScore < computerScore)
    {
        console.log("Computer Wins !");
    }
    else{
        console.log("Draw !");
    }
}

playGame();
