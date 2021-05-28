/* Script For Images PopUps */

const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

const images = get.class("figure__image");

for (let i = 0 ; i < images.length ; i++) {
  images[i].addEventListener("click", (info) => {
    if (info.target.nextElementSibling.className == "modal") {
      modal = info.target.nextElementSibling
      modal.style.display = "block";

      figure = modal.children[1];
      figureImg = figure.children[0];
      figureCaption = figure.children[1];

      figureImg.src = info.target.src;
      figureCaption.innerHTML = info.target.alt;
    }
  })
}