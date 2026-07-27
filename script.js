const prompts = [
  "You are facing competition from newer stores that target the newer generation better.",
  "How can you appeal to a new customer base while already having an established, loyal old one?",
  "How do you plan on measuring the success of your plan?",
  "How should we adapt without lowering prices like our competitors have?",
  "How can we train our staff to prevent future similar hospitality conflicts?",
  "How will you ensure that the unique, casual brand identity of our food truck successfully translates into a sit-down dining experience?",
  "How do we pivot our current promotional schedule and billboard advertisements that heavily feature this suspended athlete?",
  "What digital strategies can give our brand the highest customer interaction and return?",
  "How will you ensure the loyalty of the new customers we are attracting?",
  "How would you respond if your proposed solution requires significant changes from employees who are already comfortable with the current system?"
];

const promptText = document.getElementById("prompt-text");
const promptNumber = document.getElementById("prompt-number");
const generateBtn = document.getElementById("generate-btn");

let currentPrompt = 0;

generateBtn.addEventListener("click", () => {
  let nextPrompt = Math.floor(Math.random() * prompts.length);
  if (prompts.length > 1 && nextPrompt === currentPrompt) {
    nextPrompt = (nextPrompt + 1) % prompts.length;
  }
  currentPrompt = nextPrompt;
  promptText.textContent = prompts[currentPrompt];
  promptNumber.textContent = `${String(currentPrompt + 1).padStart(2, "0")} / ${prompts.length}`;
});

let timeLeft = 300;
let timerInterval = null;

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      return;
    }
    timeLeft--;
    updateTimer();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 300;
  updateTimer();
});

const modal = document.getElementById("resource-modal");
const modalTitle = document.getElementById("modal-title");

document.querySelectorAll(".resource-card").forEach(card => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    modalTitle.textContent = card.dataset.resource;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-close-button").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
