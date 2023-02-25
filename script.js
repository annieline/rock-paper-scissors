const rpsSelection = ["ROCK", "PAPER", "SCISSORS"];
const btns = document.querySelectorAll(".btn");
const roundsBoard = document.querySelector("#rounds");
const pScoreboard = document.querySelector("#playerscore");
const cpuScoreboard = document.querySelector("#cpuscore");
const scores = document.querySelector(".scores");
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
            checkScore();
            break;
        default:
            computerScore++;
            battleText.textContent =`${computerSelection} beats ${playerSelection}, you lose!`;
            cpuScoreboard.textContent = `CPU Score: ${computerScore}`;
            checkScore();
            break;
    }
}

function checkScore (){
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame(){
    if (playerScore > computerScore){
        battleText.textContent = "You beat the machine!";
    }
    else (computerScore > playerScore);
        battleText.textContent = "Unlucky try again next time!";
    
    btns.forEach(btn => btn.disabled = true);
}

function buttonPressed(e) {
    playRound(this.id, getComputerChoice());
}
    

btns.forEach(btn => btn.addEventListener('click', buttonPressed));