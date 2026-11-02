
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const playerScoreText = document.getElementById("playerScore");
const cpuScoreText = document.getElementById("cpuScore");
const restartButton = document.getElementById("restart");

const ROWS = 6;
const COLS = 7;

// Game variables
let grid = [];
let player = 1;
let gameOver = false;

let player1Score = 0;
let player2Score = 0;


// Create the game board
function createBoard() {
    board.innerHTML = "";
    grid = [];

    for (let row = 0; row < ROWS; row++) {
        grid[row] = [];

        for (let col = 0; col < COLS; col++) {
            grid[row][col] = "";

            const cell = document.createElement("div");
            cell.classList.add("cell");

            // Handle clicks on the board
            cell.addEventListener("click", () => {
                dropDot(col);
            });
            board.appendChild(cell);
        }
    }

    // Reset the current game
    player = 1;
    gameOver = false;

    statusText.textContent = "Player 1's Turn (Pink)";
}

function dropDot(col) {
    if (gameOver) {
        return;
    }

    for (let row = ROWS - 1; row >= 0; row--) {
        if (grid[row][col] === "") {

          
            grid[row][col] = player;

            const index = row * COLS + col;
            const cell = board.children[index];

            if (player === 1) {
                cell.classList.add("player"); // Pink
            } else {
                cell.classList.add("cpu"); // Yellow
            }

            if (checkWinner(row, col)) {
                gameOver = true;
                updateScore();

                statusText.textContent =
                    "Player " + player + " Wins!";

                return;
            }

            if (isBoardFull()) {
                gameOver = true;
                statusText.textContent = "It's a Draw!";
                return;
            }

            player = player === 1 ? 2 : 1;

            statusText.textContent =
                player === 1
                    ? "Player 1's Turn (Pink)"
                    : "Player 2's Turn (Yellow)";

            return;
        }
    }
}


function checkWinner(row, col) {
    const directions = [
        [0, 1],   
        [1, 0],   
        [1, 1],   
        [1, -1]   
    ];

    for (const [rowDirection, colDirection] of directions) {
        let count = 1;

        for (const side of [-1, 1]) {
            let r = row + rowDirection * side;
            let c = col + colDirection * side;

            while (
                r >= 0 &&
                r < ROWS &&
                c >= 0 &&
                c < COLS &&
                grid[r][c] === player
            ) {
                count++;

                r += rowDirection * side;
                c += colDirection * side;
            }
        }

        if (count >= 4) {
            return true;
        }
    }

    return false;
}


function updateScore() {
    if (player === 1) {
        player1Score++;
        playerScoreText.textContent = player1Score;
    } else {
        player2Score++;
        cpuScoreText.textContent = player2Score;
    }
}

function isBoardFull() {
    return grid.every(row =>
        row.every(cell => cell !== "")
    );
}

restartButton.addEventListener("click", createBoard)
createBoard();
