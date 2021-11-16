//Kallar på min knapp
const enter = document.querySelector('.enter');
//kallar på input-fältet
const fName = document.querySelector('.fName');
//kallar på alla variabler
let user = document.querySelector('.user');
let cScore = document.querySelector('.computerScore');
let uScore = document.querySelector('.userScore');
let mittVal = document.querySelector('.mittVal');
let datorn = document.querySelector('.datornsVal');
let grattis = document.querySelector('.grattis');

//säkerställer att ingen har poäng från början
let userScore = 0;
let computerScore = 0;

//Funktionen som flyttar namnet från input till rutan
enter.addEventListener('click', function(){
    let userInput = fName.value;
    console.log(userInput);
    
    user.innerText = userInput;
});

let alt = document.querySelector('.flexa');
const array = ['Sten', 'Sax', 'Påse'];

//randomiserar fram datorns val samtidigt som spelaren klickar på sitt val
alt.addEventListener('click', function(event){
    let random = Math.floor(Math.random()*(array.length));
    let computerOption = `${array[random]}`;

    //skriver ut vilka val som gjorts
    datorn.innerText = computerOption;
    console.log(computerOption);
    if(event.target.tagName === 'H1'){   
        mittVal.innerText = event.target.innerText;
    }

    //if-satserna ser till så att rätt "spelare" får poäng
    if(mittVal.innerText === 'Sten'){
        if(computerOption === 'Sax'){
            userScore++; 
        }
        else if(mittVal.innerText === 'Sten'){
            if(computerOption === 'Påse'){
               computerScore++; 
            }
        }    
        else{
        }       
    }
    if(mittVal.innerText === 'Sax'){
        if(computerOption === 'Påse'){
            userScore++; 
        }
        else if(mittVal.innerText === 'Sax'){
            if(computerOption === 'Sten'){
               computerScore++; 
            }
        }    
        else{
        }       
    }
    if(mittVal.innerText === 'Påse'){
        if(computerOption === 'Sten'){
            userScore++; 
        }
        else if(mittVal.innerText === 'Påse'){
            if(computerOption === 'Sax'){
               computerScore++; 
            }
        }    
        else{
        }       
    }
    console.log(userScore);
    console.log(computerScore);

    //skriver ut poängen på sin plats bredvid varje namn
    uScore.innerHTML = (userScore);
    cScore.innerHTML = (computerScore);

    //stoppar spelet när någon når 3poäng
    if(userScore === 3){
        grattis.innerText = 'GRATTIS! Du vann. Tryck reset för att tävla igen';
        alt.style.display = 'none';
    }
    else if(computerScore === 3){
        grattis.innerText = 'Tyvärr, datorn vann. Tryck reset för att tävla igen'
        alt.style.display = 'none';
    }
});

//En reset-knapp för att kunna börja om spelet
const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    window.location.reload();
});