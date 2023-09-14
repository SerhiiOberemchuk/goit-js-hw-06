const liCategory = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", liCategory.length);

liCategory.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log("Category:", categoryName);
  const numberOfElement = item.querySelectorAll("li").length;
  console.log("Elements:", numberOfElement);
});
