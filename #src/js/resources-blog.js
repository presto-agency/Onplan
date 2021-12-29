const resourcesBlog = document.querySelector('.resources-blog');
if (!!resourcesBlog) {
    (function swiperResources() {
        new Swiper('.slider-resources', {
            navigation: {
                nextEl: '.slider-resources__next',
                prevEl: '.slider-resources__prev'
            },
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
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
            preloadImages: true,
            loop: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },
        });
    }());
}
