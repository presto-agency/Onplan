window.addEventListener('DOMContentLoaded', function () {
    swiperComments();
})

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
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        spaceBetween: 30,
        autoHeight: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: true,
        },
    });
}