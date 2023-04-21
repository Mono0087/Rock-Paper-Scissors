const rockBtn = document.querySelector('#choice_btn-Rock');
const paperBtn = document.querySelector('#choice_btn-Paper');
const scissorsBtn = document.querySelector('#choice_btn-Scissors');

const logField = document.querySelector('#game_logs-field');

const playerScorePara = document.querySelector('#player_score');
const compScorePara = document.querySelector('#computer_score');
const resultPara = document.querySelector('#final_result');

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

/* Create function that gets user choice and compare it with computer choice*/
let playerScore = 0;
let computerScore = 0;
let result;
document.querySelector('#game_buttons').addEventListener('click', getPlayerChoice);
function getPlayerChoice(e) {
    let rock = "Rock", paper = "Paper", scissors = "Scissors";
    let roundResult = '';
    let choice = e.target.innerText

    switch (choice) {
        case rock:
            compChoice = getComputerChoice();
            if (compChoice === "Paper") {
                roundResult = "You lose! Paper beat rock";
                computerScore += 1;
                computerPoints()
            } else if (compChoice === "Scissors") {
                roundResult = "You win! Rock beat scissors";
                playerScore += 1;
                playerPoints()
            } else {
                roundResult = "Draw"
            };
            logField.innerText += `Player: Rock\n Computer: ${compChoice}\n ${roundResult}\n\n`
            break;

        case paper:
            compChoice = getComputerChoice();
            if (compChoice === "Rock") {
                roundResult = "You win! Paper beat rock";
                playerScore += 1;
                playerPoints()
            } else if (compChoice === "Scissors") {
                roundResult = "You lose! Scissors beat paper";
                computerScore += 1;
                computerPoints()
            } else {
                roundResult = "Draw"
            };
            logField.innerText += `Player: Paper\n Computer: ${compChoice}\n ${roundResult}\n\n`
            break;

        case scissors:
            compChoice = getComputerChoice();
            if (compChoice === "Paper") {
                roundResult = "You win! Scissors beat paper";
                playerScore += 1;
                playerPoints()
            } else if (compChoice === "Rock") {
                roundResult = "You lose! Rock beats scissors";
                computerScore += 1;
                computerPoints()
            } else {
                roundResult = "Draw"
            };
            logField.innerText += `Player: Scissors\n Computer: ${compChoice}\n ${roundResult}\n\n`
            break;
    }

    // Put player score
    function playerPoints() {
        playerScorePara.appendChild(document.createTextNode(''));
        let lastChildP = playerScorePara.childNodes[1];
        let newTextNodeP = document.createTextNode(`${playerScore}`);
        playerScorePara.replaceChild(newTextNodeP, lastChildP)
    }

    // Put computer score
    function computerPoints() {
        compScorePara.appendChild(document.createTextNode(''));
        let lastChildC = compScorePara.childNodes[1];
        let newTextNodeC = document.createTextNode(`${computerScore}`);
        compScorePara.replaceChild(newTextNodeC, lastChildC)
    }

    // Put final result
    // If round count > 5 stop the game
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            resultPara.textContent = "You won!";
        } else {
            resultPara.textContent = "Computer won!";
        }
        document.querySelector('#game_buttons').removeEventListener('click', getPlayerChoice);
    }

    logField.scrollTo(0, logField.scrollHeight - 1)
}
