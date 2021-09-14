const getInput = document.querySelector('#text-input');
const getText = document.querySelector('#meme-text');


getInput.addEventListener('keyup', function (){
  getText.innerHTML = getInput.value;
});
