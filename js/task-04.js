const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
const spanItem = document.querySelector("#value");

buttonDecrement.addEventListener("click", minusNumber);
buttonIncrement.addEventListener("click", plusNumber);

function minusNumber() {
  const currentValue = Number(spanItem.textContent);
  spanItem.textContent = currentValue + Number(buttonDecrement.textContent);
}
function plusNumber() {
  const currentValue = Number(spanItem.textContent);
  spanItem.textContent = currentValue + Number(buttonIncrement.textContent);
}
