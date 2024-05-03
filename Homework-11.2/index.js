let img = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
];
const div = document.querySelector("div");

let imgList = img.map((el) => {
  let img = document.createElement("img");
  img.src = `./img/${el}`;
  img.style.width = "800px";
  img.style.display = "none";
  div.append(img);
  return img;
});

const randomImg = Math.floor(Math.random() * imgList.length);
imgList[randomImg].style.display = "block";
