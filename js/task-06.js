const textInput = document.querySelector("input");
const inputLengthEl = textInput.dataset.length;

textInput.addEventListener("blur", (event) => {
  textInput.textContent = event.currentTarget.value;

  if (textInput.textContent.length === inputLengthEl) {
    textInput.classList.add(".valid");
  } else {
    textInput.classList.add(".invalid");
  }
});
