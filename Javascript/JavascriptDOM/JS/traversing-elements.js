let sonuc;
ul = document.getElementById("task-list");
sonuc = ul.children;
ul.children[0].children[0].children[0].checked = true;
ul.children[1].nextElementSibling.children[0].children[0].checked = true;
ul.children[1].previousElementSibling.children[0].children[0].checked = false;

//sonuc = ul.firstElementChild;
//sonuc = ul.lastElementChild;

//sonuc = document.getElementById("title").parentElement;
//sonuc = document.querySelector(".task").nextElementSibling.nextElementSibling.previousElementSibling;

console.log(sonuc);
