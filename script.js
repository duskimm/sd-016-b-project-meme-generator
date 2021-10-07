const memeText = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const imgInput = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

function inputText() {
  const text = textInput.value;
  memeText.innerText = text;
}

textInput.addEventListener('keyup', inputText);

function addImage(img) {
  const imgUrl = URL.createObjectURL(img.target.files[0]);
  console.log(imgUrl);
  memeImage.src = imgUrl;
  memeContainer.style.width = '500px';
  memeContainer.style.height = '500px';
}

imgInput.addEventListener('change', addImage);
