import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = '';

galleryItems.forEach((galleryItem) => {
    
    const itemMarkup = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`

    galleryMarkup += itemMarkup;
});

const galleryElem = document.querySelector('.gallery');

galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);

function zoomImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  };

  const currentImage = event.target.getAttribute("data-source");

  const modalImage = basicLightbox.create(`<img src=${currentImage} width="1200">`)
  modalImage.show();

  document.addEventListener('keydown', (event) => { if(event.code === "Escape") {  modalImage.close() }});
};


galleryElem.addEventListener('click', zoomImage);

console.log(galleryItems);