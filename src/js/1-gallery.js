import { images } from '../js/gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
galleryList.insertAdjacentHTML('beforeend', galleryItems(images))
function galleryItems() {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
</li>`;
}).join(' ')
}
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  captionDelay: 250,
})