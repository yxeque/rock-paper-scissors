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
        result.textContent = "It's a Tie!";

    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;

    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;

    } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;

    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;

    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCKS") {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;

    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;

    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    let playerSelection = 'ROCK';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("YOU CHOSE ROCK");
});

paper.addEventListener('click', () => {
    let playerSelection = 'PAPER';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("YOU CHOSE PAPER");
});

scissors.addEventListener('click', () => {
    let playerSelection = 'SCISSORS';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("YOU CHOSE SCISSORS");
});

const result = document.querySelector('.result');



function game() {
    let playerScore = 0;
    let computerScore = 0;

    // GET COMPUTER CHOICE

    // for (i = 1; i <= 5; i ++) {
    //     const computerSelection = getComputerChoice();
    //     const playerSelection = prompt("Rock, Paper, or Scissors? Choose.");
    //     console.log(playRound(playerSelection, computerSelection));
    // }

    if (playerScore == computerScore) {
        console.log(`It's a Tie! ${playerScore} to ${computerScore}`)
    } else if (playerScore > computerScore) {
        console.log(`You Win! ${playerScore} to ${computerScore}`)
    } else {
        console.log(`You Lose! ${computerScore} to ${playerScore}`)
    }

}

// game();


