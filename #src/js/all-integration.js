window.addEventListener('DOMContentLoaded', function () {
    anchorAnimation()
})

const anchorAnimation = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1);
            const obj = document.getElementById(blockID);
            const yOffset = -100;
            const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        })
    }
}