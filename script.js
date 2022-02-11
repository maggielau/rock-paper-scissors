let playerScore = 0;
let computerScore = 0;
let finalResult;

const results = document.querySelector('.results');
const runningScore = document.querySelector('.runningScore');
const winner = document.querySelector('.winner');


function computerPlay () {
    let compMove = (Math.floor(Math.random()*3));


    if (compMove==0) {
        return "Rock";
    }
    else if (compMove == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt().toUpperCase() + playerSelection.substring(1).toLowerCase();
    let result;

    if (playerSelection === computerSelection) {
        results.textContent = "Tie! Play again!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        results.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }

    return;

}

function makeSelection (e) {
    let playerSelection = this.id;
    let computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
    runningScore.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        alert("Hooray, you won! Game over.");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        alert("Too bad, computer won! Game over.");
        playerScore = 0;
        computerScore = 0;      
    }

}

function game () {

    const buttons = Array.from(document.querySelectorAll('.choice'));
    buttons.forEach(button => button.addEventListener('click', makeSelection));


}

game();