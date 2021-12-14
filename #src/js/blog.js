window.addEventListener('DOMContentLoaded', function () {
    showMore();
    swiperCard();
})

const showMore = () => {
    const item = document.querySelector('.author__content-side');
    const itemSpan = document.querySelector('.author__content-side > span');
    itemSpan.onclick = () => {
        showCase(item, 'active')
    }
    function showCase(obj, classname) {
        obj.classList.toggle(classname)
    }
}

const swiperCard = () => {
    new Swiper('.popular__slider', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                spaceBetween: 65,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 65,
                slidesPerView: 3,
                loop: true,
            },
        },
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
    });
}