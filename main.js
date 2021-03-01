"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("https://gai.skmmd.dk/wp-json/wp/v2/home_page?_embed")
    .then((initial) => initial.json())
    .then(callBack);
}

function callBack(data) {
  console.log(data);
  data.forEach(showService);
}

function showService(singleService) {
  console.log(singleService);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  const img_url = singleService._embedded["wp:featuredmedia"][0].source_url;
  clone.querySelector("h1").textContent = singleService.title.rendered;
  clone.querySelector("p").innerHTML = singleService.content.rendered;
  clone.querySelector(".image").src = img_url;

  const elmain = document.querySelector(".infos-grid");
  elmain.appendChild(clone);
}

const menuI = document.querySelector(".hamMenu");
const navBar = document.querySelector(".nav_bar");
const change = document.querySelector(".change");
const hea = document.querySelector(".hea");

menuI.addEventListener("click", () => {
  navBar.classList.toggle("change");
  hea.classList.add("change2");
});
