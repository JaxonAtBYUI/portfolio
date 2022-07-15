/* -~ --- TOGGLE NAVIGATION BAR --- ~- */
const hamburgerMenu = document.getElementById("hamburgerMenu");
let openNavigation = false;
hamburgerMenu.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    if (openNavigation) {
        closeNav();
    }
}

function openNav() {
  document.getElementById("navBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("navBar").style.width = "0";
}