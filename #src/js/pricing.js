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