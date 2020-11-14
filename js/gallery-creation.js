import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');

const imagesMarkup = createGalleryElementsMarkup(galleryItems);

galleryContainer.innerHTML = imagesMarkup;

function createGalleryElementsMarkup(gallery) {
    return gallery.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link"
            href="${original}">
        <img
            loading="lazy"
            class="gallery__image lazyload"
            src="${preview}"
            data-src="${original}"
            alt="${description}"/>
        </a>
        </li>`;
    })
        .join('');
}

