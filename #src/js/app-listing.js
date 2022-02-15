const appListing = document.querySelector('.app-listing');
if (!!appListing) {
    (function swiperApp() {
        new Swiper('.slider-app__swiper', {
            navigation: {
                nextEl: '.slider-app__next',
                prevEl: '.slider-app__prev'
            },
            pagination: {
                el: ".slider-app__pagination",
                clickable: true
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
    (function pauseMainSlider() {
        let sliderNavElement = document.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet');
        sliderNavElement.forEach(el => {
            el.onclick = () => {
                let iframe = document.querySelector('iframe');
                let iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            }
        })
    }());
}
