"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
document.querySelector(".skills").addEventListener("click", function () {
  modal.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
});

document.querySelector(".projects").addEventListener("click", function () {
  modal.setAttribute("hidden");
  overlay.setAttribute("hidden");
});

document.querySelector(".achievements").addEventListener("click", function () {
  document.querySelector(".fluid-container").style.backgroundColor = "#33fff3";
});

document.querySelector(".contact").addEventListener("click", function () {
  document.querySelector(".fluid-container").style.backgroundColor = "#6c3f52";
});

document.querySelector(".downloadcv").addEventListener("click", function () {});
