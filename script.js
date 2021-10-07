const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const imgInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const butttonEarth = document.querySelector('#earth');
const Meme1 = document.querySelector('#meme-1');
const Meme2 = document.querySelector('#meme-2');
const Meme3 = document.querySelector('#meme-3');
const Meme4 = document.querySelector('#meme-4');

function inputText() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', inputText);

function addImage(img) {
  const imgUrl = URL.createObjectURL(img.target.files[0]);
  memeContainer.style.width = '500px';
  memeContainer.style.height = '500px';
  memeImage.src = imgUrl;
}

imgInput.addEventListener('change', addImage);

function borderElement(buttonElement) {
  const button = buttonElement.target;
  if (button === buttonFire) {
    memeContainer.style.border = '20px ridge red';
  }
  if (button === buttonWater) {
    memeContainer.style.border = '15px  double blue';
  }
  if (button === butttonEarth) {
    memeContainer.style.border = '17px groove green';
  }
}

buttonFire.addEventListener('click', borderElement);
buttonWater.addEventListener('click', borderElement);
butttonEarth.addEventListener('click', borderElement);

// fonte sobre bordas css- https://br.godaddy.com/blog/border-css-estilos-de-borda-para-usar-no-seu-site/

