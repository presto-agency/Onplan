const headerMenu = document.querySelector('.header');
const scenarioPlanning = document.querySelector('.frequently');
const sliderApp = document.querySelector('.slider-app');

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
if (scenarioPlanning) {
    (function turnCross() {
        let crosses = document.querySelectorAll('.open-menu');
        crosses.forEach(cross => {
            cross.onclick = () => {
                let activeBtn = document.querySelector('.frequently__content> .active')
                cross.classList.toggle('active')
                if (activeBtn) {
                    activeBtn.classList.remove('active')
                }
            }
        })
    }());
}
if(sliderApp){
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
        let pauseBtns = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
        let pauseBullets = document.querySelectorAll('.swiper-pagination-bullet');
        let iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            let iframeSrc = iframe.src + '?enablejsapi=1&html5=1';
            iframe.removeAttribute('src');
            iframe.setAttribute('src', iframeSrc);
        })
        if (pauseBtns.length > 0){
            pauseBtns.forEach(btn => {
                btn.onclick = () => {
                    iframes.forEach(iframe => {
                        iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    })
                }
            });
            pauseBullets.forEach(bullet => {
                bullet.onclick = () => {
                    iframes.forEach(iframe => {
                        iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    })
                }
            })
        }
        else{
            pauseBullets.forEach(bullet => {
                bullet.onclick = () => {
                    iframes.forEach(iframe => {
                        iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                    })
                }
            })
        }
    }());
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
        effect: "fade",
        speed: 500,
        grabCursor: true,
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

function grabCursor(containers) {
    if (window.screen.width > 1024) {
        let startY;
        let scrollTop;
        let startX;
        let scrollLeft;
        let isDown;

        containers.forEach(container => {
            container.addEventListener('mousedown', e => mouseIsDown(e));
            container.addEventListener('mouseup', e => mouseUp(e))
            container.addEventListener('mouseleave', e => mouseLeave(e));
            container.addEventListener('mousemove', e => mouseMove(e));
            function mouseIsDown(e) {
                isDown = true;
                startY = e.pageY - container.offsetTop;
                startX = e.pageX - container.offsetLeft;
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
                    const x = e.pageX - container.offsetLeft;
                    const walkY = y - startY;
                    const walkX = x - startX;
                    container.scrollTop = scrollTop - walkY;
                    container.scrollLeft = scrollLeft - walkX;
                }
            }
        });
    }
};

function anchorAnimation(anchors, yOffset) {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1);
            const obj = document.getElementById(blockID);
            const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        })
    }
};

function showMenu(menu, objects, topValue, bottomValue) {
    window.addEventListener("scroll", scrolling, false);

    function isFullyVisible(el) {
        let elementBoundary = el.getBoundingClientRect();
        let top = elementBoundary.top;
        let bottom = elementBoundary.bottom;
        return ((top <= topValue) && (bottom >= bottomValue));
    }

    function scrolling() {
        if (isFullyVisible(objects)) {
            menu.classList.add('active');
        }
        else {
            menu.classList.remove('active');
        }
    }
    scrolling();
};

function scrollerColors(elementsPage, sheet) {
    window.addEventListener("scroll", scrolling, false);
    function scrolling() {
        elementsPage.forEach(el => {
            if (isFullyVisible(el)) {
                let idEl = el.id;
                const activeBtns = sheet.querySelectorAll('.active-color');
                let btns = document.querySelectorAll(`a[href='#${idEl}']`);
                changeClass(activeBtns, btns)
            }
        });
    }
    function changeClass(activeBtns, els) {
        activeBtns.forEach(aBtn => {
            aBtn.classList.remove('active-color')
        });
        els.forEach(el => {
            el.classList.add('active-color')
        });
    }
    function isFullyVisible(el) {
        let topOfElements = el.getBoundingClientRect().top;
        let bottomOfElements = el.getBoundingClientRect().bottom;
        return (((topOfElements <= 200) && (bottomOfElements > 0)));
    }
    scrolling();
};

function scrollName(elementsPage) {
    window.addEventListener("scroll", scrolling, true);
    function scrolling() {
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
};

(function mobilePict() {
    if (window.screen.width < 1024) {
        let elements = document.querySelectorAll('[data-img]');
        if(elements.length > 0){
            elements.forEach(element => {
                let attr = element.getAttribute('data-img');
                element.setAttribute('src', `${attr}`);
            })
        }
    }
}());




