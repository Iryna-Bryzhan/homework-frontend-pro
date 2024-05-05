const buttonLocation = document.querySelector("[data-location]");
const buttonLink = document.querySelector("[data-link]");

let userLink = "";

buttonLink.addEventListener("click", (e) => {
  userLink = prompt("Введіть посилання");
});

buttonLocation.addEventListener("click", () => {
  if (userLink) {
    window.location.href = userLink;
  } else {
    alert("Спочатку введіть посилання");
  }
});
