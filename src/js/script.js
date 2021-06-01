/* Script For Images PopUps */

const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

const ArrImages = get.class("figure__image");

for (let i = 0 ; i < ArrImages.length ; i++) {
  ArrImages[i].addEventListener("click", (info) => {
    const image_father = info.target.parentElement;
    const image_label = image_father.children[1];

    /* Create The HTML Elements of the Modal */

    let modal = document.createElement("div");
    modal.className = "modal";
    modal.style.display = "grid";

    let closeBtn = document.createElement("span");
    closeBtn.className = "modal__closebtn";
    
    let closeBtn_icon = document.createElement("i");
    closeBtn_icon.className = "fa fa-window-close";
    closeBtn_icon.ariaHidden = "true";

    closeBtn.appendChild(closeBtn_icon);
    modal.appendChild(closeBtn);

    let figure = document.createElement("figure");
    figure.className = "modal-figure";

    let img = document.createElement("img");
    img.className = "modal-figure__content";
    img.src = info.target.src;
    img.alt = info.target.alt;

    let label = document.createElement("figcaption");
    label.className = "modal-figure__caption";
    label.innerHTML = image_label.innerHTML;

    figure.appendChild(img);
    figure.appendChild(label);
    modal.appendChild(figure);

    image_father.appendChild(modal);

    // Close the Modal
    closeBtn.addEventListener("click", () => modal.remove());
    
/*     if (info.target.nextElementSibling.className == "modal") {
      let modal = info.target.nextElementSibling
      modal.style.display = "grid";

      // Cerrar el Modal
      let closeBtn = modal.children[0];
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      })

      // Dar Src y Alt a Fig de Modal
      let figure = modal.children[1];
      let figureImg = figure.children[0];
      let figureCaption = figure.children[1];

      figureImg.src = info.target.src;
      figureCaption.innerHTML = info.target.alt;
    } */
  })
}