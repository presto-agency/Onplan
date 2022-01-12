const pricing = document.querySelector('.pricing');
if (!!pricing) {
    (function showAllIntegrationMenu() {
        let isScrolling = false;
        const menu = document.querySelector('.pricing__relative-title');
        const btns = document.querySelector('.table-price');
        if (document.documentElement.clientWidth > 1024) {
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
        }
    }());
}