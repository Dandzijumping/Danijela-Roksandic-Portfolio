const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

menuLinks.forEach(link => {

  link.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active'); 
    }

  });

});

const openButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-modal]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});

