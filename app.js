'use strict';
const subject = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'bla bla bla'
]
 let word = '';
const maxmistak = 6;
let wrong = 0;
let guessed =[];

////choice the guess randomly
function randomsubject() {
    word = subject[Math.floor(Math.random() * subject.length)];
    console.log(word);
  }
  randomsubject()

//// bulit the letter buttton
function letterbutton(){
    let letter = 'abcdefghijklmnopqrstuvwxyz'.split('').map((a)=>
        `<button onClick='handler(${a})' class='lett' id = '${a}'> ${a}</button>`
    
    ).join('')
  
    document.getElementById('letters').innerHTML = letter;
   
}
letterbutton()

document.getElementById('maxWrong').innerHTML=maxmistak;


//// --- gussed word

function gussedspace(){
    let gusseword= word.split('').map((a)=>
        `<span class='dash'>_</span>`
    
    ).join('');

    document.getElementById('wordSpotlight').innerHTML=gusseword;
}
gussedspace()
//
function handler(){

}
