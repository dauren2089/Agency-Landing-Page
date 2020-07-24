const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal1');
const close = document.querySelector('.modal__close');

btn.onclick = () => {
    modal.classList.add("modal_active");

    close.addEventListener('click', closeModal);
    modal.addEventListener('click', hideModal);

    function closeModal() {
        modal.classList.remove("modal_active");
        close.removeEventListener('click', closeModal);
        modal.removeEventListener('click', hideModal);
    }
    function hideModal(event) {
        if (event.target === modal) {
            closeModal();
            // modal.classList.remove("modal_active");
            // modal.removeEventListener('click', closeModal);
        }

    }
}

// close.onclick = () => {
//     modal.classList.remove("modal_active");
// }

