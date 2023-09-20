function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const nameColor = document.querySelector(".color");
const buttonChange = document.querySelector(".change-color");
const body = document.querySelector("body");

buttonChange.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const value = getRandomHexColor();
  nameColor.textContent = value;
  body.style.backgroundColor = value;
}
