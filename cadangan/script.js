// script.js
const hamburger = document.getElementById('hamburger');
const hidden = document.getElementById('hidden');

hamburger.addEventListener('click', () => {
  hidden.style.display = 'flex';
});
