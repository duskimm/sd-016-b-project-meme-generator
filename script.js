const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');

const memeImageContainer = document.querySelector('#meme-image-container');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
  console.log(textInput.value);
});

const fileReader = new FileReader();

function src() {
  memeImage.src = fileReader.result;
}

memeInsert.addEventListener('change', () => {
  const file = memeInsert.files[0];
  fileReader.onload = src;
  fileReader.readAsDataURL(file);
});

fireButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'dashed 3px red';
});

waterButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'double 5px blue';
});

earthButton.addEventListener('click', () => {
  memeImageContainer.style.border = 'groove 6px green';
});

const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

meme1.addEventListener('click', () => {
  memeImage.src = meme1.src;
});

meme2.addEventListener('click', () => {
  memeImage.src = meme2.src;
});

meme3.addEventListener('click', () => {
  memeImage.src = meme3.src;
});

meme4.addEventListener('click', () => {
  memeImage.src = meme4.src;
});
