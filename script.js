const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text')

function insertTextMeme() {
  memeText.innerHTML = inputText.value
}

inputText.addEventListener('keyup', insertTextMeme)