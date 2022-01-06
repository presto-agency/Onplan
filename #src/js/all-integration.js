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

    (function addClassToBtn() {
        const relativeBtns = document.querySelectorAll('.all-integration-menu__bottom-link, .content__bottom-link');
        function addColor(btns) {
            btns.forEach(btn => btn.addEventListener('click', function () {
                const activeBtns = allIntegration.querySelectorAll('.active-color');
                const attr = this.querySelector('a').getAttribute("href");
                let els = document.querySelectorAll(`a[href='${attr}']`);
                if (!!activeBtns) {
                    activeBtns.forEach(aBtn => {
                        aBtn.classList.remove('active-color')
                    });
                    els.forEach(el => {
                        el.parentNode.classList.add('active-color')
                    });
                }
                else {
                    els.forEach(el => {
                        el.parentNode.classList.add('active-color')
                    });
                }
            }))
        }
        addColor(relativeBtns)
    }());

    // (function scrollColor() {
    //     let isScrolling = false;
    //     window.addEventListener("scroll", throttleScroll, false);
    //     function throttleScroll(e) {
    //         if (isScrolling == false) {
    //             window.requestAnimationFrame(function () {
    //                 scrolling(e);
    //                 isScrolling = false;
    //             });
    //         }
    //         isScrolling = true;
    //     }

    //     const elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
    //     function isFullyVisible(el) {
    //         let rect = el.getBoundingClientRect(),
    //             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    //     }
    //     function scrolling() {
    //         elementsPage.forEach(el => {
    //             if (isFullyVisible(el)) {
    //                 let idEl = el.id;
    //                 let btnMenu = document.querySelector(`a[href='#${idEl}']`);
    //                 // btnMenu.classList.add('active-color');
    //                 console.log(btnMenu)
    //             }
    //             else {
    //                 // btnMenu.classList.remove('active-color');
    //             }
    //         });
    //     }
    //     scrolling();
    // }());
}

