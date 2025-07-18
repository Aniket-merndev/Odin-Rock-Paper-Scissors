var humanScore = 0;
var computerScore = 0;
var noOfRounds = parseInt(prompt("How many Rounds you want to play ?"));
var currentRound =1;

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

let userChoice = null;


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click",(event)=>{
    userChoice = event.target.id;  
    playRound(userChoice, getComputerChoice());
});

paper.addEventListener("click",(event)=>{
    userChoice = event.target.id;
    playRound(userChoice, getComputerChoice());
});

scissors.addEventListener("click",(event)=>{
    userChoice = event.target.id;
    playRound(userChoice, getComputerChoice());
});


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    if(currentRound <= noOfRounds){
    document.querySelector("#roundNumber").textContent = `Round => ${currentRound}`;
    }

    document.querySelector("#youChose").innerHTML = `<img src = "${humanChoice}.png" width="50px"><br>${humanChoice}`;

    document.querySelector("#oponentChose").innerHTML = `<img src = "${computerChoice}.png" width="50px"><br>${computerChoice}`;

    if (currentRound > noOfRounds) {
        document.querySelector("#whoWin").textContent = "Game Over!";
        return;
    }

    console.log(`Human Chose : ${humanChoice} Computer Chose : ${computerChoice}`);
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("Computer Wins ! Paper beats Rock");
        document.querySelector("#oponentScore").textContent = `Oponent Score : ${computerScore}`;
        document.querySelector("#whoWin").textContent = `Oponent Wins Round ${currentRound} ! Paper beats Rock`;
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Draw !");
        document.querySelector("#whoWin").textContent = `Round ${currentRound} Draw !`;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("Human Wins ! Rock beats Scissors");
        document.querySelector("#humanScore").textContent = `Human Score : ${humanScore}`;
        document.querySelector("#whoWin").textContent = `You Win Round ${currentRound} ! Rock beats Scissors`;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("Human Wins ! Paper beats Rock");
        document.querySelector("#humanScore").textContent = `Human Score : ${humanScore}`;
        document.querySelector("#whoWin").textContent = `You Win Round ${currentRound} ! Paper beats Rock`;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Draw !");
        document.querySelector("#whoWin").textContent = `Round ${currentRound} Draw !`;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("Computer Wins ! Scissors beats Paper");
        document.querySelector("#oponentScore").textContent = `Oponent Score : ${computerScore}`;
        document.querySelector("#whoWin").textContent = `Oponent Wins Round ${currentRound} ! Scissors beats Paper`;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("Draw !");
        document.querySelector("#whoWin").textContent = `Round ${currentRound} Draw !`;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("Human Wins ! Scissors beats Paper");
        document.querySelector("#humanScore").textContent = `Human Score : ${humanScore}`;
        document.querySelector("#whoWin").textContent = `You Win Round ${currentRound} ! Scissors beats Paper`;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("Computer Wins ! Rock beats Scissors");
        document.querySelector("#oponentScore").textContent = `Oponent Score : ${computerScore}`;
        document.querySelector("#whoWin").textContent = `Oponent Wins Round ${currentRound} ! Rock beats Scissors`;
    }
    else {
        console.log("error");
    }

    currentRound++;
}

