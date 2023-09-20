const inputSwipe = document.querySelector("#font-size-control");
const textForChange = document.querySelector("#text");

inputSwipe.addEventListener("input", () => {
  textForChange.style.fontSize = `${Number(inputSwipe.value)}px`;
});
