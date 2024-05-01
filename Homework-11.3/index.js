const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

text.style.fontSize = "21px";
text.style.fontWeight = "600";

btn.style.fontSize = "18px";
btn.style.background = "#00c100a8";
btn.style.padding = "10px 15px";
btn.style.border = "none";

btn.addEventListener("click", function () {
  if (text.style.color === "green") {
    text.style.color = "black";
  } else {
    text.style.color = "green";
  }
});
