const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfIngredients = ingredients.map(ingredient => {
  const ElItem = document.createElement('li');
  ElItem.classList.add('item');
  ElItem.textContent = ingredient;

  return ElItem
});

const ingredientsEllist = document.querySelector('#ingredients');
ingredientsEllist.append(...listOfIngredients)

console.log(listOfIngredients);
