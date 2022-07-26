// Add imports above this line
import { galleryItems } from '../images/gallery-items';

// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);
const galleryMarkup = createGallery(galleryItems);
console.log(galleryMarkup);
gallery.insertAdjacentHTML('beforeend', galleryMarkup)

function createGallery(items) {
    return items.map(({original, preview, description}) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('')
}

    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, enableKeyboard: true, docClose:true, loop:true});
    
console.log(galleryItems);
