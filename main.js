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
        If user = s 
            If computer = r then lose
            If computer = p then tie
            If computer = s then win
        Log winner to console
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    for (let i = 0; i <5; i++) {
        let computerSelection = () => {
            let number = Math.floor(Math.random()*3);
            if (number === 0) {
                return 'rock';
            } else if (number === 1) {
                return 'paper';
            } else
                return 'scissors';
        }
        
        function playerSelection() {
            let choice = prompt('Choose your weapon', 'Rock');
            return choice.toLowerCase();
        }
        
        let playRound = (player, computer) => {
            if (player === 'rock') {
                if (computer === 'rock') {
                    return 'Rock and rock! It\'s a tie!'
                } else if (computer === 'paper') {
                    return 'You lose! Paper beats rock!';
                } else {
                    return 'You win! Rock beats scissors!'
                }
            }
            if (player === 'paper') {
                if (computer === 'rock') {
                    return 'You win! Paper beats rock!'
                } else if (computer === 'paper') {
                    return 'Paper and paper! It\'s a tie!'
                } else {
                    return 'You lose! Scissors beat paper!'
                }
            }
            if (player === 'scissors') {
                if (computer === 'rock') {
                    return 'You lose! Rock beats scissors!'
                } else if (computer === 'paper') {
                    return 'You win! Scissors beat paper'
                } else {
                    return 'Scissors and scissors! It\'s a tie!'
                }
            }
        }        

       /* if (playRound(playerSelection(), computerSelection()).includes('win')) {
                playerScore++;
            } else if (playRound(playerSelection(), computerSelection()).includes('lose')) {
                computerScore++;
            } else {
                ties = ties + 1;
            }
        */

        console.log(playRound(playerSelection(), computerSelection()));
        
        // console.log(`The score is ${playerScore} to ${computerScore}`);
    }
}

console.log(game());