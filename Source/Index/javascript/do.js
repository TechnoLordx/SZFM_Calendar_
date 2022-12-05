const menu = document.querySelector('#mobile');
const elementOfMenu = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    elementOfMenu.classList.toggle('active');
    }
);

