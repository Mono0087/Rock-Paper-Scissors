const choiceButtons = document.querySelector('#game_buttons');
const rockBtn = document.querySelector('#choice_btn-Rock');
const paperBtn = document.querySelector('#choice_btn-Paper');
const scissorsBtn = document.querySelector('#choice_btn-Scissors');
const logField = document.querySelector('#game_logs-field');
const playerScorePara = document.querySelector('#player_score');
const compScorePara = document.querySelector('#computer_score');
const resultPara = document.querySelector('#final_result');
const restartBtn = document.querySelector('#restart');
const roundPara = document.querySelector('#count');

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
let roundCount = 0;
choiceButtons.addEventListener('click', getPlayerChoice);
function getPlayerChoice(e) {
    let roundResult = '';
    let compChoice = getComputerChoice();
    let playerChoice = e.target.innerText;
    
    if (e.target.nodeName === "BUTTON") {
        roundPara.textContent = `${++roundCount}`;
        // Compare input and computer choice
        if (playerChoice === compChoice) {
            roundResult = null;
        } else if (playerChoice == "Rock") {
            if (compChoice == "Paper") {
                roundResult = 0;
            } else if (compChoice == "Scissors") {
                roundResult = 1;
            }
        } else if (playerChoice === "Paper") {
            if (compChoice == "Rock") {
                roundResult = 1;
            } else if (compChoice == "Scissors") {
                roundResult = 0;
            }
        } else if (playerChoice === "Scissors") {
            if (compChoice == "Rock") {
                roundResult = 0;
            } else if (compChoice == "Paper") {
                roundResult = 1;
            }
        };

        // Interpret result into text and increment points
        let roundResultText;
        if (roundResult) {
            roundResultText = `You won! ${playerChoice} beat ${compChoice}`;
            playerScore += 1;
        } else if (roundResult === 0) {
            roundResultText = `You lose! ${compChoice} beat ${playerChoice}`;
            computerScore += 1;
        } else {
            roundResultText = 'Draw';
        };
        playerPoints();
        computerPoints();

        // Put logs
        logField.innerText += `Player: ${playerChoice}\nComputer: ${compChoice}\n${roundResultText}\n\n`;
        logField.scrollTo(0, logField.scrollHeight);

        // Put player score in paragraph
        function playerPoints() {
            playerScorePara.appendChild(document.createTextNode(''));
            let lastChildP = playerScorePara.childNodes[1];
            let newTextNodeP = document.createTextNode(`${playerScore}`);
            playerScorePara.replaceChild(newTextNodeP, lastChildP)
        }

        // Put computer score in paragraph
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
            choiceButtons.removeEventListener('click', getPlayerChoice);
            Array.from(choiceButtons.children).forEach((elem) => {
                elem.setAttribute("disabled", "disabled");
            })
        }
    }
}

// Restart button
restartBtn.addEventListener('click', (e) => {
    if (rockBtn.getAttribute('disabled')) {
        Array.from(choiceButtons.children).forEach((elem) => {
            elem.removeAttribute('disabled')
        });
        choiceButtons.addEventListener('click', getPlayerChoice);
    }
    logField.innerText = '';
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    playerScorePara.textContent = "Player won: ";
    compScorePara.textContent = "Computer won:";
    resultPara.textContent = "*Final result*";
    roundPara.textContent = "#"
})