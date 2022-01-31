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
    let scrollers = document.querySelectorAll('.bottom-scrolling-table, .table-scroll, .relative-title__relative-list');

    scrollers.forEach(element => {
        element.onscroll = function (e) {
            scrollAll(e.target.scrollLeft);
        };
    });

    function scrollAll(scrollLeft) {
        scrollers.forEach(element => {
            element.scrollLeft = scrollLeft;
        });
    }


}());

(function grabCursorTop() {
    if (window.screen.width > 1024) {
        let containers = document.querySelectorAll('.bottom-scrolling-table, .table-scroll, .relative-title__relative-list');
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
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
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
                    const x = e.pageX - container.offsetLeft;
                    const walkX = x - startX;
                    container.scrollLeft = scrollLeft - walkX;
                }
            }
        })
    }
}());

(function compareRelativeBlock() {
    let isScrolling = false;
    const menu = document.querySelector('.relative-title');
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

(function scrollNameCompare() {
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

function changeMargin(elements, tableWidth) {
    let widthOfLogo = elements[0].clientWidth;
    let array = [];
    elements.forEach(el => {
        array.push(el)
    })
    let lastElement = array[array.length - 1];
    lastElement.style.margin = `0 ${tableWidth - widthOfLogo}px 0 0`;
}