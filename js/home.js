let menubar = document.querySelector('.topbar .menubar');
let start = document.querySelector('.pages');

let currentScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    if(window.pageYOffset < (start.offsetTop - 200) ) {
        menubar.classList.remove('slide')
    } else {
        menubar.classList.add('slide')
    }
});



let page1 = document.querySelector('#page1content');
page1.innerHTML = `Hello! Welcome to my <br> very special page.`;

let page2 = document.querySelector('#page2content');
page2.innerHTML = `<p>chuchuchuhcuhcuhuchuchuchu
<img src="images/logo.png" width=50%> hjvjhghjgjhgh
</p>`;

let page3 = document.querySelector('#page3content');
let name = page3.querySelector('[type=text]');
let year = page3.querySelector('[type=number');
let nameOutput = page3.querySelector('.name');
let yearOutput = page3.querySelector('.birthyear');

name.addEventListener('keyup', () => {
    nameOutput.innerHTML = name.value;
})

year.addEventListener('keyup', () => {
    yearOutput.innerHTML = 2020 - year.value;
})

let page4 = document.querySelector('#page4content');
let color = page4.querySelector('[type=text');
let colorOutput = page4.querySelector('.output');

color.addEventListener('keyup', () =>{
    if(color.value === 'pink') {
        colorOutput.innerHTML = `<p style="background-color:pink">chuchuchuhcuhcuhuchuchuchu
hjvjhghjgjhgh
</p>`;
    } else {
        colorOutput.innerHTML = '';
    }
})
