const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text')
const imageMeme = document.getElementById('meme-image')
const imageInput = document.getElementById('meme-insert')
let imagemUploaded = ''

function insertTextMeme() {
  memeText.innerHTML = inputText.value
}

function addImageToContainer (event) {
	imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

inputText.addEventListener('keyup', insertTextMeme)
imageInput.addEventListener('change', addImageToContainer)
