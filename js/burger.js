document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenuList = document.querySelector('.nav-menu__list');

    burgerMenu.addEventListener('click', () => {
        navMenuList.classList.toggle('active');
        burgerMenu.classList.toggle('open'); // Додаємо/знімаємо клас .open для анімації
    });
});