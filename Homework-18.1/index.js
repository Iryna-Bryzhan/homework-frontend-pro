const timerConteiner = document.querySelector(".timer-conteiner");
const mainBtnStart = document.getElementById("main-btn-start");
let interval;

function createTimer(totalSeconds) {
  const timer = document.createElement("div");
  timer.classList.add("timer");

  const timerDisplay = document.createElement("div");
  timerDisplay.classList.add("timer-display");
  timerDisplay.textContent = formatTime(totalSeconds);
  timer.append(timerDisplay);

  const btnStop = document.createElement("button");

  btnStop.dataset.btn = "stop";
  btnStop.textContent = "Stop";
  timer.append(btnStop);

  timerConteiner.append(timer);
  return { timerDisplay, btnStop };
}

function formatTime(seconds) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;
  return `${String(minute).padStart(2, "0")}:${String(second).padStart(
    2,
    "0"
  )}`;
}

mainBtnStart.addEventListener("click", function () {
  let inputValueTime = parseInt(
    document.querySelector('input[data-input="time"]').value
  );

  if (isNaN(inputValueTime) || inputValueTime <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  let totalSeconds = inputValueTime * 60;

  const { timerDisplay, btnStop } = createTimer(totalSeconds);

  document.querySelector('input[data-input="time"]').value = "";

  const interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      timerDisplay.textContent = formatTime(totalSeconds);
    } else {
      clearInterval(interval);
    }
  }, 1000);

  btnStop.addEventListener("click", () => {
    clearInterval(interval);
  });
});
