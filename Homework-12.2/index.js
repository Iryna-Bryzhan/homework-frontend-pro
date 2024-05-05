const div = document.querySelector("[data-container]");

div.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log(`Клікнуто на: ${e.target.textContent}`);
  }
});
