function getComputerChoice() {
    let randomValue = Math.random();
        if (randomValue <= (1 / 3)) {
            return "Rock";
        }
        else if (randomValue > (1 / 3) && randomValue <= (2 / 3)) {
            return "Paper";
        } else {
            return "Scissors";
        }
}

function getHumanChoice() {
    promptedValue = prompt("Rock, Paper or Scissors?");
    return promptedValue;
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice.toLowerCase() == "rock" && computerChoice == "Paper") || (humanChoice.toLowerCase() == "paper" && computerChoice == "Scissors") || (humanChoice.toLowerCase() == "scissors" && computerChoice == "Rock")) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }

        console.log(`Human score is: ${humanScore}, Computer score is: ${computerScore}`);
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();
