const summaryPage = document.querySelector('.summary');
if (!!summaryPage) {
    (function anchorsIntegration() {
        const anchors = document.querySelectorAll('a[href*="#"]');
        const yOffset = -82;
        anchorAnimation(anchors, yOffset)
    }());
}

