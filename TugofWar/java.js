const red = document.getElementById("red");
const blue = document.getElementById("blue");
const reset = document.getElementById("reset");
let position = 50;
let position2 = 50;
let update = () => {
  red.style.left = position - 1 + "%";
  blue.style.left = position2 + 1 + "%";
  red.innerText = `${position}`;
  blue.innerText = `${position2}`;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    position++;
    position2--;
  }
  if (event.key === "l") {
    position2++;
    position--;
  }
  update();
  if (position >= 100) {
    alert("Player 1 Wins");
  }
  if (position <= 0) {
    alert("Player 2 Wins");
  }
});
reset.addEventListener("click", () => {
  red.innerText = position = 50;
  blue.innerText = position2 = 50;
});
