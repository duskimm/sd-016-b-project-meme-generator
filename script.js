const getInputText = document.getElementById('text-input');
const getInputImage = document.getElementById('meme-insert');

function showingTextInsideDiv() {
  const text = document.getElementById('meme-text');
  text.innerText = getInputText.value;
}

getInputText.addEventListener('input', showingTextInsideDiv);

function showImage() {
  const getImageElement = document.getElementById('meme-image');
  getImageElement.src = URL.createObjectURL(getInputImage.files[0]);
}

getInputImage.addEventListener('change', showImage);
