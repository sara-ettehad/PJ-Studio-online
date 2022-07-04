const menu = document.querySelector(".menuli");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector("menu");
const closeIcon= document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".-fa-bars");
const mybutton = document.getElementById("myBtn");

function menuFunction() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}