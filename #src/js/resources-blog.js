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
            effect: "fade",
            speed: 500,
            spaceBetween: 30,
            preloadImages: true,
            loop: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },
            breakpoints: {
                1024: {
                    pagination: false,
                },
                0: {
                    pagination: {
                        el: ".slider-resources__pagination",
                        type: "fraction",
                    },
                }
            }
        });
    }());
    (function grabCursorResources() {
        let containers = document.querySelectorAll('.card__element-wrapper');
        grabCursor(containers)
    }());
}
