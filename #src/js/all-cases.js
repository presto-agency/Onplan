const allCases = document.querySelector('.all-cases');
if (!!allCases) {
    (function select() {
        let blockSort = document.getElementById("sort");
        if (blockSort) {
            let blockList = document.getElementById("sort-list");
            let elemItemSelect = document.querySelectorAll('.sort-select__item');
            let elemCurrent = document.getElementById('current-value');
            let active = document.querySelector('#sort-list li.active');
            let current = document.querySelector('#current-value');
            current.textContent = active.textContent;

            const hideSelectMenu = () => {
                blockList.classList.remove('show-menu');
                blockSort.classList.remove('turn-arrow');
                blockList.style.maxHeight = 0;
            };

            const showSelectMenu = () => {
                blockList.classList.add('show-menu');
                blockList.style.maxHeight = blockList.scrollHeight + 'px';
                blockSort.classList.add('turn-arrow');
            };

            const onMouseScroll = () => {
                if (!blockList.classList.contains('show-menu')) {
                    return;
                };
                if (window.pageYOffset > 0) {
                    hideSelectMenu();
                }
            };

            const onOutsideClick = (e) => {
                if (!blockList.classList.contains('show-menu')) {
                    return;
                };

                if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
                    hideSelectMenu();
                };
            };

            const onSelectClick = () => {
                blockList.classList.contains('show-menu')
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
}