const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.querySelector('.side-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  sideMenu.classList.toggle('active');
});
