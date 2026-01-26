fetch('./data/recipes.json')
.then(res => res.json())
.then(data => {
const list = document.getElementById('list');


data.forEach(recipe => {
const li = document.createElement('li');
li.textContent = `${recipe.name}（${recipe.category}）`;
list.appendChild(li);
});
});