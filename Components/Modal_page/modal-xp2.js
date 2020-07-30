const Btn = document.querySelector(".modal-btn");
const Modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".btn-close");

// Btn.addEventListener("click", () => {
//     Modal.classList.add("open-modal");
// });

Btn.onclick = () => {
    Modal.classList.add("open-modal");

    closeBtn.addEventListener('click', closeModal);
    Modal.addEventListener('click', hideModal);

    function closeModal() {
        Modal.classList.remove("open-modal");
        Modal.removeEventListener('click', closeModal);
    }
    function hideModal(event) {
        if (event.target === Modal) {
            Modal.classList.remove("open-modal");
            Modal.removeEventListener('click', hideModal);
        }
    }
}