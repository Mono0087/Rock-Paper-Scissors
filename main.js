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

console.log(getComputerChoice())