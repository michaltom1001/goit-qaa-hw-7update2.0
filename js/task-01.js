const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');


console.log(`Number of categories: ${categoryItems.length}`);


for (const categoryItem of categoryItems) {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li');

  
  console.log(`\nCategory: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
}
