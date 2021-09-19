function updateMemeText(evt) {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = evt.target.value;
}

function addTextInputEvents() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('input', updateMemeText);
}

function imageLoadedCallback(img) {
  const container = document.getElementById('meme-image-container');
  container.style.width = `${img.width}px`;
  container.style.height = `${img.height}px`;
  const text = document.getElementById('meme-text');
  text.style.top = 0;
  text.style.left = 0;
  text.style.transform = 'none';
}

function updateMemeImage(evt) {
  const memeImage = document.getElementById('meme-image');
  memeImage.innerHTML = '';
  const img = document.createElement('img');
  img.onload = () => imageLoadedCallback(img);
  const [file] = evt.target.files;
  const reader = new FileReader();
  reader.onload = (readerEvt) => {
    img.src = readerEvt.target.result;
    img.draggable = false;
  };
  img.file = file;
  reader.readAsDataURL(file);
  memeImage.appendChild(img);
}

function addImageInputEvents() {
  const imageInput = document.getElementById('meme-insert');
  imageInput.addEventListener('change', updateMemeImage, false);
}

function clampVal(min, val, max) {
  if (val <= min) return 0;
  if (val >= min + max) return max;
  return val - min;
}

function calculateNewTop(y, text, container) {
  const maxY = container.offsetHeight;
  const offsetY = container.offsetTop;
  const textHeight = parseFloat(window.getComputedStyle(text).getPropertyValue('height'));
  const max = maxY - textHeight;
  const newTop = clampVal(offsetY, y, max);
  return `${newTop}px`;
}
function calculateNewLeft(x, text, container) {
  const maxX = container.offsetWidth;
  const offsetX = container.offsetLeft;
  const textWidth = parseFloat(window.getComputedStyle(text).getPropertyValue('width'));
  const max = maxX - textWidth;
  const newLeft = clampVal(offsetX, x, max);
  return `${newLeft}px`;
}

function moveText(evt) {
  evt.preventDefault();
  const container = document.getElementById('meme-image-container');
  const text = document.getElementById('meme-text');
  text.style.top = calculateNewTop(evt.y, text, container);
  text.style.left = calculateNewLeft(evt.x, text, container);
  text.style.transform = 'none';
  text.style.opacity = 1;
}

function addTextEvents() {
  const memeText = document.getElementById('meme-text');
  memeText.addEventListener('dragstart', (evt) => {
    const text = evt.target;
    text.style.opacity = 0.5;
  }, false);
  memeText.addEventListener('dragend', moveText, false);
}

function addInputEvents() {
  addTextInputEvents();
  addImageInputEvents();
  addTextEvents();
}

window.onload = () => {
  addInputEvents();
};
