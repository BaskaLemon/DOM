const billInput = document.getElementById("bill-input");
const tips = document.getElementById("tips");

const reset = document.getElementById("reset");
const mustpay = document.getElementById("mustpay");
const sanitizeBillInput = (input) => {
  // Зөвхөн number авна.
  input = input.replace(/[^\d.]/g, "");

  // Зөвхөн 1 бутархайн (.) авна.
  if ((input.match(/\./g) || []).length > 1) {
    input = input.slice(0, -1);
  }

  return input;
};
billInput.addEventListener("input", () => {
  billInput.value = sanitizeBillInput(billInput.value);
});
tips.addEventListener("click", (event) => {
  mustpay.value =
    (billInput.value * event.target.textContent.replace("%", " ")) / 100;
  let num = parseFloat(mustpay.value);
  let num1 = parseFloat(billInput.value);
  mustpay.innerHTML = `Amount: ${num + num1}$`;
});
reset.addEventListener("click", () => {
  mustpay.innerText = "Amount: 0.00";
  billInput.value = "";
});
