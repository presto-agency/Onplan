const headerMenu = document.querySelector('.header');
if (!!headerMenu) {
    (function burgerAnimation() {
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
    }());

    (function callSub() {
        let elementsLink = document.querySelectorAll('.trigger');
        elementsLink.forEach(link => link.addEventListener('click', function () {
            let attr = this.getAttribute('data-attr');
            const menu = document.querySelector('.header');
            let subWindow = document.getElementById(attr);
            subWindow.classList.add('active');
            menu.classList.add('active-sub');
        }))
    }());

    (function closeSub() {
        let subClose = document.querySelectorAll('.sub-close');
        subClose.forEach(close => close.addEventListener('click', function () {
            let attr = this.getAttribute('data-close');
            const menu = document.querySelector('.header');
            let subMenu = document.getElementById(attr);
            subMenu.classList.remove('active');
            menu.classList.remove('active-sub');
        }))
    })();
}

(function swiperComments() {
    new Swiper('.swiper-integration__swiper', {
        navigation: {
            nextEl: '.swiper__next',
            prevEl: '.swiper__prev'
        },
        pagination: {
            el: ".swiper-integration__pagination",
            clickable: true
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -1],
            },
            next: {
                translate: ["120%", 0, 0],
            },
        },
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
    });
}());

(function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const sources = document.querySelectorAll('source[data-srcset]');

    for (let i = 0; i < images.length; i++) {
        let dataSrc = images[i].getAttribute('data-src');
        images[i].setAttribute('src', dataSrc);
        images[i].removeAttribute('data-src');
    }

    for (let i = 0; i < sources.length; i++) {
        let dataSrcSet = sources[i].getAttribute('data-srcset');
        sources[i].setAttribute('srcset', dataSrcSet);
        sources[i].removeAttribute('data-srcset');
    }
}());

function swiperTemplate() {
    new Swiper('.swiper-template', {
        navigation: {
            nextEl: '.load-more-template',
        },
        grabCursor: true,
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -1],
            },
            next: {
                translate: ["120%", 0, 0],
            },
        },
        speed: 500,
        spaceBetween: 32,
        preloadImages: false,
        lazy: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 1,
                }
            },
            0: {
                slidesPerView: 1,
                slidesPerGroup: 2,
                grid: {
                    rows: 2,
                },
            }
        }
    });
};
function swiperGuide() {
    new Swiper('.swiper-guide', {
        navigation: {
            nextEl: '.load-more-guide',
        },
        grabCursor: true,
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -1],
            },
            next: {
                translate: ["120%", 0, 0],
            },
        },
        speed: 500,
        spaceBetween: 32,
        preloadImages: false,
        lazy: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 1,
                }
            },
            0: {
                slidesPerView: 1,
                slidesPerGroup: 2,
                grid: {
                    rows: 2,
                },
            }
        }
    });
};