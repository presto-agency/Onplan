window.addEventListener('DOMContentLoaded', function () {
    // sliderLogo(),
    // sliderLogoCenter()
})

const sliderLogo = () => {
    new Swiper('.slider-logo', {
        grabCursor: true,
        slidesPerView: 2,
        // autoplay: {
        //     delay: 0,
        // },
        initialSlide: 1,
        spaceBetween: 16,
        speed: 3000,
        loop: true,
    });
}
const sliderLogoCenter = () => {
    new Swiper('.slider-logo-center', {
        grabCursor: true,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 0,
        // },
        initialSlide: 1,
        spaceBetween: 16,
        speed: 3000,
        loop: true,
    });
}