const appListing = document.querySelector('.app-listing');
if (!!appListing) {
    (function grabCursorAppListing() {
        let containers = document.querySelectorAll('.card__element-wrapper');
        grabCursor(containers)
    }());
    (function playVideo() {
        let videos = document.querySelectorAll('.slider-app__video>.slider-app__preview');
        if(videos.length>=1){
            videos.forEach(video=>{
                video.onclick = () =>{
                    video.classList.add('active');
                    video.nextElementSibling.play();
                }
            })
        }
    }());
}
