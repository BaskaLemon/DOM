const input = document.getElementById("input");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const bracket1 = document.getElementById("bracket1");
const bracket2 = document.getElementById("bracket2");

const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const times = document.getElementById("times");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const comma = document.getElementById("comma");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");

backspace.addEventListener("click", () => {
  input.value = input.value.slice(0, input.value.length - 1);
});
clear.addEventListener("click", () => {
  input.value = "";
});
bracket1.addEventListener("click", () => {
  input.value += "(";
});
bracket2.addEventListener("click", () => {
  input.value += ")";
});

divide.addEventListener("click", () => {
  input.value += "/";
});
seven.addEventListener("click", () => {
  input.value += "7";
});
eight.addEventListener("click", () => {
  input.value += "8";
});
nine.addEventListener("click", () => {
  input.value += "9";
});
times.addEventListener("click", () => {
  input.value += "*";
});
four.addEventListener("click", () => {
  input.value += "4";
});
five.addEventListener("click", () => {
  input.value += "5";
});
six.addEventListener("click", () => {
  input.value += "6";
});
minus.addEventListener("click", () => {
  input.value += "-";
});
one.addEventListener("click", () => {
  input.value += "1";
});
two.addEventListener("click", () => {
  input.value += "2";
});
three.addEventListener("click", () => {
  input.value += "3";
});
plus.addEventListener("click", () => {
  input.value += "+";
});
comma.addEventListener("click", () => {
  input.value += ",";
});
zero.addEventListener("click", () => {
  input.value += "0";
});
dot.addEventListener("click", () => {
  input.value += ".";
});
equal.addEventListener("click", () => {
  input.value = eval(input.value);
});
