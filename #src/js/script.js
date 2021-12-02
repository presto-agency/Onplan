window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
    swiperComments();
    select();
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

const swiperComments = () => {
    new Swiper('.clients__swiper', {
        navigation: {
            nextEl: '.swiper__next',
            prevEl: '.swiper__prev'
        },
        pagination: {
            el: ".swiper__pagination",
            clickable: true
        },
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        // autoplay: {
        //     delay: 3000,
        // },
        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: true,
        },
    });
}

const select = () => {
    let blockSort = document.getElementById("sort");
    if (blockSort) {
        let blockList = document.getElementById("sort-list");
        let elemItemSelect = document.querySelectorAll('.sort-select__item');
        let elemCurrent = document.getElementById('current-value');
        let active = document.querySelector('#sort-list li.active');
        let current = document.querySelector('#current-value');
        current.textContent = active.textContent;

        const hideSelectMenu = () => {
            blockList.classList.remove('show-menu');
            blockSort.classList.remove('turn-arrow');
            blockList.style.maxHeight = 0;
        };

        const showSelectMenu = () => {
            blockList.classList.add('show-menu');
            blockList.style.maxHeight = blockList.scrollHeight + 'px';
            blockSort.classList.add('turn-arrow');
        };

        const onMouseScroll = () => {
            if (!blockList.classList.contains('show-menu')) {
                return;
            };
            if (window.pageYOffset > 0) {
                hideSelectMenu();
            }
        };

        const onOutsideClick = (e) => {
            if (!blockList.classList.contains('show-menu')) {
                return;
            };

            if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
                hideSelectMenu();
            };
        };

        const onSelectClick = () => {
            blockList.classList.contains('show-menu')
                ? hideSelectMenu()
                : showSelectMenu();
        };

        blockSort.addEventListener('click', onSelectClick);
        window.addEventListener('click', onOutsideClick);
        window.addEventListener('scroll', onMouseScroll);

        elemItemSelect.forEach(item => item.addEventListener('click', function () {
            let elemItemSelectActive = document.querySelectorAll('.sort-select__item.active');
            elemItemSelectActive.forEach(itemActive => itemActive.classList.remove('active'));
            item.classList.add('active');
            elemCurrent.textContent = item.textContent;
            elemCurrent.setAttribute('data-value', item.getAttribute('data-value'));
        }))
    }
};
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





