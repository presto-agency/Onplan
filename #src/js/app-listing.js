const appListing = document.querySelector('.app-listing');
if (!!appListing) {
    (function grabCursorAppListing() {
        let containers = document.querySelectorAll('.card__element-wrapper');
        grabCursor(containers)
    }());
}
