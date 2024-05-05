const list = document.getElementById("todoList");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

function addTask() {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Видалити";
    list.append(li);
    li.append(deleteBtn);
    input.value = "";
  }
}

function deleteTask(event) {
  if (event.target.className === "deleteBtn") {
    event.target.parentElement.remove();
  }
}

list.addEventListener("click", deleteTask);

button.addEventListener("click", addTask);
