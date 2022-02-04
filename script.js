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
        result = "Tie! Play again!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        result=`You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        result= `You win! ${playerSelection} beats ${computerSelection}`;
    }

    return result;

}

function game () {
    for (i=0; i<5; i++){
        let playerSelection = window.prompt("Enter your selection", "");
        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();