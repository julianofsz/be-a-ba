import { game } from './game';

const newGameButton = document.getElementById('new-game');
const inputElem = document.getElementById('word');
const errorElem = document.getElementById('error');
const streakElem = document.getElementById('streak');
newGameButton.addEventListener('click', function(){
    game.newGame();
    const lettersElem = document.querySelectorAll('.square');
    for(var i = 0; i < lettersElem.length; i++){
        lettersElem[i].innerHTML = game.letters[i].toUpperCase();
    }

    inputElem.disabled = false;
    inputElem.value = "";
    inputElem.focus();
    errorElem.visibility = 'hidden';
    streakElem.innerHTML = "";

});

document.getElementById('form').addEventListener('submit', function (event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const word = formData.get('word');

    const isWordValid = game.validateword(word);
    if(isWordValid){
        streakElem.innerHTML = game.streak;
        errorElem.style.visibility = "hidden";
    }else {
        errorElem.style.visibility = "visible";
    }
});