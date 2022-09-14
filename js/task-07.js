const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", inputChange);

function inputChange(evt) {
  textEl.style.fontSize = `${evt.currentTarget.value}px`;
}
