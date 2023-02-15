const rpsSelection = ["ROCK", "PAPER", "SCISSORS"];
const btns = document.querySelectorAll(".btn");
const rounds = document.querySelector(".round");
const pScoreboard = document.querySelector(".player");
const cpuScoreboard = document.querySelector(".cpu");



// Returns a random choice from list defined by rpsSelection
function getComputerChoice(){
    return rpsSelection[Math.floor(Math.random()*3)];
}

// Returns the user's input choice from list defined by rpsSelection, case insensitive
function getPlayerChoice(e){
    console.log(this.id);
    /*let userInput = prompt("Rock, Paper or Scissors?");
    if (userInput == null) {
        console.log("That's not a valid option!");
        getPlayerChoice();
    }
    else if (rpsSelection.includes(userInput.toUpperCase())) {
        return userInput.toUpperCase();
    }
    else {
        console.log("That's not a valid option!");
        getPlayerChoice();
    }*/
}



function playRound(playerSelection, computerSelection) {
    switch (true){
        case (playerSelection == computerSelection):
            console.log("Tie!");
            break;
        case (playerSelection == "ROCK" && computerSelection == "SCISSORS"):
        case (playerSelection == "PAPER" && computerSelection == "ROCK"):
        case (playerSelection == "SCISSORS" && computerSelection == "PAPER"):
            console.log ("You Win!")
            break;
        default:
            console.log ("You Lose!");
            break;
    }
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    roundResult = playRound(getPlayerChoice(), getComputerChoice());
    console.log(roundResult);
    if (roundResult == "You Win!") {
        playerScore++;
    }
    else if (roundResult == "You Lose!") {
        computerScore++;
    }
    calculateScore(playerScore, computerScore);
}

function calculateScore(playerScore, computerScore){
    if (playerScore > computerScore){
        return ("You beat the machine!");
    }
    else if (computerScore > playerScore) {
        return ("Unlucky try again next time!");
    }
    else {
        return("It's a tie!")
    }
}

function buttonPressed(e) {
    playRound(this.id, getComputerChoice());
}

btns.forEach(btn => btn.addEventListener('click', buttonPressed));