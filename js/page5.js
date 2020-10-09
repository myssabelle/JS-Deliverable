let page5 = document.querySelector('#page5content');
let ButtonPress = page5.querySelector('.prompter');
let Header = page5.querySelector('.title');
let Output = page5.querySelector('.answers')

Header.innerHTML += `<h1>let's talk!</h1>`;
Header.innerHTML += `<p>This is Amelia! She's a baby bot, and is interested in talking with you! Talk simply, and she will answer to the best of her ability. If it's a yes or no question, answer them with a yes or no. (DUH) Take it easy, and have a chat with Amelia!</p>`;
ButtonPress.addEventListener('click', () =>{
    feeling = prompt("Hello, how are you feeling?", 'happy');
    feeling = feeling.toLowerCase();

    count=0;
    while (count<5){
    if (feeling.indexOf("sad")>=0 || feeling.indexOf("feeling down")>=0 || feeling.indexOf("feel down")>=0) {
        feeling = prompt("Are you sad because of your job?", '');
        feeling = feeling.toLowerCase();        
        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
            feeling = prompt("That's okay. Jobs aren't always perfect. Have you looked into other jobs?", '');
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                alert("That's great! I hope you find the perfect job for you.", '');
                count=6;
            } else {
                alert("I'm sure doors will open for you. Good luck!");
                count=6;
            }
        } else {
            feeling = prompt("Are you sad because of your relationships?", '');
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                feeling = prompt("That's okay. Relationships are complicated. Have you talked about it with this person?", '');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                    alert("That's great! I hope you find clarity soon.", '');
                    count=6;
                } else {
                    alert("You shouldn't talk with me! Go talk to them!");
                    count=6;
                }
            } else {
                feeling = prompt("Is it because you got a bad score/grade?", '');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                    feeling = prompt("That's okay. Nobody is perfect, especially academically. Can you still make up for it?", '');
                    feeling = feeling.toLowerCase();
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                    alert("That's great! Go study!");
                    count=6;
                    } else {
                    alert("Then take this as a lesson. Study hard kid!");
                    count=6;
                    }
                } else {
                    feeling = prompt("Is it because life sucks?", '');
                    feeling = feeling.toLowerCase();
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0) {
                        alert("There's nothing I can do to change that. But hey, go make some lemonade. You're amazing! Go punch life!");
                        count=6;                        
                    } else {
                        alert("Then I don't know what to tell you! Life is complicated if you can't make up your mind.");
                        count=6;
                    }
                }
            }
        }
    } else if (feeling.indexOf("happy")>=0 || feeling.indexOf("joy")>=0 || feeling.indexOf("glad")>=0 ) {
        if (feeling.indexOf("not happy")>=0) {
            alert("Go watch some Among Us gameplays. That always cheers me up.");
            count=6;
        } else {
            feeling = prompt("Did you do well in school?", '');
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                feeling = prompt("Wow! Did you get a high score?", '');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                    alert("Keep up the good job! I hope you can teach me some things someday!");
                    count=6;
                } else {
                    feeling = prompt("Did a teacher or peer praise/compliment you?", '');
                    feeling = feeling.toLowerCase();
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                        alert("That's great. I'm sure you deserved it!");
                        count=6;
                    } else {
                        feeling = prompt("Did you finish a project?", '');
                        feeling = feeling.toLowerCase();
                        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                            alert("That's amazing! I hope your hardwork pays off!");
                            count=6;
                        } else {
                            alert("Well, whatever the case is, I'm glad you're doing well academically!");
                            count=6;
                        }
                    }
                }
            }else{
                feeling = prompt("Did your crush notice you?", '');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                    feeling = prompt("That's cute! Love is rare, enjoy it! Does the other person know?", '');
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                        alert("You should go talk with that person more then! Stop talking to me! Go, enjoy!");
                        count=6;
                    } else {
                        feeling = prompt("You should tell that person. Can you do it?");
                        feeling = feeling.toLowerCase();
                        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                            alert("Then go! I will be rooting for you.");
                            count=6;
                        } else {
                            alert("I will be rooting for you! Take your time and build that confidence!");
                            count=6;
                        }
                    }
                } else {
                    feeling = prompt("Did you eat a lot of yummy food?",'');
                    feeling = feeling.toLowerCase();
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                        alert("That's nice. I am a bot, I cannot eat, glad you enjoyed it though!");
                        count=6;
                    } else {
                        feeling = prompt("Are you enjoying your company?",'');
                        feeling = feeling.toLowerCase();
                        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                            alert("That's cool. I enjoyed your company too! Talk to you later!");
                            count=6;
                        } else {
                            alert("Whatever it is, I'm glad you are happy.");
                            count=6;
                        }
                    }
                }
            }
        }
    } else if (feeling.indexOf("dead")>=0){
        feeling = prompt("We're talking! You're clearly not dead! Are you tired?", '');
        feeling = feeling.toLowerCase();
        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
            feeling = prompt("Go take a break! Do you want me to recommend you something to watch?",'');
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                alert("Go watch Grey's Anatomy if you haven't yet. There's 15 seasons on Netflix. Have fun!");
                count=6;
            } else{
                alert("Okay. Go enjoy your break. Don't forget to eat!");
                count=6;
            }
        } else{
            feeling = prompt("Are you mentally and emotionally 'done'?",'')
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                alert("As Marie Kondo would say, if it doesn't spark joy, throw it away! Only keep the positive things in your life!");
                count=6;
            } else{
                feeling = prompt("Does life just hate you?",'');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                    alert("I know. Life is shit. I'm stuck in a computer screen, how do you think I feel? Now, go take a walk or something.");
                    count=6;
                } else {
                alert("Well, dead doesn't always mean the outside. So take care of yourself okay? I'm here.");
                count=6;
                } 
            }
        }
    } else if (feeling.indexOf("mad")>=0 || feeling.indexOf("angry")>=0 || feeling.indexOf("furious")>=0){
        feeling = prompt("Are you mad at someone?",'');
        feeling = feeling.toLowerCase();
        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
            prompt("Do they know?", '');
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                alert("You should sit down and talk it out. Maybe compromise. Go talk with them!");
                count=6;
            } else{
                alert("Go tell them then! Nothing is resolved when you hold your anger in.");
                count=6;
            }
        } else {
            feeling = prompt("Are you mad at something?", "");
            feeling = feeling.toLowerCase();
            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                feeling = prompt("Is it the government?",'');
                feeling = feeling.toLowerCase();
                if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                    alert("They're shit. Abolish the system! And go register to vote.");
                    count=6;
                } else{
                    feeling = prompt("Is it your work?");
                    feeling = feeling.toLowerCase();
                    if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                        feeling = prompt("Can you fix it?",'');
                        feeling = feeling.toLowerCase();
                        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                            alert("Then take a deep breath, and go fix it. You'll do great.");
                            count=6;
                        } else {
                            feeling = prompt("Maybe you should look into other jobs. Are you looking?",'');
                            feeling = feeling.toLowerCase();
                            if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
                                alert("Then I'm sure doors will open soon. Goodluck!");
                                count=6;
                            } else {
                                alert("Consider it. Meanwhile, just take a break and come back with fresh eyes.");
                                count=6;
                            }
                        }
                    } else{
                        alert("Well, that's a normal emotion. Don't take it out on things that break though. Try screaming into a pillow.");
                        count=6;
                    }
                }
            } else {
                alert("Well, that's a normal emotion. Don't take it out on things that break though. Try screaming into a pillow.");
                count=6;
            }
        }
    } else if (feeling.indexOf("okay")>=0){
        if (feeling.indexOf("not")>=0)
        {
            feeling = prompt("I'm sorry you're not okay. But things will pass. Would you like me to recommend you something to watch?",'');
            feeling = feeling.toLowerCase();
        }
        else{
            feeling = prompt("I'm glad you're okay. Would you like me to recommend you something to watch?", '');
            feeling = feeling.toLowerCase();
        }
        if (feeling.indexOf("yes")>=0 || feeling.indexOf("yeah")>=0 || feeling.indexOf("yup")>=0){
            alert("Go watch Grey's Anatomy if you haven't yet. There's 15 seasons on Netflix. Have fun!");
            count=6;
        } else{
            alert("Okay. Go have a break. Self care is important!");
            count=6;
        }
    } else {
        feeling = prompt("I couldn't quite understand that. Can you elaborate?", '');
        count++;
    }
    }
    if (count==5){
        alert("Sorry! I've reached my limit. I'm too young to understand you old folk!");
    }
})


