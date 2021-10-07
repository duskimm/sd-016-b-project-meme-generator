const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const imgInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const butttonEarth = document.querySelector('#earth');
const allMemes = document.querySelector('#sample-images');

function inputText() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', inputText);

function addImage() {
  imgInput.addEventListener('change', (event) => {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  });
}

addImage();

function borderElement(buttonElement) {
  const button = buttonElement.target;
  if (button === buttonFire) {
    memeContainer.style.border = '3px dashed red';
  }
  if (button === buttonWater) {
    memeContainer.style.border = '5px  double blue';
  }
  if (button === butttonEarth) {
    memeContainer.style.border = '6px groove green';
  }
}

buttonFire.addEventListener('click', borderElement);
buttonWater.addEventListener('click', borderElement);
butttonEarth.addEventListener('click', borderElement);

// fonte sobre bordas css- https://br.godaddy.com/blog/border-css-estilos-de-borda-para-usar-no-seu-site/

allMemes.addEventListener('click', (evt) => {
  const event = evt.target;
  if (event.src !== undefined) {
    memeImage.src = event.src;
  }
});
