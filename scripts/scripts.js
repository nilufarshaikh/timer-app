let timer;
let totalSeconds = 0;
let isPaused = true;
const timeEl = document.getElementById("time");

const startTimer = () => {
  isPaused = false;

  timer = setInterval(() => {
    totalSeconds++;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // prettier-ignore
    timeEl.innerHTML = `${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(timer);
  isPaused = true;
};

const resetTimer = () => {
  clearInterval(timer);
  totalSeconds = 0;
  document.getElementById("time").innerHTML = "00:00:00";
};

const startTimerBtn = document.getElementById("startBtn");
startTimerBtn.addEventListener("click", function () {
  if (isPaused) {
    startTimer();
  }
});

const pauseTimerBtn = document.getElementById("pauseBtn");
pauseTimerBtn.addEventListener("click", function () {
  pauseTimer();
});

const resetTimerBtn = document.getElementById("resetBtn");
resetTimerBtn.addEventListener("click", function () {
  resetTimer();
});
