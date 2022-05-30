// *SKILL LINE HEIGHT* //
const skillLine = document.querySelectorAll('.skills__percent-wrap_scale span');

skillLine.forEach(element => {
    element.style.width = `${element.parentElement.previousElementSibling.firstElementChild.innerText}`;
});

// *MENU* //
const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});
menuClose.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');

});