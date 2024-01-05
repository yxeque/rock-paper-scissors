const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playerDisplay = document.querySelector('#playerDisplay')
const computerDisplay = document.querySelector('#computerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');

const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    playGame('ROCK');
});
paper.addEventListener('click', () => {
    playGame('PAPER');
});
scissors.addEventListener('click', () => {
    playGame('SCISSORS');
});

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // GAME LOGIC
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case 'ROCK':
                result = (computerChoice === 'SCISSORS') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'PAPER':
                result = (computerChoice === 'ROCK') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'SCISSORS':
                result = (computerChoice === 'PAPER') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
        }
    }

    updateScores(playerChoice, computerChoice, result);

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            resultDisplay.textContent = `YOU WIN! ${playerScore} TO ${computerScore}`;
        } else {
            resultDisplay.textContent = `YOU LOSE! ${playerScore} TO ${computerScore}`;
        }
        // Reset scores after a player wins
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
}

function updateScores(playerChoice, computerChoice, result) {
    playerDisplay.textContent = `PLAYER CHOSE ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER CHOSE ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('win', 'lose');

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add('win');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('lose');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
