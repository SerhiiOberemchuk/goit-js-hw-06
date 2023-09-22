function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlBox = document.querySelector("#controls");
const inputFild = controlBox.firstElementChild;

// --- Get amount ---
let amount;
inputFild.addEventListener("input", getInputNumber);
function getInputNumber(event) {
  amount = Number(event.currentTarget.value);
}

// --- Create boxes ---
const buttonCreate = controlBox.querySelector("[data-create]");
buttonCreate.addEventListener("click", createBoxes);
const mainBox = document.querySelector("#boxes");
function createBoxes() {
  const marcap = [];
  for (let index = 0; index < amount; index++) {
    const widthBox = 30 + 10 * index;
    const heightBox = 30 + 10 * index;
    marcap.push(
      `<div style="width: ${widthBox}px; height: ${heightBox}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
  mainBox.innerHTML = marcap.join("");
}
// --- Destroy boxes ---
const buttonDestroy = controlBox.querySelector("[data-destroy]");
buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  mainBox.innerHTML = "";
}
