const menubt = document.getElementById("menu-bt");
const closebt = document.getElementById("close");
const menu = document.getElementById("menu");


menubt.onclick = function () { showmenu() };
function showmenu()
{
  menu.style.left = 0;
}

closebt.onclick = function () {
  closemenu();
};
function closemenu()
{
  menu.style.left = "-200%";
}