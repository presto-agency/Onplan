const about = document.querySelector('.about-onplan');
if (!!about) {
    (function addClassToAuthor() {
        const btns = document.querySelectorAll('.our-team__more-text');
        const closeArrows = document.querySelectorAll('.our-team__description>svg');
        btns.forEach(btn => {
            btn.onclick = () => {
                let activeBtn = document.querySelector('.our-team__list> .active')
                if (activeBtn) {
                    activeBtn.classList.remove('active')
                    btn.parentNode.classList.add('active')
                }
                else {
                    btn.parentNode.classList.add('active')
                }
            }
        });
        closeArrows.forEach(arrows => {
            arrows.onclick = () => {
                arrows.parentNode.parentNode.classList.remove('active')
            }
        });
    }());
    (function grabCursorAbout() {
        let containers = document.querySelectorAll('.our-team__description');
        grabCursor(containers)
    }());
}