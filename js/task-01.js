const listCategories = document.querySelector("#categories");
const listItem = listCategories.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
