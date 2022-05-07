let taskCounter = 1;
let taskText = "";

let addTaskBtn = document.getElementById("add-task-button");
addTaskBtn.addEventListener("click", function () {
  // input
  let taskInput = document.getElementById("input-task");
  if (taskInput.value != "") {
    taskText = taskInput.value;
  } else {
    taskText = "empty Task";
  }

  // li
  let newTask = document.createElement("li");
  newTask.className = "list-element";

  // checkbox
  let taskCheckbox = document.createElement("input");
  taskCheckbox.setAttribute("type", "checkbox");
  taskCheckbox.className = "checkbox";
  newTask.appendChild(taskCheckbox);

  // span
  let taskSpan = document.createElement("span");
  taskSpan.className = "task";
  taskSpan.id = `task${taskCounter}`;
  taskSpan.textContent = taskText;
  newTask.appendChild(taskSpan);
  taskCounter++;

  // delete btn
  let taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.className = "delete-btn";
  taskDeleteBtn.textContent = "X";
  newTask.appendChild(taskDeleteBtn);

  document.getElementById("task-list").appendChild(newTask);
  taskInput.value = "";

  removeList();
});

function removeList() {
  let deleteButton = document.getElementsByClassName("delete-btn");
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
}

//dokonczyc loalStorage
const person = {
  name: "jelon",
  location: "bb",
};
localStorage.setItem("user", JSON.stringify(person));

console.log(localStorage.getItem("user"));
localStorage.clear();

removeList();
