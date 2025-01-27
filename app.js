const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  console.log('it works')
}

hamburger.addEventListener("click", openMenu);
