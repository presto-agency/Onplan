const blog = document.querySelector('.blog');
if (!!blog) {
    (function showMore() {
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
    })();

    (function swiperTop() {
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
    })();

    (function swiperCard() {
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
    })();

    (function relativeBlog() {
        const blogTitles = document.querySelectorAll('.editor__content > h2');
        const blogTitlesArray = Array.from(blogTitles);
        if (blogTitlesArray.length) {
            blogTitlesArray.forEach(title => {
                let yPosition = title.offsetTop;
                let id = title.id;
                const relativeBlog = document.querySelector(`[data-target='${id}']`);
                if (!!relativeBlog) {
                    relativeBlog.style.top = yPosition + "px";
                    let blogsHtml = relativeBlog.innerHTML;
                    let titlesParent = title.parentNode;
                    let new_el = document.createElement('div');
                    new_el.className = "editor-inside-block";
                    new_el.innerHTML = blogsHtml;
                    titlesParent.insertBefore(new_el, title)
                }
            })
        }
    })();

    (function tableWidth() {
        let tableWrappers = document.querySelectorAll('.wp-block-table');
        tableWrappers.forEach(wrapper => {
            let tableWidth = Math.floor(wrapper.children[0].clientWidth);
            if (wrapper.children[1]) {
                wrapper.children[0].style.width = tableWidth + 'px';
                if (wrapper.clientWidth < wrapper.children[0].clientWidth) {
                    wrapper.children[1].style.width = tableWidth + 1 + 'px';
                }
                else {
                    wrapper.children[1].style.width = tableWidth + 'px';
                }
            }
        });
    })();
}
