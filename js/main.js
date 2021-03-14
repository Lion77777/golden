const humBtn = document.querySelector('.fa-bars');
const humMenu = document.querySelector('.header__hamburger-menu');
humBtn.addEventListener('mouseover', () => {
    humMenu.style.display = 'flex';
});
humMenu.addEventListener('click', function () {
    this.style.display = 'none';
});

// console.log('Hello, Hexlet');