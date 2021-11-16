import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryMarkup = '';

galleryItems.forEach((galleryItem) => {
    
    const itemMarkup = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`

    galleryMarkup += itemMarkup;
});

const galleryElem = document.querySelector('.gallery');
galleryElem.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryLightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });



console.log(galleryItems);
