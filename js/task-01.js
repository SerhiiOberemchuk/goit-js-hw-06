const liCategory = document.querySelectorAll("#categories .item");
console.log("Number of categories: ", liCategory.length);

liCategory.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  console.log("Category:", categoryName);
  const numberOfElement = item.lastElementChild.children.length;
  console.log("Elements:", numberOfElement);
});
