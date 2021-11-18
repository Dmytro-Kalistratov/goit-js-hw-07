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
  const currentAlt = event.target.getAttribute('alt');

  const modalImage = basicLightbox.create(`<img src=${currentImage} width="1200" alt="${currentAlt}">`, {
    onClose: (modalImage) => {
      document.removeEventListener('keydown', closeModal);
    }
  })
  modalImage.show();

  const closeModal = (event) => {
    if (event.code === "Escape") {
      document.removeEventListener('keydown', closeModal);
      modalImage.close();
    };
  };

  document.addEventListener('keydown', closeModal);
};


galleryElem.addEventListener('click', zoomImage);

console.log(galleryItems);