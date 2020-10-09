let page3 = document.querySelector('#page3content');
let Output = page3.querySelector('.output');
let ButtonPress = page3.querySelector('.prompter');
let Head = page3.querySelector('.agecalc');
let text = page3.querySelector('.des');

text.innerHTML = `<p>This is Alice. She is very shy. She only calculates your age. Try it! Just press the button. </p>`

ButtonPress.addEventListener('click', () =>{
    name=prompt("Hey there! What's your name?", '');
    while (name === ''){
        name=prompt("I couldn't quite catch that. What's your name again?", '');
    }
    year=prompt("What year were you born?", '');
    while (year>2019 || year<0){
        year=prompt("I dont think that's right. Can you input your birthyear again?", '');
    }
    year=2020-year;
    if (name.toLowerCase()=== 'alice')
    {
        Output.innerHTML = `Alice says:<br>Hello Alice. My name is Alice too!<br>I'm so glad to meet you! <br>You're ${year} right?`;
    }
    else {
        Output.innerHTML = `Alice says:<br>Hello ${name}. I'm so glad to meet you! <br>You're ${year} right?`;
    }
})

