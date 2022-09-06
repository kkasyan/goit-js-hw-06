const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((item) => {
  const itemsListEl = document.createElement("li");
  itemsListEl.classList.add("item");
  itemsListEl.textContent = item;
  listEl.append(itemsListEl);

  return itemsListEl;
});

listEl.append(...itemsEl);
