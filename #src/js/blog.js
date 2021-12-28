window.addEventListener('DOMContentLoaded', function () {
    showMore();
    swiperTop();
    swiperCard();
    relativeBlog()
})

const showMore = () => {
    const itemSpan = document.querySelector('.author__content-side > span');
    const item = document.querySelector('.author__content-side');
    if (!!item && !!itemSpan) {
        itemSpan.onclick = () => {
            showCase(item, 'active')
        }
    }
    function showCase(obj, classname) {
        obj.classList.toggle(classname)
    }
}

const swiperTop = () => {
    new Swiper('.slider-top__swiper', {
        navigation: {
            nextEl: '.slider-top__next',
            prevEl: '.slider-top__prev'
        },
        pagination: {
            el: '.swiper__pagination',
            clickable: true
        },
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
        autoHeight: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 30,
        speed: 300,
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
    });
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
        grabCursor: true,
        preloadImages: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
    });
}

const relativeBlog = () => {
    const blogTitles = document.querySelectorAll('.editor__content > h2');
    const blogTitlesArray = Array.from(blogTitles);
    if (blogTitlesArray.length) {
        blogTitlesArray.forEach(title => {
            let yPosition = title.offsetTop;
            let id = title.id;
            const relativeBlog = document.querySelector(`[data-target='${id}']`);
            if (!!relativeBlog) {
                relativeBlog.style.top = yPosition + "px";
            }
        })
    }
}