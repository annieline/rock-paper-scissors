const rpsSelection = ["ROCK", "PAPER", "SCISSORS"];
const btns = document.querySelectorAll(".btn");
const roundsBoard = document.querySelector("#rounds");
const pScoreboard = document.querySelector("#playerscore");
const cpuScoreboard = document.querySelector("#cpuscore");
const battleText = document.querySelector("#battle");
let playerScore = 0;
let computerScore = 0;
let rounds = 0;


// Returns a random choice from list defined by rpsSelection
function getComputerChoice(){
    return rpsSelection[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    rounds++;
    roundsBoard.textContent = `Rounds: ${rounds}`;
    switch (true){
        case (playerSelection == computerSelection):
            battleText.textContent = ("Tie!");
            break;
        case (playerSelection == "ROCK" && computerSelection == "SCISSORS"):
        case (playerSelection == "PAPER" && computerSelection == "ROCK"):
        case (playerSelection == "SCISSORS" && computerSelection == "PAPER"):
            playerScore++;
            battleText.textContent =`${playerSelection} beats ${computerSelection}, you win!`;
            pScoreboard.textContent = `Player Score: ${playerScore}`;
            break;
        default:
            computerScore++;
            battleText.textContent =`${computerSelection} beats ${playerSelection}, you lose!`;
            cpuScoreboard.textContent = `CPU Score: ${computerScore}`;
            break;
    }
}

function endGame(){
    if (playerScore > computerScore){
        battleText.textContent = "You beat the machine!";
    }
    else (computerScore > playerScore);
        battleText.textContent = "Unlucky try again next time!";
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
}

function buttonPressed(e) {
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
    else {
        playRound(this.id, getComputerChoice());
    }
}

btns.forEach(btn => btn.addEventListener('click', buttonPressed));