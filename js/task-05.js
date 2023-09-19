const inputLine = document.querySelector("#name-input");
const helloNameLine = document.querySelector("#name-output");

inputLine.addEventListener("input", (event) => {
  // helloNameLine.textContent = event.currentTarget.value;
  event.currentTarget.value.length === 0
    ? (helloNameLine.textContent = "Anonymous")
    : (helloNameLine.textContent = event.currentTarget.value);
});
