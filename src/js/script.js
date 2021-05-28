/* Script For Images PopUps */

const get = {
  id: document.getElementById.bind(document),
  class: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

const images = get.class("figure__image");

for (let i = 0 ; i < images.length ; i++) {
  images[i].addEventListener("click", (image) => {
    console.log(image)
  })
}