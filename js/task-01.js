const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  console.log(`
Category: ${item.firstElementChild.textContent}
Elements: ${item.querySelectorAll("li").length}`);
});
