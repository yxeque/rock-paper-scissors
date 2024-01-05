const choices = ['ROCK', 'PAPER', 'SCISSORS'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', playGame('ROCK'));
paper.addEventListener('click', playGame('PAPER'));
scissors.addEventListener('click', playGame('SCISSORS'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice == computerChoice) {
        result = `IT'S A TIE!`;
    } else {
        switch (playerChoice) {
            case 'ROCK':
                result = (computerChoice === 'SCISSORS') ? 'YOU WIN!' : 'YOU LOSE!';
                console.log('ROCK');
                break;
            case 'PAPER':
                result = (computerChoice === 'ROCK') ? 'YOU WIN!' : 'YOU LOSE!';
                console.log('PAPER');
                break;
            case 'SCISSORS':
                result = (computerChoice === 'PAPER') ? 'YOU WIN!' : 'YOU LOSE!';
                console.log('SCISSORS');
                break;
        }
    }
}
