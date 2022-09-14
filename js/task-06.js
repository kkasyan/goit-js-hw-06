const textInput = document.querySelector("input");
const inputLengthEl = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  textInput.textContent = event.currentTarget.value;
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);

  if (requiredLength.length === value.length) {
    textInput.classList.add(".valid");
  } else {
    textInput.classList.add(".invalid");
  }
});
