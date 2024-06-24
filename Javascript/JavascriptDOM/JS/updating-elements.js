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

//document.querySelector("#task-list").parentElement.remove();
//document.querySelector("#task-list").children[0].remove();
// document.querySelector("#task-list").removeAttribute("class");
//sonuc = document.querySelector("#task-list").children[1].children[0].children[0].children[0].getAttribute("class");
//document.querySelector("#task-list").children[1].children[0].children[0].children[0].setAttribute("class","aaa");
//sonuc = document.querySelector("#task-list").children[0].classList;
//document.querySelector("#task-list").classList.add("bg-primary");
//document.querySelector("#task-list").classList.remove("bg-primary");
//sonuc = document.querySelector("#task-list").classList.contains("bg-primary");

console.log(sonuc);
