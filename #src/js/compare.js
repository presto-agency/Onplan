(function grabCursorTop() {
    const container = document.querySelector('.table-scroll');
    let startX;
    let scrollLeft;
    let isDown;

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
}());

(function marginTopTable() {
    let scrollTablewidth = document.querySelector('.table-scroll').clientWidth;
    let scrollObjs = document.querySelectorAll('.table-scroll__col');
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

function changeMargin(elements, tableWidth) {
    let array = [];
    elements.forEach(el => {
        array.push(el)
    })
    let lastElement = array[array.length - 1];
    lastElement.style.margin = `0 ${tableWidth - 191}px 0 0`;
}