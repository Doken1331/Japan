(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());


(function() {

    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLink = document.querySelector('.header__list');
    burgerItem.addEventListener('click', function() {
        menu.classList.add('header__nav_active');
        document.body.style.overflow = 'hidden';
    })
    menuCloseItem.addEventListener('click', function() {
        menu.classList.remove('header__nav_active');
        document.body.style.overflow = '';
    })
    menuLink.addEventListener('click', function() {
        menu.classList.remove('header__nav_active');
        document.body.style.overflow = '';
    })
}());