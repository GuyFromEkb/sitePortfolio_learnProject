const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu'),
    menuClose = document.querySelector('.menu__close');


// console.log(hamburger);
// console.log(menu);

hamburger.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
});
menuClose.addEventListener('click', function() {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');

});