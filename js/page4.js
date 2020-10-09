let page4 = document.querySelector('#page4content');
let Inputcolor = page4.querySelector('[type=text]');
let text = page4.querySelector('.message');
let Print = page4.querySelector('.output');
let ColorLegends = page4.querySelectorAll('.dot');
let ButtonPress = page4.querySelector('.prompter');
let heading = page4.querySelector('.info');
let title = page4.querySelector('.colorchanger');

let color = '';
let orig = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et metus urna. Fusce cursus risus ut porttitor euismod. Duis eget sagittis odio. Donec cursus in diam sed euismod. Etiam gravida nulla velit, in lobortis mauris euismod nec. Vivamus quis felis vel tortor fermentum iaculis eget sit amet massa. Sed vel tellus nec risus scelerisque iaculis. Maecenas convallis ante eget justo cursus congue. Vivamus non velit pulvinar, hendrerit tortor non, congue arcu. Nunc cursus nibh ac porta semper. Nam enim turpis, mattis vitae orci id, commodo tincidunt eros.';
let paragraph = orig;

heading.innerHTML += `<p>Hello! Here, you can modify the background of your paragraphs! You can also edit the text. To start, you should press the button! You can also input it in the text boxes below. You can also click on the colors you like.</p>`;

printing = () => {
    Print.innerHTML = `<p style="background-color: ${color}; padding:10px;">${paragraph}</p>`;
    page4.setAttribute('style', `border-color:${color}`);
    title.setAttribute('style', `color:${color}`);
}

printing();

ButtonPress.addEventListener('click', () =>{
    Initial();
})

function Initial () {
    newcolor=prompt("What color would you like your paragraph backgrounds to be?", '');
    newcolor = newcolor.toLowerCase();
    if(newcolor === 'red') {
        color = '#FE6762';
    }else if(newcolor === 'orange') {
        color = '#FCB438';
    }else if(newcolor === 'yellow') {
        color = '#FBFF90';
    }else if(newcolor === 'green') {
        color = '#9CE19A';
    }else if(newcolor === 'blue') {
        color = '#9FC0F2';
    }else if(newcolor === 'purple') {
        color = '#CD97CB';
    }else if(newcolor === 'pink') {
        color = '#f4afb3';
    }else if(newcolor === 'cream') {
        color = '#F6F6EB';
    }else{
        color='';
    }
    printing();
}
ColorLegends.forEach( item => {
    item.addEventListener('click', () => {
        color = item.dataset.color;
        printing();
    });
}
)

Inputcolor.addEventListener('keyup', () =>{

    colorInput = Inputcolor.value.toLowerCase();
    if(colorInput === 'red') {
        color = '#FE6762';
    }else if(colorInput === 'orange') {
        color = '#FCB438';
    }else if(colorInput === 'yellow') {
        color = '#FBFF90';
    }else if(colorInput === 'green') {
        color = '#9CE19A';
    }else if(colorInput === 'blue') {
        color = '#9FC0F2';
    }else if(colorInput === 'purple') {
        color = '#CD97CB';
    }else if(colorInput === 'pink') {
        color = '#f4afb3';
    }else if(colorInput === 'cream') {
        color = '#F6F6EB';
    }else{
        color='';
    }
    printing();
})

text.addEventListener('keyup', () =>{
    if (text.value.length>0) {
        paragraph = text.value;
    } else {
        paragraph = orig;
    }
    printing();
})