const textInput = document.querySelector("input");
const inputLengthEl = Number(textInput.dataset.length);

textInput.addEventListener("blur", (event) => {
  textInput.textContent = event.currentTarget.value;

  const { dataset, value } = event.target;

  if (inputLengthEl === value.length) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
