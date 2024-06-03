$(function () {
  function Todo() {
    this.todoList = $("#todoList");
    this.todoText = $(".input");
    this.addButton = $(".btn-add");
    this.clearButton = $(".btn-clear");

    const that = this;

    this.loadTasks();

    this.addButton.on("click", function () {
      let val = that.todoText.val();

      if (val) {
        that.addItem(val);
        that.todoText.val("");
        that.saveTasks();
      }
    });

    this.clearButton.on("click", function () {
      that.todoList.empty();
      that.saveTasks();
    });

    this.todoList.on("click", ".todo__list-item-done", function (e) {
      e.stopPropagation();
      const itemText = $(this).siblings(".todo__list-item-text");
      const COMPLETED_CLASS = "todo__list-item_completed_yes";
      itemText.toggleClass(COMPLETED_CLASS);
      that.saveTasks();
    });

    this.todoList.on("click", ".todo__list-item-remove", function (e) {
      e.stopPropagation();
      $(this).closest(".todo__list-item").remove();
      that.saveTasks();
    });

    this.todoList.on("click", ".todo__list-item", function () {
      const taskText = $(this).find(".todo__list-item-text").text();
      $("#modalTaskContent").text(taskText);
      const myModal = new bootstrap.Modal($("#exampleModal"), {});
      myModal.show();
    });
  }

  Todo.prototype.addItem = function (text, isCompleted) {
    const item = $(
      '<li class="todo__list-item list-group-item">' +
        '<span class="todo__list-item-text"></span>' +
        '<span class="todo__list-item-done">✔</span>' +
        '<span class="todo__list-item-remove">&#10060;</span>' +
        "</li>"
    );

    if (isCompleted) {
      item
        .find(".todo__list-item-text")
        .addClass("todo__list-item_completed_yes");
    }

    item.find(".todo__list-item-text").text(text);
    this.todoList.append(item);
  };

  Todo.prototype.saveTasks = function () {
    const tasks = [];
    this.todoList.find(".todo__list-item").each(function () {
      const text = $(this).find(".todo__list-item-text").text();
      const isCompleted = $(this)
        .find(".todo__list-item-text")
        .hasClass("todo__list-item_completed_yes");
      tasks.push({ text, isCompleted });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  Todo.prototype.loadTasks = function () {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      for (const task of tasks) {
        this.addItem(task.text, task.isCompleted);
      }
    }
  };

  const todo = new Todo();
});
