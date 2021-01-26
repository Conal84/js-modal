'use strict';

// Select DOM elements
const showModalBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// A function to open the modal
function openModal() {
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
  }
  if (overlay.classList.contains('hidden')) {
    overlay.classList.remove('hidden');
  }
}

// A function to close the modal
function hideModal() {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
  if (!overlay.classList.contains('hidden')) {
    overlay.classList.add('hidden');
  }
}

// Add event listeners
for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
}

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideModal();
  }
});
