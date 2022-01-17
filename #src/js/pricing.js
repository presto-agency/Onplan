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

        const elementsPage = document.querySelectorAll('.table-price__bottom-table');
        function isFullyVisible(el) {
            let topOfElements = el.getBoundingClientRect().top;
            let bottomOfElements = el.getBoundingClientRect().bottom;
            let topValue = + topOfElements;
            let bottomValue = + bottomOfElements;
            return (((topValue <= 130) && (topValue > 0)) || ((bottomValue <= 130) && (bottomValue > 0)));
        }
        function scrolling() {
            elementsPage.forEach(el => {
                if (isFullyVisible(el)) {
                    let idEl = el.id;
                    const changeBtn = document.getElementById('change-btn');
                    changeBtn.innerHTML = idEl;
                }
            });
        }
        scrolling();
    }());
}