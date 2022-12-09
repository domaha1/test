"use strict";
const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  
  document.body.classList.toggle("dark-theme");
   document.body.classList.toggle("red-theme");

 const className = document.body.className;
 if (className == "red-theme") {
   this.textContent = "Dark";
 } else {
   this.textContent = "Red";
 }
  console.log("current class name: " + className);
});