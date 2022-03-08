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
        });
    }());
    (function pauseMainSlider() {
        let pauseBtns = document.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet');
        let iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            let iframeSrc = iframe.src + '?enablejsapi=1&html5=1';
            iframe.removeAttribute('src');
            iframe.setAttribute('src', iframeSrc);
        })
        pauseBtns.forEach(btn => {
            btn.onclick = () => {
                iframes.forEach(iframe => {
                    iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                })
            }
        })
    }());
    (function grabCursorAppListing() {
        let containers = document.querySelectorAll('.card__element-wrapper');
        grabCursor(containers)
    }());
}
