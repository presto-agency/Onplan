window.addEventListener('DOMContentLoaded', function () {
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
                }
            })
        }
    })();
    (function tableWidth() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            let tableWidth = table.clientWidth + 'px';
            let bottomText = table.nextElementSibling;
            bottomText.style.width = tableWidth;
        });
    })();
}

    const mainPage = document.querySelector('.main-page');
if (!!mainPage) {
    (function callTabs() {
        let elementsLink = document.querySelectorAll('.trigger-obj');
        let tabsBtns = document.querySelectorAll('.tabs__item');
        const tabs = document.querySelector('.tabs__body');
        const menu = document.querySelector('.tabs__items');
        elementsLink.forEach(link => link.addEventListener('click', function () {
            let attr = this.getAttribute('data-attr');
            const activeBtn = tabs.querySelector('.active');
            let subWindow = document.getElementById(attr);
            activeBtn.classList.remove('active');
            subWindow.classList.add('active');
        }))
        tabsBtns.forEach(btn => btn.addEventListener('click', function () {
            const activeBtn = menu.querySelector('.active');
            if (!!activeBtn) {
                activeBtn.classList.remove('active')
                btn.classList.add('active')
            }
            else {
                btn.classList.add('active')
            }
        }))
    }());
}
    const allIntegration = document.querySelector('.all-integrtation');
if (!!allIntegration) {
    (function anchorAnimation() {
        const page = document.querySelector('.all-integrtation');
        if (!!page) {
            const anchors = document.querySelectorAll('a[href*="#"]');
            for (let anchor of anchors) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault()
                    const blockID = anchor.getAttribute('href').substr(1);
                    const obj = document.getElementById(blockID);
                    const yOffset = -182;
                    const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                })
            }
        }
    }());

    (function showAllIntegrationMenu() {
        let isScrolling = false;
        const menu = document.querySelector('.all-integration-menu');
        const btns = document.querySelector('.content__bottom-links');
        if (!!menu) {
            window.addEventListener("scroll", throttleScroll, false);
            function throttleScroll(e) {
                if (isScrolling == false) {
                    window.requestAnimationFrame(function () {
                        scrolling(e);
                        isScrolling = false;
                    });
                }
                isScrolling = true;
            }

            function isFullyVisible(el) {
                let elementBoundary = el.getBoundingClientRect();
                let top = elementBoundary.top;
                let bottom = elementBoundary.bottom;
                return ((top >= 0) && (bottom <= window.innerHeight));
            }

            function scrolling() {
                if (isFullyVisible(btns)) {
                    menu.classList.remove('active');
                }
                else {
                    menu.classList.add('active');
                }
            }
            scrolling();
        }
    }());

    (function scrollColor() {
        let isScrolling = false;
        window.addEventListener("scroll", throttleScroll, false);
        function throttleScroll(e) {
            if (isScrolling == false) {
                window.requestAnimationFrame(function () {
                    scrolling(e);
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }

        const elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
        function isFullyVisible(el) {
            let topOfElements = el.getBoundingClientRect().top;
            let bottomOfElements = el.getBoundingClientRect().bottom;
            return (((topOfElements <= 200) && (bottomOfElements > 0)));
        }
        function scrolling() {
            elementsPage.forEach(el => {
                if (isFullyVisible(el)) {
                    let idEl = el.id;
                    const activeBtns = allIntegration.querySelectorAll('.active-color');
                    let btns = document.querySelectorAll(`a[href='#${idEl}']`);
                    changeClass(activeBtns, btns)
                }
            });
        }
        scrolling();
    }());

    const changeClass = (activeBtns, els) => {
        activeBtns.forEach(aBtn => {
            aBtn.classList.remove('active-color')
        });
        els.forEach(el => {
            el.parentNode.classList.add('active-color')
        });
    }
}


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

    const pricing = document.querySelector('.pricing');
if (!!pricing) {
    (function showAllIntegrationMenu() {
        let isScrolling = false;
        const menu = document.querySelector('.pricing__relative-title');
        const btns = document.querySelector('.table-price');
        window.addEventListener("scroll", throttleScroll, false);
        function throttleScroll(e) {
            if (isScrolling == false) {
                window.requestAnimationFrame(function () {
                    scrolling(e);
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }

        function isFullyVisible(el) {
            let elementBoundary = el.getBoundingClientRect();
            let top = elementBoundary.top;
            let bottom = elementBoundary.bottom;
            return ((top <= 0) && (bottom >= 0));
        }

        function scrolling() {
            if (isFullyVisible(btns)) {
                menu.classList.add('active');
            }
            else {
                menu.classList.remove('active');
            }
        }
        scrolling();
    }());
    (function scrollName() {
        window.addEventListener("scroll", scrolling, true);
        function scrolling() {
            const elementsPage = document.querySelectorAll('.table-price__bottom-table');
            elementsPage.forEach(el => {
                if (isFullyVisible(el)) {
                    let idEl = el.id;
                    const changeBtn = document.getElementById('change-btn');
                    changeBtn.innerHTML = idEl;
                }
            });
        }
        function isFullyVisible(el) {
            let topOfElements = el.getBoundingClientRect().top;
            let bottomOfElements = el.getBoundingClientRect().bottom;
            return (((topOfElements <= 130) && (bottomOfElements > 0)));
        }
    }());
}
    const about = document.querySelector('.about-onplan');
if (!!about) {
    (function addClassToAuthor() {
        const btns = document.querySelectorAll('.our-team__more-text');
        const closeArrows = document.querySelectorAll('.our-team__description>svg');
        btns.forEach(btn => {
            btn.onclick = () => {
                let activeBtn = document.querySelector('.our-team__list> .active')
                if (activeBtn) {
                    activeBtn.classList.remove('active')
                    btn.parentNode.classList.add('active')
                }
                else {
                    btn.parentNode.classList.add('active')
                }
            }
        });
        closeArrows.forEach(arrows => {
            arrows.onclick = () => {
                arrows.parentNode.parentNode.classList.remove('active')
            }
        });
    }());
    (function grabCursor() {
        const containers = document.querySelectorAll('.our-team__description');

        let startY;
        let scrollTop;
        let isDown;

        containers.forEach(container => {
            container.addEventListener('mousedown', e => mouseIsDown(e));
            container.addEventListener('mouseup', e => mouseUp(e))
            container.addEventListener('mouseleave', e => mouseLeave(e));
            container.addEventListener('mousemove', e => mouseMove(e));
            function mouseIsDown(e) {
                isDown = true;
                startY = e.pageY - container.offsetTop;
                scrollLeft = container.scrollLeft;
                scrollTop = container.scrollTop;
            }
            function mouseUp(e) {
                isDown = false;
            }
            function mouseLeave(e) {
                isDown = false;
            }
            function mouseMove(e) {
                if (isDown) {
                    e.preventDefault();
                    const y = e.pageY - container.offsetTop;
                    const walkY = y - startY;
                    container.scrollTop = scrollTop - walkY;
                }
            }
        });
    }());
}
})






