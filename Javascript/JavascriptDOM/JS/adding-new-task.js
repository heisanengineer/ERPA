let sonuc;

let todoList = [
  { id: 1, itemName: "Daily routine 1" },
  { id: 2, itemName: "Daily routine 2" },
  { id: 3, itemName: "Daily routine 3" },
  { id: 4, itemName: "Daily routine 4" },
];

ul = document.getElementById("task-list");

let li = "";

//let count = ul.children.length;

function createList(itemId, itemName) {
  li = `
<ul id="task-list" class="list-group list-group-flush">
          <li class="task list-group-item">
            <div class="div form-check">
              <input type="checkbox" id="${itemId}" class="form-check-input">
              <label for="${itemId}" class="form-check-label">${itemName}</label>
            </div>
          </li>
          `;

  ul.insertAdjacentHTML("beforeend", li);
}

for (let todo of todoList) {
  createList(todo.id, todo.itemName);
}


document.querySelector("#btnAddNewTask").addEventListener("click", newTask);


function newTask(event){
    let taskInput = document.querySelector("#txtTaskName");
    createList(taskInput.id,taskInput.value);
    event.preventDefault();
}

console.log(sonuc);
