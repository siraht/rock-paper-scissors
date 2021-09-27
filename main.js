/* Psuedocode
        Create variable for user choice
        Prompt user to pick rock, paper, or scissors
        Create variable for computer choice
        Randomly choose r, p, or s for computer
        If user = r
            If computer = r then tie
            If computer = p then lose
            If computer = s then win
        If user = p
            If computer = r then win
            If computer = p then tie
            If computer = s then lose
        If user = s let button1 = document.createElement('button')
            If computer = r then lose
            If computer = p then tie
            If computer = s then win
        Log winner to console
*/

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    let computerSelection = () => {
        let number = Math.floor(Math.random()*3);
        if (number === 0) {
            return 'rock';
        } else if (number === 1) {
            return 'paper';
        } else
            return 'scissors';
    }

        const rockbtnv = document.querySelector('#rockbtn');
        const paperbtnv = document.querySelector('#paperbtn');
        const scissorsbtnv = document.querySelector('#scissorsbtn');
        const results = document.querySelector('.resultsbox');
        const scorebox = document.querySelector('.scorebox');
        let resultsArray = new Array();
        let scoreString;

        let calculateWinner = (resultsArray) => {
            if (resultsArray[0] == 0) {
                ties = ties + 1;
            } else if (resultsArray[0] == 1) {
                computerScore = computerScore + 1;
            } else {
                playerScore = playerScore + 1;
            }
        }

        function playerSelection() {
        
            rockbtnv.addEventListener('click', () => {
                const rockplay = document.createElement('div');
                rockplay.classList.add('results');
                playRound('rock', computerSelection());
                    if (resultsArray[0] == 0) {
                        rockplay.classList.add('tie')
                    } else if (resultsArray[0] == 1) {
                        rockplay.classList.add('loss')
                    } else {
                        rockplay.classList.add('win')
                    }
                rockplay.textContent = (resultsArray[1]);
                results.appendChild(rockplay);
                calculateWinner(resultsArray);
                scorebox.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
            })
        
            paperbtnv.addEventListener('click', () => {
                const paperplay = document.createElement('div');
                paperplay.classList.add('results');
                playRound('paper', computerSelection());
                    if (resultsArray[0] == 0) {
                        paperplay.classList.add('tie')
                    } else if (resultsArray[0] == 1) {
                        paperplay.classList.add('loss')
                    } else {
                        paperplay.classList.add('win')
                    }
                paperplay.textContent = (resultsArray[1]);
                results.appendChild(paperplay);
                calculateWinner(resultsArray);
                scorebox.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
            })
        
            scissorsbtnv.addEventListener('click', () => {
                const scissorsplay = document.createElement('div');
                scissorsplay.classList.add('results');
                playRound('scissors', computerSelection());
                if (resultsArray[0] == 0) {
                    scissorsplay.classList.add('tie')
                } else if (resultsArray[0] == 1) {
                    scissorsplay.classList.add('loss')
                } else {
                    scissorsplay.classList.add('win')
                }
                scissorsplay.textContent = (resultsArray[1]);
                results.appendChild(scissorsplay);
                calculateWinner(resultsArray);
                scorebox.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
            })
        }

        let playRound = (player, computer) => {
            if (player === 'rock') {
                if (computer === 'rock') {
                    resultsArray = [0, 'Rock and rock! It\'s a tie!'];
                    return resultsArray;
                } else if (computer === 'paper') {
                    resultsArray = [1, 'You lose! Paper beats rock!'];
                    return resultsArray;
                } else {
                    resultsArray = [2, 'You win! Rock beats scissors!'];
                    return resultsArray;
                }
            }
            if (player === 'paper') {
                if (computer === 'rock') {
                    resultsArray = [2, 'You win! Paper beats rock!'];
                    return resultsArray;
                } else if (computer === 'paper') {
                    resultsArray = [0, 'Paper and paper! It\'s a tie!'];
                    return resultsArray;
                } else {
                    resultsArray = [1, 'You lose! Scissors beat paper!'];
                    return  resultsArray;
                }
            }
            if (player === 'scissors') {
                if (computer === 'rock') {
                    resultsArray = [1, 'You lose! Rock beats scissors!']
                    return resultsArray;
                } else if (computer === 'paper') {
                    resultsArray = [2, 'You win! Scissors beat paper']
                    return resultsArray;
                } else {
                    resultsArray = [0, 'Scissors and scissors! It\'s a tie!']
                    return resultsArray;
                }
            }
        }        
       

        console.log(playRound(playerSelection(), computerSelection()));
        
    
}

console.log(game());