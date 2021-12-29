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
        const pageBtns = document.querySelectorAll('.content__bottom-link');
        const pageMenu = document.querySelector('.content__bottom-links');
        const relativeBtns = document.querySelectorAll('.all-integration-menu__bottom-link');
        const relativeMenu = document.querySelector('.all-integration-menu__bottom-links');
        function addColor(btns, menu) {
            btns.forEach(btn => btn.addEventListener('click', function () {
                const activeBtn = menu.querySelector('.active');
                if (!!activeBtn) {
                    activeBtn.classList.remove('active')
                    btn.classList.add('active')
                }
                else {
                    btn.classList.add('active')
                }
            }))
        }
        addColor(pageBtns, pageMenu)
        addColor(relativeBtns, relativeMenu)
    }());
}

