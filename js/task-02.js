const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
ingredients.forEach((iterator) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = iterator;
  ingredient.className = "item";
  listIngredients.append(ingredient);
});
