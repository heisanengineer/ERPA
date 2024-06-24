"use strict";

let gorevListesi = [
  { id: 1, gorevAdi: "Görev 1", durum: "completed" },
  { id: 1, gorevAdi: "Görev 2", durum: "pending" },
  { id: 1, gorevAdi: "Görev 3", durum: "completed" },
  { id: 1, gorevAdi: "Görev 4", durum: "pending" },
];

let editId;
let isEditTask = false;
const taskInput = document.querySelector("#txtTaskName");
const btnClear = document.querySelector("#btnClear");

displayTasks();

function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";
  if (gorevListesi.length == 0) {
    alert("All lists were deleted!");
    ul.innerHTML = "<p class='p-3 m-0'> Gorev Listeniz Bos! </p>";
  } else {
    for (let gorev of gorevListesi) {
      let completed = gorev.durum == "completed" ? "checked" : "";
      let li = `
              <li class="task list-group-item">
                  <div class="form-check"e>
                      <input type="checkbox" onclick="updateStatus(this)" id="${gorev.id}" class="form-check-input" ${completed}>
                      <label for="${gorev.id}" class="form-check-label ${completed}">${gorev.gorevAdi}</label>
                  </div>
                  <div class="dropdown">
                      <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="fa-solid fa-ellipsis"></i>
                      </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Delete</a>
                      <a onclick='editTask(${gorev.id},"${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Edit</a>
                      
                  </div>
                  </div>
              </li>
          `;

      ul.insertAdjacentHTML("beforeend", li);
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

function newTask(event) {
  if (taskInput.value == "") {
    alert("görev girmelisiniz");
  } else {
    if (!isEditTask) {
      gorevListesi.push({
        id: gorevListesi.length + 1,
        gorevAdi: taskInput.value,
      });
    } else {
      for (let gorev of gorevListesi) {
        if (gorev.id == editId) {
          gorev.gorevAdi = taskInput.value;
        }
        isEditTask = false;
      }
    }

    taskInput.value = "";
    displayTasks();
  }

  event.preventDefault();
}

let deletedId;

function deleteTask(id) {
  // for(let index in gorevListesi)
  //     {
  //         if(gorevListesi[index].id==id)
  //             {
  //                 deletedId = index;
  //             }
  //     }

  // deletedId = gorevListesi.findIndex(function (gorev) {
  //   return gorev.id == id;
  // });

  //   deletedId = gorevListesi.findIndex(gorev => gorev.id ==id);
  //   deletedId = gorevListesi.find(gorev => gorev.id ==id);

  gorevListesi.splice(deletedId, 1);
  displayTasks();
}

function editTask(taskId, taskName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = taskName;
  taskInput.focus();
  taskInput.classList.add("active");
}

btnClear.addEventListener("click", function () {
  gorevListesi.splice(0, gorevListesi.length);
  displayTasks();
});

function updateStatus(selectedTask) {
  let label = selectedTask.nextElementSibling;
  let durum;

  if (selectedTask.checked) {
    label.classList.add("checked");
    durum = "completed";
  } else {
    label.classList.remove("checked");
    durum = "pending";
  }

  for (let gorev of gorevListesi) {
    if (gorev.id == selectedTask.id) {
      gorev.durum = durum;
    }
  }
}
