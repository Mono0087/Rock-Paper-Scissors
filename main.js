/* Create function that gets computer choice */
function getComputerChoice() {
    /* Create a variable that contain computer choice */
    /* Assign that variable to the random value due to math.random() */
    let choice = Math.floor(Math.random() * 3);
    /* Depending on that value reassign variable to rock, paper or scissors */
    if (choice === 1) {
        choice = "Rock";
    } else if (choice === 2) {
        choice = "Paper"
    } else choice = "Scissors"
    /* Return computer choice */
    return choice;
}

/* Create function that gets user choice */
function getPlayerChoice(pChoice) {
    /* playerChoiceCheck */
    if (pChoice === null || pChoice === "" || pChoice === undefined) {
        alert("Wrong value! Try again")
    } else if (pChoice.toLowerCase() === "rock" || pChoice.toLowerCase() === "paper" || pChoice.toLowerCase() === "scissors") {
        return pChoice;
    } else {
        alert("Wrong value! Try again")
    }
}


/* Compare player choice to the computer choice function*/
/* Return "who is winner?" result */
function playRound(playerChoice, computerChoice) {
    let result,
        playerVictory = "You win! ",
        playerLose = "You lose! ";

    /* If draw */
    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        result = "Draw"

    } else if (playerChoice.toLowerCase() === "Rock".toLowerCase()) {
        /* If player choose Rock */
        if (computerChoice === "Scissors") {
            result = `${playerVictory}Rock beats Scissors`;
        } else if (computerChoice === "Paper") {
            result = `${playerLose}Paper beats Rock`;
        }

    } else if (playerChoice.toLowerCase() === "Scissors".toLowerCase()) {
        /* If player choose Scissors */
        if (computerChoice === "Rock") {
            result = `${playerLose}Rock beats Scissors`;
        } else if (computerChoice === "Paper") {
            result = `${playerVictory}Scissors beats Paper`;
        }

    } else if (playerChoice.toLowerCase() === "Paper".toLowerCase()) {
        /* If player choose Paper */
        if (computerChoice === "Rock") {
            result = `${playerVictory}Paper beats Rock`;
        } else if (computerChoice === "Scissors") {
            result = `${playerLose}Scissors beats Paper`;
        }
    }
    /* Show player choice and computer choice in the consol(just for test) */
    console.log(`Player: ${playerChoice}\nComputer: ${computerChoice}`)
    return result;
}

/* Play 5 rounds */
/* Return score and winner */
function game() {
    let winCount = 0, loseCount = 0;
    let scoreLog;
    for (let i = 0; i < 5; i++) {
        /* Players choices*/
        const computerChoice = String(getComputerChoice());
        let playerChoice = getPlayerChoice(prompt("Choose rock, paper or scissors", ""));
        /* Show result of a one round function */
        scoreLog = playRound(playerChoice, computerChoice)
        console.log(scoreLog)
        /* Count score */
        if (scoreLog.includes("win")) {
            ++winCount;
        }
        if (scoreLog.includes("lose")) {
            ++loseCount;
        }

    }

    console.log(`\nPlayer won ${winCount} times`);
    console.log(`Computer won ${loseCount} times`);
    if (winCount > loseCount) {
        console.log("You won!");
    } else if ( winCount < loseCount) {
        console.log("You lose");
    } else console.log("Draw");
}

game()