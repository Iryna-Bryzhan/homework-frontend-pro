const apiUrl = "http://localhost:3000"; // URL вашего API

const list = document.getElementById("todoList");
const button = document.querySelector(".btnAdd");
const input = document.querySelector(".input");
let currentTask = null;
let currentTaskId = null;

async function fetchTodos() {
  try {
    const response = await fetch(`${apiUrl}/todos`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const todos = await response.json();
    todos.forEach((todo) => addTaskToDOM(todo));
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task.title;
  li.setAttribute("data-id", task._id);
  if (task.completed) {
    li.classList.add("completed");
  }

  const divBtn = document.createElement("div");

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.textContent = "Видалити";

  const editBtn = document.createElement("button");
  editBtn.className = "editBtn";
  editBtn.textContent = "Редагувати";

  const doneBtn = document.createElement("button");
  doneBtn.className = "doneBtn";
  doneBtn.textContent = "✔";

  li.append(divBtn);
  divBtn.append(doneBtn);
  divBtn.append(editBtn);
  divBtn.append(deleteBtn);
  list.append(li);
}

async function addTask() {
  const taskText = input.value.trim();
  if (taskText !== "") {
    try {
      const response = await fetch(`${apiUrl}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: taskText, description: "" }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newTask = await response.json();
      addTaskToDOM(newTask);
      input.value = "";
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
}

async function deleteTask(event) {
  if (event.target.className === "deleteBtn") {
    const li = event.target.parentElement.parentElement;
    const taskId = li.getAttribute("data-id");
    try {
      const response = await fetch(`${apiUrl}/todos/${taskId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      li.remove();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
}

async function doneTask(event) {
  if (event.target.className === "doneBtn") {
    const li = event.target.parentElement.parentElement;
    const taskId = li.getAttribute("data-id");
    try {
      const response = await fetch(`${apiUrl}/todos/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: true }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      li.classList.add("completed");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }
}

function openEditModal(event) {
  if (event.target.className === "editBtn") {
    const li = event.target.parentElement.parentElement;
    currentTask = li;
    currentTaskId = li.getAttribute("data-id");
    const taskContent = currentTask.textContent
      .replace("РедагуватиВидалити", "")
      .trim();
    document.getElementById("modalTaskContent").value = taskContent;
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  }
}

async function saveChanges() {
  const newContent = document.getElementById("modalTaskContent").value.trim();
  if (currentTaskId) {
    try {
      const response = await fetch(`${apiUrl}/todos/${currentTaskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newContent, description: "" }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const updatedTask = await response.json();
      currentTask.firstChild.textContent = updatedTask.title;
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      modal.hide();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
}

list.addEventListener("click", deleteTask);
list.addEventListener("click", doneTask);
list.addEventListener("click", openEditModal);
button.addEventListener("click", addTask);
document
  .getElementById("saveChangesBtn")
  .addEventListener("click", saveChanges);

document.addEventListener("DOMContentLoaded", fetchTodos);
