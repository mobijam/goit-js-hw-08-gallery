import galleryItems from './gallery-items.js';

console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');

const imagesMarkup = createGalleryElementsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryElementsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link"
            href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
        </li>`;
    })
        .join('');
}

