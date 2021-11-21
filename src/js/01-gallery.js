// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createitem = galleryItems
  .map(({ preview, original, description }) =>
      
    `<a class="gallery__item" href="${original}"
      style=' height: 240px'>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
  )
    .join('');
galleryContainer.insertAdjacentHTML('beforeend', createitem);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: `250`,
});