
let getComputerChoice = (computerChoice) => {
    computerChoice = Math.floor((Math.random() * 3) + 1);
    return computerChoice;
}

console.log(getComputerChoice());