const MODES = {
  original: {
    shape: "triangle",
    logo: "images/logo.svg",
    rules: "images/image-rules.svg",
    rulesAlt: "Rules: paper beats rock, rock beats scissors, scissors beats paper",
    // order = order on the board
    choices: ["paper", "scissors", "rock"],
    beats: {
      scissors: ["paper"],
      paper: ["rock"],
      rock: ["scissors"],
    },
  },
  bonus: {
    shape: "pentagon",
    logo: "images/logo-bonus.svg",
    rules: "images/image-rules-bonus.svg",
    rulesAlt:
      "Rules: scissors beats paper and lizard, paper beats rock and spock, rock beats lizard and scissors, lizard beats spock and paper, spock beats scissors and rock",
    choices: ["scissors", "spock", "paper", "lizard", "rock"],
    beats: {
      scissors: ["paper", "lizard"],
      paper: ["rock", "spock"],
      rock: ["lizard", "scissors"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
    },
  },
};

// ===== DOM =====
const $ = (id) => document.getElementById(id);
const scoreEl = $("score");
const logoEl = $("logo");
const board = $("board");
const result = $("result");
const playerSlot = $("player-slot");
const houseSlot = $("house-slot");
const outcome = $("outcome");
const outcomeText = $("outcome-text");
const playAgainBtn = $("play-again");
const toggleModeBtn = $("toggle-mode");
const modal = $("modal");
const rulesImg = $("rules-img");
const openRulesBtn = $("open-rules");
const closeRulesBtn = $("close-rules");

// ===== Storage helpers (safe if storage is blocked) =====
const store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* ignore */
    }
  },
};

// ===== State =====
let mode = store.get("rps-mode", "original") === "bonus" ? "bonus" : "original";
let score = 0;
let isPlaying = false;

const scoreKey = () => `rps-score-${mode}`;

function setScore(value) {
  score = value;
  scoreEl.textContent = score;
  store.set(scoreKey(), score);
}

// ===== Rendering =====
function createChip(choice, tag = "div") {
  const chip = document.createElement(tag);
  chip.className = `chip ${choice}`;
  chip.innerHTML = `
    <span class="chip-inner">
      <img src="images/icon-${choice}.svg" alt="" />
    </span>`;
  if (tag === "button") {
    chip.type = "button";
    chip.dataset.choice = choice;
    chip.setAttribute("aria-label", choice);
  } else {
    chip.setAttribute("role", "img");
    chip.setAttribute("aria-label", choice);
  }
  return chip;
}

function renderBoard() {
  const cfg = MODES[mode];
  board.className = `board ${cfg.shape}`;
  board.innerHTML = "";
  cfg.choices.forEach((choice) => board.appendChild(createChip(choice, "button")));
}

function applyMode() {
  const cfg = MODES[mode];
  logoEl.src = cfg.logo;
  logoEl.classList.toggle("bonus", mode === "bonus");
  logoEl.alt = mode === "bonus" ? "Rock Paper Scissors Lizard Spock" : "Rock Paper Scissors";
  rulesImg.src = cfg.rules;
  rulesImg.alt = cfg.rulesAlt;
  toggleModeBtn.textContent = mode === "bonus" ? "Classic" : "Bonus";
  setScore(parseInt(store.get(scoreKey(), "0"), 10) || 0);
  renderBoard();
}

// ===== Game logic =====
function randomChoice() {
  const list = MODES[mode].choices;
  return list[Math.floor(Math.random() * list.length)];
}

function getResult(player, house) {
  if (player === house) return "draw";
  return MODES[mode].beats[player].includes(house) ? "win" : "lose";
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function play(playerChoice) {
  if (isPlaying) return;
  isPlaying = true;
  toggleModeBtn.disabled = true;

  // Switch to result screen
  board.classList.add("hidden");
  result.classList.remove("hidden");
  outcome.classList.add("hidden");

  const playerChip = createChip(playerChoice);
  playerSlot.replaceChildren(playerChip);
  houseSlot.innerHTML = '<div class="placeholder"></div>';

  // House "thinks"
  await wait(1000);
  const houseChoice = randomChoice();
  const houseChip = createChip(houseChoice);
  houseSlot.replaceChildren(houseChip);

  // Reveal outcome
  await wait(700);
  const res = getResult(playerChoice, houseChoice);

  if (res === "win") {
    outcomeText.textContent = "You win";
    playerChip.classList.add("winner");
    setScore(score + 1);
  } else if (res === "lose") {
    outcomeText.textContent = "You lose";
    houseChip.classList.add("winner");
    setScore(score - 1);
  } else {
    outcomeText.textContent = "Draw";
  }

  outcome.classList.remove("hidden");
  playAgainBtn.focus({ preventScroll: true });
  isPlaying = false;
  toggleModeBtn.disabled = false;
}

function resetGame() {
  result.classList.add("hidden");
  board.classList.remove("hidden");
  playerSlot.innerHTML = "";
  houseSlot.innerHTML = "";
}

// ===== Events =====
board.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-choice]");
  if (btn) play(btn.dataset.choice);
});

playAgainBtn.addEventListener("click", resetGame);

toggleModeBtn.addEventListener("click", () => {
  if (isPlaying) return;
  mode = mode === "original" ? "bonus" : "original";
  store.set("rps-mode", mode);
  resetGame();
  applyMode();
});

// Rules modal
function openModal() {
  modal.classList.remove("hidden");
  closeRulesBtn.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  openRulesBtn.focus();
}

openRulesBtn.addEventListener("click", openModal);
closeRulesBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ===== Init =====
applyMode();
