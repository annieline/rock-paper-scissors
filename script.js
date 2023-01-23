const rpsSelection = ["ROCK", "PAPER", "SCISSORS"];

// Returns a random choice from list defined by rpsSelection
function getComputerChoice(){
    return rpsSelection[Math.floor(Math.random()*3)];
}

// Returns the user's input choice from list defined by rpsSelection, case insensitive
function getPlayerChoice(){
    let userInput = prompt("Rock, Paper or Scissors?");
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
    }
}

function playRound(playerSelection, computerSelection) {
    switch (true){
        case (playerSelection == computerSelection):
            return ("Tie!");
            break;
        case (playerSelection == "Rock" && computerSelection == "Scissors"):
        case (playerSelection == "Paper" && computerSelection == "Rock"):
        case (playerSelection == "Scissors" && computerSelection == "Paper"):
            return ("You Win!")
            break;
        default:
            return ("You Lose!");
            break;
    }
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);
        if (roundResult == "You Win!") {
            playerScore++;
        }
        else if (roundResult == "You Lose!") {
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You beat the machine!");
    }
    else if (computerScore > playerScore) {
        console.log("Unlucky try again next time!");
    }
    else {
        console.log("It's a tie!")
    }
}
console.log(playGame());