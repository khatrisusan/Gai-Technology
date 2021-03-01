"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("https://gai.skmmd.dk/wp-json/wp/v2/home_page?_embed")
    .then((initial) => initial.json())
    .then(callBack);

  fetch("https://gai.skmmd.dk/wp-json/wp/v2/services?_embed")
    .then((initial) => initial.json())
    .then(callBack2);
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

function callBack2(data2) {
  console.log(data2);
  data2.forEach(showService2);
}

function showService2(singleService2) {
  console.log(singleService2);

  console.log(singleService2);
  const template2 = document.querySelector("template").content;
  const clone2 = template2.cloneNode(true);
  const img_url = singleService2._embedded["wp:featuredmedia"][0].source_url;
  clone2.querySelector("h1").textContent = singleService2.title.rendered;
  clone2.querySelector("p").innerHTML = singleService2.content.rendered;
  clone2.querySelector(".image2").src = img_url;

  const elmain2 = document.querySelector(".columns");
  elmain2.appendChild(clone2);
}

const menuI = document.querySelector(".hamMenu");
const navBar = document.querySelector(".nav_bar");
const change = document.querySelector(".change");
const hea = document.querySelector(".hea");

menuI.addEventListener("click", () => {
  navBar.classList.toggle("change");
  hea.classList.add("change2");
});
