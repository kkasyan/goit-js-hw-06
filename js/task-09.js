const changeBtn = document.querySelector("button");
const bodyEl = document.querySelector("body");

changeBtn.addEventListener("click", (evt) => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;

  const textColorRef = document.querySelector(".color");
  textColorRef.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
