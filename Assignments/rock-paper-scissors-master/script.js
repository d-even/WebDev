let score = 0;
const choices = document.querySelectorAll(".choice");
const choicesBox = document.getElementById("choices");
const result = document.getElementById("result");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");
const playAgain = document.getElementById("play-again");
const rulesButton = document.getElementById("rules-button");
const rules = document.getElementById("rules");
const closeRules = document.getElementById("close-rules");

choices.forEach(function(button) {
    button.addEventListener("click", function() {
        let player = button.dataset.choice;
        let computer = getComputerChoice();
        showChoices(player, computer);
        checkWinner(player, computer);
        choicesBox.style.display = "none";
        result.style.display = "flex";
    });
});
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
function showChoices(player, computer) {
    playerChoice.innerHTML = '<img src="images/icon-' + player + '.svg">';
    computerChoice.innerHTML = '<img src="images/icon-' + computer + '.svg">';
}
function checkWinner(player, computer) {
    if (player === computer) {
        message.textContent = "DRAW";
        return;
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        message.textContent = "YOU WIN";
        score++;
    } else {
        message.textContent = "YOU LOSE";
        score--;
    }
    scoreText.textContent = score;
}
playAgain.addEventListener("click", function() {
    choicesBox.style.display = "block";
    result.style.display = "none";
});
rulesButton.addEventListener("click", function() {
    rules.style.display = "flex";
});
closeRules.addEventListener("click", function() {
    rules.style.display = "none";
});