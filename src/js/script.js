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
      modal.style.display = "flex";

      // Cerrar el Modal
      closeBtn = modal.children[0];
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      })

      // Dar Src y Alt a Fig de Modal
      figure = modal.children[1];
      figureImg = figure.children[0];
      figureCaption = figure.children[1];

      figureImg.src = info.target.src;
      figureCaption.innerHTML = info.target.alt;
    }
  })
}