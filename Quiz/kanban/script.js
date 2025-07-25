// script.js

document.getElementById("toggle-theme").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", () => {
  const todoColumn = document.querySelector(".column:nth-child(1)");

  const taskText = prompt("Enter task description:");
  if (taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.textContent = taskText;
    todoColumn.appendChild(taskDiv);
  }
});
