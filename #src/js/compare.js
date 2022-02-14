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