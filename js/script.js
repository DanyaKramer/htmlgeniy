const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeButton = document.querySelector(".close-button");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

document.querySelector("a").addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);