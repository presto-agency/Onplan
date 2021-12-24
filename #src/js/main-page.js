window.addEventListener('DOMContentLoaded', function () {
    callTabs()
})

const callTabs = () => {
    let elementsLink = document.querySelectorAll('.trigger-obj');
    let tabsBtns = document.querySelectorAll('.tabs__item');
    const tabs = document.querySelector('.tabs__body');
    const menu = document.querySelector('.tabs__items');
    elementsLink.forEach(link => link.addEventListener('click', function () {
        let attr = this.getAttribute('data-attr');
        const activeBtn = tabs.querySelector('.active');
        let subWindow = document.getElementById(attr);
        activeBtn.classList.remove('active');
        subWindow.classList.add('active');
    }))
    tabsBtns.forEach(btn => btn.addEventListener('click', function () {
        const activeBtn = menu.querySelector('.active');
        if (!!activeBtn) {
            activeBtn.classList.remove('active')
            btn.classList.add('active')
        }
        else {
            btn.classList.add('active')
        }
    }))
}