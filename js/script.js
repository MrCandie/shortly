"use strict";
const form = document.getElementById("link-form");
const input = document.getElementById("link-input");
const error = document.getElementById("err-msg");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const hamburger = document.querySelector(".hamburger");

form.addEventListener("submit", formSubmit);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    error.innerHTML = "Please enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    error.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    error.innerHTML = "";
    input.classList.remove("border-red");
    alert("success");
  }
}

// hamburger menu
// btn.addEventListener("click", function (e) {
//   console.log("working");
//   menu.classList.toggle("hide");
//   hamburger.classList.toggle("open");
// });
// console.log(btn);

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
