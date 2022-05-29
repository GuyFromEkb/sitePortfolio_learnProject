const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close'),
    skillLine = document.querySelectorAll('.skills__percent-wrap_scale span');

// *SKILL LINE HEIGHT* //
skillLine.forEach(element => {
    element.style.width = `${element.parentElement.previousElementSibling.firstElementChild.innerText}`;
});

// *MENU* //
hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});
menuClose.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');

});