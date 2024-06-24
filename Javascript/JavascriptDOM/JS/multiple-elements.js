let sonuc;

sonuc = document.getElementsByClassName("task")[0];

taskList = document.getElementsByClassName("task");

ul = document.getElementById("task-list2");
taskList2 = ul.getElementsByTagName("li");

taskList3 = ul.querySelectorAll("#task-list3 li");

for (let i = 0; i < taskList.length; i++) {
  console.log(taskList[i]);
}

for (let task of taskList2) {
  task.style.color = "red";
  task.style.fontSize = "20px";
}
console.log(sonuc);
