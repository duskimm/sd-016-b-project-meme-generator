const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeContainer = document.getElementById('meme-image-container');
const imageMeme = document.getElementById('meme-image');
const imageInput = document.getElementById('meme-insert');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memesContainer = document.getElementById('memes-container');
const textTop = document.getElementById('topText');
const leftText = document.getElementById('leftText');

function insertTextMeme() {
  memeText.innerHTML = inputText.value;
}

/* O codigo dessa funcao foi retirado do site https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
e tambem https://www.codegrepper.com/code-examples/javascript/how+to+display+uploaded+file+in+html+using+javascript */

function addImageToContainer(event) {
  imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

function boarderFire() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function boarderWater() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
}

function boarderEarth() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
}

function memesFinished(event) {
  const memeSRC = event.target.src;
  imageMeme.src = memeSRC;
}

function changeTopDistance() {
  const inputValue = textTop.value;
  memeText.style.top = `${inputValue}px`;
  if (parseInt(inputValue, 10) > 360) {
    memeText.style.top = '360px';
    textTop.value = '360';
  }
}

function changeLeftDistance() {
  const inputValue = leftText.value;
  memeText.style.left = `${inputValue}px`;
  if (parseInt(inputValue, 10) > 795) {
    memeText.style.top = '795px';
    leftText.value = '795';
  }
}

inputText.addEventListener('keyup', insertTextMeme);
imageInput.addEventListener('change', addImageToContainer);
fireButton.addEventListener('click', boarderFire);
waterButton.addEventListener('click', boarderWater);
earthButton.addEventListener('click', boarderEarth);
memesContainer.addEventListener('click', memesFinished);
textTop.addEventListener('change', changeTopDistance);
leftText.addEventListener('change', changeLeftDistance);
