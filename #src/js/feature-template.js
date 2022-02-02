const featureTemplate = document.querySelector('.feature-template');
if (featureTemplate) {
    (function addTitlesTorelativeBlock() {
        let titles = document.querySelectorAll('.editor__content>h2');
        const relativeBlock = document.querySelector('.right-relative-block>p');
        titles.forEach(title => {
            titleContent = title.innerHTML;
            let new_el = document.createElement('h2');
            new_el.innerHTML = titleContent;
            relativeBlock.appendChild(new_el);
        })
    }());
}