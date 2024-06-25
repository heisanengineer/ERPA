"use strict";

let todoList = [
  { id: 1, todoName: "ToDo 1", status: "completed" },
  { id: 1, todoName: "ToDo 2", status: "pending" },
  { id: 1, todoName: "ToDo 3", status: "completed" },
  { id: 1, todoName: "ToDo 4", status: "pending" },
];

let editId;
let isEditTask = false;

const taskInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");
const filters = document.querySelectorAll(".filters span");

displayTasks("all");

function displayTasks(filter) {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  if (todoList.length == 0) {
    alert("All lists were deleted!");
    ul.innerHTML = "<p class='p-3 m-0'> Your todo list is empty! </p>";
  } else {
    for (let todo of todoList) {
      let completed = todo.status == "completed" ? "checked" : "";

      if(filter == todo.status || filter == "all"){

      let li = `
              <li class="task list-group-item">
                  <div class="form-check"e>
                      <input type="checkbox" onclick="updateStatus(this)" id="${todo.id}" class="form-check-input" ${completed}>
                      <label for="${todo.id}" class="form-check-label ${completed}">${todo.todoName}</label>
                  </div>
                  <div class="dropdown">
                      <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="fa-solid fa-ellipsis"></i>
                      </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a onclick="deleteTask(${todo.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Delete</a>
                      <a onclick='editTask(${todo.id},"${todo.todoName}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a>
                      
                  </div>
                  </div>
              </li>
          `;
      
      ul.insertAdjacentHTML("beforeend", li);
      }
    }
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
  .querySelector("#btnAddNewTask")
  .addEventListener("keypress", function () {
    if (event.key == "Enter") {
      document.getElementById("btnAddNewTask").click();
    }
  });

  if (filters.length > 0) {
    for (let span of filters) {
      span.addEventListener("click", function() {
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTasks(span.id);
      });
    }
  } else {
    console.error('No <span> elements found under ".filters"');
  }

function newTask(event) {
  if (taskInput.value == "") {
  } else {
    if (!isEditTask) {
      todoList.push({
        id: todoList.length + 1,
        todoName: taskInput.value,
      });
    } else {
      for (let todo of todoList) {
        if (todo.id == editId) {
          todo.todoName = taskInput.value;
        }
        isEditTask = false;
      }
    }

    taskInput.value = "";
    displayTasks(document.querySelector("span.active").id);
  }

  event.preventDefault();
}

let deletedId;

function deleteTask(id) {
  // for(let index in todoList)
  //     {
  //         if(todoList[index].id==id)
  //             {
  //                 deletedId = index;
  //             }
  //     }

  // deletedId = todoList.findIndex(function (todo) {
  //   return gorev.id == id;
  // });

  //   deletedId = todoList.findIndex(todo => todo.id ==id);
  //   deletedId = todoList.find(todo => todo.id ==id);

  todoList.splice(deletedId, 1);
  displayTasks(document.querySelector("span.active").id);
}

function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskName;
  taskInput.focus();
  taskInput.classList.add("active");
}

btnClear.addEventListener("click", function () {
  todoList.splice(0, todoList.length);
  displayTasks("all");
});

function updateStatus(selectedTask) {
  let label = selectedTask.nextElementSibling;
  let status;

  if (selectedTask.checked) {
    label.classList.add("checked");
    status = "completed";
  } else {
    label.classList.remove("checked");
    status = "pending";
  }

  for (let todo of todoList) {
    if (todo.id == selectedTask.id) {
      todo.status = status;
    }
  }
}
