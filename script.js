
let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');
let memeInsert = document.querySelector('#meme-insert');
let memeImage = document.querySelector('#meme-image');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value;
  console.log(textInput.value);
})

const fileReader = new FileReader();

function src() {
  memeImage.src = fileReader.result;
}

memeInsert.addEventListener('change', () => {
  let file = memeInsert.files[0];
  fileReader.onload = src;
  fileReader.readAsDataURL(file);
});
