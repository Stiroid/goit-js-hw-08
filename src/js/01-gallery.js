// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);


const phContainer = document.querySelector('.gallery');
const phCards = createPhCards(galleryItems);
phContainer.insertAdjacentHTML('beforeend', phCards);



function createPhCards (photos) {
return photos.map(({preview, original, description}) => {
        
        return `
        <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
        `;
    }).join('');

} 

    new SimpleLightbox('.gallery a', {
    captionSelector : 'img',
     captionType : 'attr', 
     captionData : 'alt', 
     captionPosition : 'bottom', 
     captionDelay: '250'
});