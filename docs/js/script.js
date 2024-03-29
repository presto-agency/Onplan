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

(function playVideo() {
    let videos = document.querySelectorAll('.slider-app__video>.slider-app__preview');
    if(videos.length>=1){
        videos.forEach(video=>{
            video.onclick = () =>{
                video.classList.add('active');
                video.nextElementSibling.play();
            }
        })
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

    (function changeclassWpSwiper() {
        let swiper = document.querySelector('.swiper-container');
        if (swiper) {
            swiper.className = "swiper";
        }
    })();

    (function swiperWp() {
        new Swiper('.wp-swiper .swiper', {
            navigation: {
                nextEl: '.wp-swiper .swiper-button-next',
                prevEl: '.wp-swiper .swiper-button-prev'
            },
            pagination: {
                el: '.wp-swiper .swiper-pagination',
                clickable: true
            },
            grabCursor: true,
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

    if (window.screen.width > 1023) {
        (function featureBannerBlock() {
            const menu = document.querySelector('.right-banner-block');
            if(menu){
                const editor = document.querySelector('.editor');
                let topValue = 182;
                let bottomValue = 0;
                showMenu(menu, editor, topValue, bottomValue)
            }
        }());
    }
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
    (function anchorsIntegration() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -182;
        anchorAnimation(anchors, yOffset)
    }());

    (function showMenuIntegration() {
        const menu = document.querySelector('.all-integration-menu');
        const content = document.querySelector('.accounting-system__content');
        let topValue = 182;
        let bottomValue = 0;
        showMenu(menu, content, topValue, bottomValue)
    }());

    (function scrollColorIntegration() {
        let elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
        scrollerColors(elementsPage, allIntegration)
    }());

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

const pricing = document.querySelector('.pricing');
if (!!pricing) {
    (function showAllIntegrationMenu() {
        const menu = document.querySelector('.pricing__relative-title');
        const table = document.querySelector('.table-price');
        let topValue = 0;
        let bottomValue = 0;
        showMenu(menu, table, topValue, bottomValue)
    }());
    (function scrollNamePricing() {
        const elementsPage = document.querySelectorAll('.table-price__bottom-table');
        scrollName(elementsPage)
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
    (function grabCursorAbout() {
        let containers = document.querySelectorAll('.our-team__description');
        grabCursor(containers)
    }());
}
const compare = document.querySelector('.compare-competition');
if (!!compare) {

    (function marginTopTable() {
        let scrollTablewidth = document.querySelector('.table-scroll').clientWidth;
        let scrollObjs = document.querySelectorAll('.table-scroll__col');
        changeMargin(scrollObjs, scrollTablewidth)
    }());

    (function marginRelativeTable() {
        let scrollTablewidth = document.querySelector('.relative-title__relative-list').clientWidth;
        let scrollObjs = document.querySelectorAll('.relative-title__link');
        changeMargin(scrollObjs, scrollTablewidth)
    }());

    (function marginBottomTables() {
        let bottomTables = document.querySelectorAll('.bottom-scrolling-table');
        bottomTables.forEach(table => {
            let tableWidth = table.clientWidth;
            let scrollObjs = table.querySelectorAll('.bottom-scrolling-table__column');
            changeMargin(scrollObjs, tableWidth)
        })
    }());

    (function scrollingAll() {
        if (window.screen.width > 1024) {
            let scrollers = document.querySelectorAll('.bottom-scrolling-table, .table-scroll, .relative-title__relative-list');
            scrollers.forEach(element => {
                element.onscroll = function (e) {
                    let targetElScroll = e.target.scrollLeft;
                    scrollers.forEach(element => {
                        element.scrollLeft = targetElScroll;
                    });
                };
            });
        }
    }());

    (function grabCursorCompare() {
        let containers = document.querySelectorAll('.bottom-scrolling-table, .table-scroll, .relative-title__relative-list');
        grabCursor(containers)
    }());

    (function showMenuCompare() {
        const menu = document.querySelector('.relative-title');
        const table = document.querySelector('.table-price');
        let topValue = 0;
        let bottomValue = 0;

        showMenu(menu, table, topValue, bottomValue)
    }());

    (function scrollNameCompare() {
        const elementsPage = document.querySelectorAll('.table-price__bottom-table');
        scrollName(elementsPage)
    }());

    function changeMargin(elements, tableWidth) {
        let widthOfLogo = elements[0].clientWidth;
        let array = [];
        elements.forEach(el => {
            array.push(el)
        })
        let lastElement = array[array.length - 1];
        lastElement.style.margin = `0 ${tableWidth - widthOfLogo}px 0 0`;
    }

}
const featureTemplate = document.querySelector('.feature-template');
if (featureTemplate) {
    (function addTitlesToRelativeBlock() {
        let titles = document.querySelectorAll('.editor__content>h2');
        const relativeBlock = document.querySelector('.right-relative-block>p');
        titles.forEach(title => {
            titleContent = title.innerHTML;
            let titleId = title.id;
            let new_el = document.createElement('a');
            new_el.setAttribute('href', `#${titleId}`);
            new_el.innerHTML = titleContent;
            relativeBlock.appendChild(new_el);
        })
    }());

    (function anchorsFeature() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -92;
        anchorAnimation(anchors, yOffset)
    }());

    if (window.screen.width > 1023) {
        (function featureRelativeBlock() {
            const menu = document.querySelector('.right-relative-block');
            const editor = document.querySelector('.editor');
            let topValue = 182;
            let bottomValue = 0;
            showMenu(menu, editor, topValue, bottomValue)
        }());

        (function feauterScrollColor() {
            let elementsPage = document.querySelectorAll('.editor__content>h2');
            scrollerColors(elementsPage, featureTemplate)
        }());
    }
}
const knowledgeHub = document.querySelector('.knowledge-hub');
if (knowledgeHub) {
    (function sortSelect() {
        let blockSort = document.getElementById("sort");
        if (blockSort) {
            let blockList = document.getElementById("sort-list");
            let elemItemSelect = document.querySelectorAll('.sort-select__item');
            let elemCurrent = document.getElementById('current-value');
            let active = document.querySelector('#sort-list li.active');
            let current = document.querySelector('#current-value');
            current.textContent = active.textContent;

            const hideSelectMenu = () => {
                blockList.classList.remove('container--active');
                blockSort.classList.remove('turn-arrow');
                blockList.style.maxHeight = 0;
            };

            const showSelectMenu = () => {
                blockList.classList.add('container--active');
                blockList.style.maxHeight = blockList.scrollHeight + 'px';
                blockSort.classList.add('turn-arrow');
            };

            const onMouseScroll = () => {
                if (!blockList.classList.contains('container--active')) {
                    return;
                };
                if (window.pageYOffset > 0) {
                    hideSelectMenu();
                }
            };

            const onOutsideClick = (e) => {
                if (!blockList.classList.contains('container--active')) {
                    return;
                };

                if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
                    hideSelectMenu();
                };
            };

            const onSelectClick = () => {
                blockList.classList.contains('container--active')
                    ? hideSelectMenu()
                    : showSelectMenu();
            };

            blockSort.addEventListener('click', onSelectClick);
            window.addEventListener('click', onOutsideClick);
            window.addEventListener('scroll', onMouseScroll);

            elemItemSelect.forEach(item => item.addEventListener('click', function () {
                let elemItemSelectActive = document.querySelectorAll('.sort-select__item.active');
                elemItemSelectActive.forEach(itemActive => itemActive.classList.remove('active'));
                item.classList.add('active');
                elemCurrent.textContent = item.textContent;
                elemCurrent.setAttribute('data-value', item.getAttribute('data-value'));
            }))
        }
    }());
    (function grabCursorknowledge() {
        let containers = document.querySelectorAll('.content-cards__tag-wrap');
        grabCursor(containers)
    }());
}
const appListing = document.querySelector('.app-listing');
if (!!appListing) {
    (function grabCursorAppListing() {
        let containers = document.querySelectorAll('.card__element-wrapper');
        grabCursor(containers)
    }());
}

const summaryPage = document.querySelector('.summary');
if (!!summaryPage) {
    (function anchorsIntegration() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -82;
        anchorAnimation(anchors, yOffset)
    }());
}











