/*document.getElementById("menuList").style.display = "none";

//document
//.getElementsByClassName(".menu__bar")
//.addEventListener("click", toggleMenu);

function toggleMenu() {
  document.getElementById("menuList").style.display = "block";
}*/

var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "120px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
