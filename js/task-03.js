const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "center";
galleryEl.style.padding = "0";
galleryEl.style.margin = "0";
galleryEl.style.listStyleType = "none";

const imageListEl = images.map(({ url, alt }) => {
  return `<li><img src="${url}" alt="${alt}" /></li>`;
});

let markup = imageListEl.join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

const imageEl = galleryEl.querySelectorAll("img");
imageEl.forEach((image) => {
  image.classList.add("image");
  image.style.height = "200px";
});

const listPointsEl = galleryEl.querySelectorAll("li");
listPointsEl.forEach((point) => {
  point.classList.add("point");
  point.style.paddingLeft = "10px";
  point.style.paddingRight = "10px";
});
