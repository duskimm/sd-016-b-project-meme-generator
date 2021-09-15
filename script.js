const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');
const imageMeme = document.getElementById('meme-image');
const imageInput = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function insertTextMeme() {
  memeText.innerHTML = inputText.value
}

/* O codigo dessa funcao foi retirado do site https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
e tambem https://www.codegrepper.com/code-examples/javascript/how+to+display+uploaded+file+in+html+using+javascript*/

function addImageToContainer (event) {
	imageMeme.src = URL.createObjectURL(event.target.files[0]);
  /* imageMeme.onload = () => {
    URL.removeObjectURL(imageMeme.src)
  } */
}

function boarderFire () {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)'
}

function boarderWater () {
  memeContainer.style.border = '5px double rgb(0, 0, 255)'
}

function boarderEarth () {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)'
}

inputText.addEventListener('keyup', insertTextMeme)
imageInput.addEventListener('change', addImageToContainer)
fireButton.addEventListener('click', boarderFire)
waterButton.addEventListener('click', boarderWater)
earthButton.addEventListener('click', boarderEarth)

