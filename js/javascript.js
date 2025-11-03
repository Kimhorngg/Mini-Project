"use strict";

const navButton = document.getElementById("navButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

// Open sidebar
navButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

// Close sidebar when clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Close sidebar when clicking "X" button
closeSidebar.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});


// function menu() {
//   const menubar = document.getElementById("navbar-menu");
//   if (window.innerWidth <= 425) {
//     alert("effext");
//     menubar.style.display = "none";
//   } else {
//     menubar.style.display = "flex";
//   }
// }
// menu();
