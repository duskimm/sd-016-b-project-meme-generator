const getInputText = document.getElementById('text-input');
const getInputImage = document.getElementById('meme-insert');
const getStyleButton = document.getElementById('style-button').children;
const getContainer = document.getElementById('meme-image-container');
const getOtherMemes = document.getElementById('other-memes').children;
const getImageElement = document.getElementById('meme-image');

function showingTextInsideDiv() {
  const text = document.getElementById('meme-text');
  text.innerText = getInputText.value;
}

getInputText.addEventListener('input', showingTextInsideDiv);

// ref: https://stackoverflow.com/questions/4459379
// author: BrianBurns
function showImage() {
  getImageElement.src = URL.createObjectURL(getInputImage.files[0]);
}

getInputImage.addEventListener('change', showImage);

function styleFire() {
  getContainer.style.border = '3px dashed red';
}

getStyleButton[0].addEventListener('click', styleFire);

function styleWater() {
  getContainer.style.border = '5px double blue';
}

getStyleButton[1].addEventListener('click', styleWater);

function styleEarth() {
  getContainer.style.border = '6px groove green';
}

getStyleButton[2].addEventListener('click', styleEarth);

function getMeme(event) {
  getImageElement.src = event.target.src;
}

for (let i = 0; i < getOtherMemes.length; i += 1) {
  getOtherMemes[i].addEventListener('click', getMeme);
}
