
// GET COMPUTER CHOICE
let getComputerChoice = (computerChoice) => {
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

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        console.log("It's a Tie!")
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCKS") {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`)
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
    }
}

const playerSelection = "rOcK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


