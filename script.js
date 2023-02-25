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
            updateScore();
            break;
        default:
            computerScore++;
            battleText.textContent =`${computerSelection} beats ${playerSelection}, you lose!`;
            updateScore();
            break;
    }
}

function updateScore (){
    pScoreboard.textContent = `Player Score: ${playerScore}`;
    cpuScoreboard.textContent = `CPU Score: ${computerScore}`;
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
    var restartBtn = document.createElement('button');
    restartBtn.innerText = 'Restart';
    document.body.appendChild(restartBtn);
    restartBtn.addEventListener('click', () => {
        restartGame();
        restartBtn.remove();
    });
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    battleText.textContent = "";
    roundsBoard.textContent = `Rounds: ${rounds}`;
    updateScore();
    btns.forEach(btn => btn.disabled = false);
}

function buttonPressed(e) {
    playRound(this.id, getComputerChoice());
}
    

btns.forEach(btn => btn.addEventListener('click', buttonPressed));