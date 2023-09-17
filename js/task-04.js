const counter = document.querySelector("#counter > decrement");
console.dir(counter);

const decrement = counter.getAttribute("counter decrement");
console.dir(decrement);

const handClick = () => {
  console.log("hellllooo");
};
decrement.addEventListener("click", handClick);
const counterValue = document.querySelector("#value");
console.log(counterValue);
