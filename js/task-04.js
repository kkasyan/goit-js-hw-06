let counterValue = 0;
const decrBtnEl = document.querySelector('button[data-action="decrement"]');
const incrBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrBtnEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
