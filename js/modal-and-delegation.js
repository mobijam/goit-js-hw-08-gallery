import images from './gallery-items.js';

const refs = {
    modalContainer: document.querySelector('.js-gallery'),
    openModal: document.querySelector('.js-lightbox'),
    changeImage: document.querySelector('.lightbox__image'),
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    modalOverlay: document.querySelector('.lightbox__overlay'),
};
    
refs.modalContainer.addEventListener("click", onClickOpenModal);
refs.closeModal.addEventListener("click", onClickCloseModal);
refs.modalOverlay.addEventListener("click", onBackdropClick)

function onClickOpenModal(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    refs.openModal.classList.add('is-open');
    changeLightboxImage(event);
    
    window.addEventListener('keydown', onArrowsNavigation);
    window.addEventListener('keydown', onEscKeyPress);  
}

function changeLightboxImage() {
    refs.changeImage.src = event.target.dataset.src;
    refs.changeImage.alt = event.target.alt;
}

function onClickCloseModal() {
    refs.openModal.classList.remove('is-open');
    clearImageSrc();

    window.removeEventListener('keydown', onEscKeyPress);
    window.removeEventListener('keydown', onArrowsNavigation);
}

function clearImageSrc() {
    refs.changeImage.src = '';
    refs.changeImage.alt = '';
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onClickCloseModal();
    }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  
    if (event.code === ESC_KEY_CODE) {
    onClickCloseModal();
  }
}

function onArrowsNavigation(event) {
    if (event.code === "ArrowRight") {
        openNextImage(event);
    } else if (event.code === "ArrowLeft") {
        openPreviousImage(event);
    };
}

function openNextImage() {
    const currentImg = images.find(image => image.original === refs.changeImage.src);
    const nextImageIndex = images.indexOf(currentImg) + 1;
    
    if (images[nextImageIndex] === undefined) {
            refs.changeImage.src = images[0].original;
            refs.changeImage.alt = images[0].description;
            return;
    }

    refs.changeImage.src = images[nextImageIndex].original;
    refs.changeImage.alt = images[nextImageIndex].description;
}

function openPreviousImage() {
    const currentImg = images.find(image => image.original === refs.changeImage.src);
    const prevImageIndex = images.indexOf(currentImg) - 1;

    if (images[prevImageIndex] === undefined) {
            refs.changeImage.src = images[images.length - 1].original;
            refs.changeImage.alt = images[images.length - 1].description;
            return;
    }

    refs.changeImage.src = images[prevImageIndex].original;
    refs.changeImage.alt = images[prevImageIndex].description;
}