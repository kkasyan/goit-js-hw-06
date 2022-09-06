
const itemListEl = document.querySelectorAll('.item');

console.log("Number of categories: ", itemListEl.length);

itemListEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    const quantityItem = item.querySelectorAll('li');
    console.log("Category: ", titleEl.textContent);
    console.log("Elements: ", quantityItem.length);
})