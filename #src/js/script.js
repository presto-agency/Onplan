window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
})

const burgerAnimation = () => {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__navigation');
    const body = document.querySelector('body');
    const mobBtns = document.querySelector('.mobile-menu-btns');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('body-lock');
        mobBtns.classList.toggle('active');
    }
}
// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }

// const scrollPage = () => {
//     let scrollPosition;
//     const header = document.querySelector('.header');
//     const scrollChange = 1;

//     const addClass = () => header.classList.add("hide")
//     const removeClass = () => header.classList.remove("hide")

//     window.addEventListener('scroll', function () {
//         scrollPosition = window.scrollY;
//         if (scrollPosition >= scrollChange) { addClass() }
//         else { removeClass() }
//     })
// }





