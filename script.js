
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