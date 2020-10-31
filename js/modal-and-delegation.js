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
    window.addEventListener('keydown', onEscKeyPress);
    refs.openModal.classList.add('is-open');
    refs.changeImage.src = event.target.dataset.source;
    refs.changeImage.alt = event.target.alt;
}

function onClickCloseModal() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.openModal.classList.remove('is-open');
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