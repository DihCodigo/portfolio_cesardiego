const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  sideMenu.classList.toggle('active');
});

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-pt]');
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}


