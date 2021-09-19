const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');

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
