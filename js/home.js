let menubar = document.querySelector('.topbar .menubar');
let start = document.querySelector('.head');

let currentScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    if(window.pageYOffset < (start.offsetTop - 130) ) {
        menubar.classList.remove('slide')
    } else {
        menubar.classList.add('slide')
    }
});
