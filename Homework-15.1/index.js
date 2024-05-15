const list = document.getElementById("todoList");
const buttonAdd = document.querySelector('[data-btn="btn-add"]');
const buttonClear = document.querySelector('[data-btn="btn-clear"]');
const input = document.querySelector(".input");

let arrTask = [];

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arrTask));
}

function addTaskToList(taskText, done = false) {
  const li = createLi(taskText, done);
  const div = createContainerBtn();
  const deleteBtn = createDeleteBtn();
  const doneBtn = createDoneBtn();

  list.append(li);
  li.append(div);
  div.append(doneBtn);
  div.append(deleteBtn);
}

function addTask() {
  const taskText = input.value.trim();

  if (taskText !== "") {
    addTaskToList(taskText);
    arrTask.push({ text: taskText, done: false });

    updateLocalStorage();
    input.value = "";
  }
}

function createContainerBtn() {
  const div = document.createElement("div");
  div.className = "btns";
  return div;
}

function createLi(taskText, done) {
  const li = document.createElement("li");
  li.textContent = taskText;
  if (done) {
    li.classList.add("done");
  }
  return li;
}

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.dataset.btn = "delete-button";
  deleteBtn.textContent = "Видалити";
  return deleteBtn;
}

function createDoneBtn() {
  const btnDoneTask = document.createElement("button");
  btnDoneTask.className = "btnDoneTask";
  btnDoneTask.dataset.btn = "done-task-button";
  btnDoneTask.textContent = "✔";
  return btnDoneTask;
}

function deleteTask(event) {
  if (event.target.dataset.btn === "delete-button") {
    const listItem = event.target.closest("li");
    if (listItem) {
      const index = Array.from(list.children).indexOf(listItem);
      arrTask.splice(index, 1);
      updateLocalStorage();
      listItem.remove();
    }
  }
}

function doneTask(event) {
  if (event.target.dataset.btn === "done-task-button") {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.classList.add("done");
      const index = Array.from(list.children).indexOf(listItem);
      arrTask[index].done = !arrTask[index].done;
      updateLocalStorage();
    }
  }
}

function refreshUI() {
  while (list.firstChild) {
    list.firstChild.remove();
  }

  arrTask.forEach((task) => {
    addTaskToList(task.text, task.done);
  });
}

buttonClear.addEventListener("click", () => {
  localStorage.clear();
  arrTask.length = 0;
  refreshUI();
});

list.addEventListener("click", deleteTask);
list.addEventListener("click", doneTask);
buttonAdd.addEventListener("click", addTask);

window.addEventListener("DOMContentLoaded", () => {
  arrTask = JSON.parse(localStorage.getItem("tasks")) || [];
  refreshUI();
});

function updateFromLocalStorage() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    arrTask = storedTasks;
    refreshUI();
  }
}

window.addEventListener("storage", (event) => {
  if (event.key === "tasks") {
    updateFromLocalStorage();
  }
});
