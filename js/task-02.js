const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const markap = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
listIngredients.innerHTML += markap;
