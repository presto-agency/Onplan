const featureTemplate = document.querySelector('.feature-template');
if (featureTemplate) {
    (function addTitlesTorelativeBlock() {
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

    if (window.screen.width > 1023) {
        (function featureRelativeBlock() {
            let isScrolling = false;
            const menu = document.querySelector('.right-relative-block');
            const btns = document.querySelector('.editor');
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
                return ((top <= 182) && (bottom >= 0));
            }

            function scrolling() {
                if (isFullyVisible(btns)) {
                    menu.classList.add('active-menu');
                }
                else {
                    menu.classList.remove('active-menu');
                }
            }
            scrolling();
        }());

        (function feauterScrollColor() {
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

            let elementsPage = document.querySelectorAll('.editor__content>h2');
            function isFullyVisible(el) {
                let topOfElements = el.getBoundingClientRect().top;
                let bottomOfElements = el.getBoundingClientRect().bottom;
                return (((topOfElements <= 200) && (bottomOfElements > 0)));
            }
            function scrolling() {
                elementsPage.forEach(el => {
                    if (isFullyVisible(el)) {
                        let idEl = el.id;
                        const activeBtns = featureTemplate.querySelectorAll('.active-color');
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
                el.classList.add('active-color')
            });
        }
    }

    (function anchorAnimationFeature() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                const blockID = anchor.getAttribute('href').substr(1);
                const obj = document.getElementById(blockID);
                const yOffset = -92;
                const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            })
        }
    }());
}