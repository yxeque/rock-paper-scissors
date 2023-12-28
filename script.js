
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // GET COMPUTER CHOICE
    function getComputerChoice(computerChoice) {
        computerChoice = Math.floor((Math.random() * 3) + 1);
        switch (computerChoice) {
            case 1:
                computerChoice = 'ROCK';
                break;
            case 2:
                computerChoice = 'PAPER';
                break;
            case 3:
                computerChoice = 'SCISSORS';
                break;
        }
        return computerChoice;
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
    
        if (playerSelection == computerSelection) {
            console.log("It's a Tie!")

        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
            computerScore++;

        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;

        } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
            computerScore++;

        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;

        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCKS") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
            computerScore++;

        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;

        }
    }

    for (i = 1; i <= 5; i ++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, or Scissors? Choose.");
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore == computerScore) {
        console.log(`It's a Tie! ${playerScore} to ${computerScore}`)
    } else if (playerScore > computerScore) {
        console.log(`You Win! ${playerScore} to ${computerScore}`)
    } else {
        console.log(`You Lose! ${computerScore} to ${playerScore}`)
    }

}

game();


