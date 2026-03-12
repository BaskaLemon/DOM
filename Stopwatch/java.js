let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;
let timer = null;
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
function update() {
  ms++;

  if (ms === 100) {
    ms = 0;
    sec++;
  }

  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }

  let displayHr = String(hr).padStart(2, "0");
  let displayMin = String(min).padStart(2, "0");
  let displaySec = String(sec).padStart(2, "0");
  let displayMs = String(ms).padStart(2, "0");

  document.getElementById("timer").innerText =
    displayHr + ":" + displayMin + ":" + displaySec + ":" + displayMs;
}

start.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(update, 10);
  }
});

pause.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener("click", () => {
  stop();
  ms = 0;
  sec = 0;
  min = 0;
  document.getElementById("timer").innerText = "00:00:00:00";
});
