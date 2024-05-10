// Слайдер
// Пишемо свій слайдер зображень, який повинен:

// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

let imgArr = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
  "img-6.jpg",
  "img-7.jpg",
  "img-8.jpg",
];

const carouselInner = document.querySelector(".carousel-inner");
const carouselIndicator = document.querySelector(".carousel-indicators");

const prev = document.querySelector('[data-bs-slide="prev"]');
const next = document.querySelector('[data-bs-slide="next"]');

let imgList = imgArr.map((el, index) => {
  let carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel_item");

  let img = document.createElement("img");
  img.src = `./img/${el}`;
  img.style.height = "90vh";
  img.style.width = "100%";
  carouselItem.append(img);
  carouselInner.append(carouselItem);

  let buttonIndicator = document.createElement("button");
  buttonIndicator.type = "button";
  buttonIndicator.dataset.bsTarget = "#carouselExampleIndicators";
  carouselIndicator.append(buttonIndicator);

  if (index === 0) {
    carouselItem.classList.add("active");
    buttonIndicator.classList.add("active");
    prev.classList.add('none');
  }
});

let currentSlide = 0;
const totalSlide = imgList.length;

function showSlide(index) {
  const activeItem = document.querySelector(".carousel_item.active");
  activeItem.classList.remove("active");

  const newActiveItem = document.querySelectorAll(".carousel_item")[index];
  newActiveItem.classList.add("active");

  const activeIndicator = document.querySelector(".carousel-indicators button.active");

  activeIndicator.classList.remove("active");
  const newActiveIndicator = document.querySelectorAll(".carousel-indicators button")[index];
  newActiveIndicator.classList.add("active");

  currentSlide = index;

  toggleControls();
}

prev.addEventListener("click", function () {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

next.addEventListener("click", function () {
  if (currentSlide < totalSlide - 1) {
    showSlide(currentSlide + 1);
  }
});

function toggleControls() {
  if (currentSlide === 0) {
    prev.disabled = true;
    prev.classList.add('none');
  } else {
    prev.disabled = false;
    prev.classList.remove('none');
  }

  if (currentSlide === totalSlide - 1) {
    next.disabled = true;
    next.classList.add('none');
  } else {
    next.disabled = false;
    next.classList.remove('none');
  }
}

const carouselIndicators = document.querySelectorAll(".carousel-indicators button");

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", function () {
    showSlide(index);
  });
});
