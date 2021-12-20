window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
    callSub();
    closeSub();
})

const burgerAnimation = () => {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header');
    const body = document.querySelector('body');
    const mobBtns = document.querySelector('.mobile-menu-btns');
    burger.onclick = () => {
        addClass(burger, 'active')
        addClass(menu, 'active')
        addClass(body, 'body-lock')
        addClass(mobBtns, 'active')
    }
    function addClass(obj, classname) {
        obj.classList.toggle(classname)
    }
}

const callSub = () => {
    let elementsLink = document.querySelectorAll('.trigger');
    elementsLink.forEach(link => link.addEventListener('click', function () {
        let attr = this.getAttribute('data-attr');
        const menu = document.querySelector('.header');
        let subWindow = document.getElementById(attr);
        subWindow.classList.add('active');
        menu.classList.add('active-sub');
    }))
}

const closeSub = () => {
    let subClose = document.querySelectorAll('.sub-close');
    subClose.forEach(close => close.addEventListener('click', function () {
        let attr = this.getAttribute('data-close');
        const menu = document.querySelector('.header');
        let subMenu = document.getElementById(attr);
        subMenu.classList.remove('active');
        menu.classList.remove('active-sub');
    }))
}