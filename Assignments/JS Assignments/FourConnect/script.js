
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const playerScoreText = document.getElementById("playerScore");
const cpuScoreText = document.getElementById("cpuScore");
const restartButton = document.getElementById("restart");

const ROWS = 6;
const COLS = 7;

let grid = [];
let currentPlayer = "player";
let playerScore = 0;
let player2Score = 0;
let gameOver = false;

function createBoard() {
    board.innerHTML = "";

    grid = Array.from(
        { length: ROWS },
        () => Array(COLS).fill("")
    );

    currentPlayer = "player";
    gameOver = false;
    statusText.textContent = "Player 1's Turn (Pink)";

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            cell.addEventListener("click", () => {
                dropDot(col);
            });

            board.appendChild(cell);
        }
    }
}

function dropDot(col) {
    if (gameOver) return;

    // Find the lowest empty cell in the selected column
    for (let row = ROWS - 1; row >= 0; row--) {
        if (grid[row][col] === "") {
            grid[row][col] = currentPlayer;

            const index = row * COLS + col;
            board.children[index].classList.add(currentPlayer);

            // Check whether the current player has won
            if (checkWinner(row, col)) {
                gameOver = true;

                if (currentPlayer === "player") {
                    playerScore++;
                    playerScoreText.textContent = playerScore;
                    statusText.textContent = "Player 1 Wins! 🎉";
                } else {
                    player2Score++;
                    playerScoreText.textContent = player2Score;
                    statusText.textContent = "Player 2 Wins! 🎉";
                }

                return;
            }

            // Check for a draw
            if (grid.every(row => row.every(cell => cell !== ""))) {
                gameOver = true;
                statusText.textContent = "It's a Draw!";
                return;
            }

            // Switch between the two human players
            currentPlayer =
                currentPlayer === "player" ? "cpu" : "player";

            statusText.textContent =
                currentPlayer === "player"
                    ? "Player 1's Turn (Pink)"
                    : "Player 2's Turn (Yellow)";

            return;
        }
    }
}

function checkWinner(row, col) {
    const directions = [
        [0, 1],   // Horizontal
        [1, 0],   // Vertical
        [1, 1],   // Diagonal down-right
        [1, -1]   // Diagonal down-left
    ];

    for (const [dr, dc] of directions) {
        let count = 1;

        count += countDirection(row, col, dr, dc);
        count += countDirection(row, col, -dr, -dc);

        if (count >= 4) return true;
    }

    return false;
}

function countDirection(row, col, dr, dc) {
    let count = 0;
    let r = row + dr;
    let c = col + dc;

    while (
        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS &&
        grid[r][c] === currentPlayer
    ) {
        count++;
        r += dr;
        c += dc;
    }

    return count;
}

function restartGame() {
    createBoard();
}

restartButton.addEventListener("click", restartGame);

createBoard();
