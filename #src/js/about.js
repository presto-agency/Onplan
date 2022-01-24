const about = document.querySelector('.about-onplan');
if (!!about) {
    (function addClassToAuthor() {
        const btns = document.querySelectorAll('.our-team__more-text');
        const closeArrows = document.querySelectorAll('.our-team__description>svg');
        btns.forEach(btn => {
            btn.onclick = () => {
                btn.parentNode.classList.add('active')
            }
        });
        closeArrows.forEach(arrows => {
            arrows.onclick = () => {
                arrows.parentNode.parentNode.classList.remove('active')
            }
        });
    }());
    (function grabCursor() {
        const containers = document.querySelectorAll('.our-team__description');

        let startY;
        let scrollTop;
        let isDown;

        containers.forEach(container => {
            container.addEventListener('mousedown', e => mouseIsDown(e));
            container.addEventListener('mouseup', e => mouseUp(e))
            container.addEventListener('mouseleave', e => mouseLeave(e));
            container.addEventListener('mousemove', e => mouseMove(e));
            function mouseIsDown(e) {
                isDown = true;
                startY = e.pageY - container.offsetTop;
                scrollLeft = container.scrollLeft;
                scrollTop = container.scrollTop;
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
                    const y = e.pageY - container.offsetTop;
                    const walkY = y - startY;
                    container.scrollTop = scrollTop - walkY;
                }
            }
        });
    }());
}