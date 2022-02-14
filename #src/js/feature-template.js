const featureTemplate = document.querySelector('.feature-template');
if (featureTemplate) {
    (function addTitlesToRelativeBlock() {
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

    (function anchorsFeature() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -92;
        anchorAnimation(anchors, yOffset)
    }());

    if (window.screen.width > 1023) {
        (function featureRelativeBlock() {
            const menu = document.querySelector('.right-relative-block');
            const editor = document.querySelector('.editor');
            let topValue = 182;
            let bottomValue = 0;
            showMenu(menu, editor, topValue, bottomValue)
        }());

        (function feauterScrollColor() {
            let elementsPage = document.querySelectorAll('.editor__content>h2');
            scrollerColors(elementsPage, featureTemplate)
        }());
    }
}