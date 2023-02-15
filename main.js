const menubt = document.getElementById("menu-bt");
const closebt = document.getElementById("close");
const peopleimg = document.getElementById("people-img");
const menu = document.getElementById("menu");

menubt.onclick = function () {
  showmenu();
};
function showmenu() {
  menu.style.left = 0;
  document.getElementById("people-img").style.display = "none";
}

closebt.onclick = function () {
  closemenu();
};
function closemenu() {
  menu.style.left = "-200%";
  document.getElementById("people-img").style.display = "flex";
}
