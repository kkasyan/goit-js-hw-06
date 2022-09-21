const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const divStorageEl = document.querySelector("#boxes");
const boxesEl = divStorageEl.children;

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

let boxesMarkup = [];

function createBoxes(amount) {
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.backgroundColor = color;
    box.style.color = color;
    box.style.width = `${i * 10 + 30}px`;
    box.style.height = `${i * 10 + 30}px`;
    boxesMarkup.push(box);
  }
  divStorageEl.append(...boxesMarkup);
}

function destroyBoxes() {
  divStorageEl.innerHTML = "";
  boxesMarkup = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
