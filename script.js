'use strict';

// Select DOM elements
const showModalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(showModalBtn);

// Function definitions
function openModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  }
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
  }
}

function hideModal() {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
}

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);
