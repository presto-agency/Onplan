const allIntegration = document.querySelector('.all-integrtation');
if (!!allIntegration) {
    (function anchorsIntegration() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -182;
        anchorAnimation(anchors, yOffset)
    }());

    (function showMenuIntegration() {
        const menu = document.querySelector('.all-integration-menu');
        const content = document.querySelector('.accounting-system__content');
        let topValue = 182;
        let bottomValue = 0;
        showMenu(menu, content, topValue, bottomValue)
    }());

    (function scrollColorIntegration() {
        let elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
        scrollerColors(elementsPage, allIntegration)
    }());

}

