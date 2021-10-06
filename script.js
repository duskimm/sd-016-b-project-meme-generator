const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');

function inputText() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', inputText);
