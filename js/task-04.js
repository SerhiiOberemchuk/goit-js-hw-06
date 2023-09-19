const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const spanItem = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  spanItem.textContent = Number(spanItem.textContent) - 1;
});
buttonIncrement.addEventListener("click", () => {
  spanItem.textContent = Number(spanItem.textContent) + 1;
});
