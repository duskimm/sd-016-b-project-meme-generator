const container = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
let borderWidth = 1;

function updateContainerSize() {
  const memeText = document.getElementById('meme-text');
  if (memeImage.src !== '') {
    memeImage.width = memeImage.naturalWidth;
    memeImage.height = memeImage.naturalHeight;
    container.style.width = `${memeImage.naturalWidth + (borderWidth * 2)}px`;
    container.style.height = `${memeImage.naturalHeight + (borderWidth * 2)}px`;
  } else if (memeText.innerText !== '') {
    container.style.width = `${memeText.clientWidth + (borderWidth * 2)}px`;
    container.style.height = `${memeText.clientHeight + (borderWidth * 2)}px`;
  }
  memeText.style.top = 0;
  memeText.style.left = 0;
  memeText.style.transform = 'none';
}

function updateMemeText(evt) {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = evt.target.value;
}

function addTextInputEvents() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('input', updateMemeText);
  textInput.addEventListener('input', () => updateContainerSize());
}

function addImageEvents(image) {
  image.addEventListener('load', () => updateContainerSize());
  image.addEventListener('load', () => {
    URL.revokeObjectURL(image.src);
  });
}

function updateMemeImage(evt) {
  memeImage.src = URL.createObjectURL(evt.target.files[0]);
  addImageEvents(memeImage);
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

function calculateNewTop(y, text) {
  const maxY = container.offsetHeight;
  const offsetY = container.offsetTop;
  const textHeight = parseFloat(window.getComputedStyle(text).getPropertyValue('height'));
  const max = maxY - textHeight;
  const newTop = clampVal(offsetY, y, max);
  return `${newTop}px`;
}
function calculateNewLeft(x, text) {
  const maxX = container.offsetWidth;
  const offsetX = container.offsetLeft;
  const textWidth = parseFloat(window.getComputedStyle(text).getPropertyValue('width'));
  const max = maxX - textWidth;
  const newLeft = clampVal(offsetX, x, max);
  return `${newLeft}px`;
}

function moveText(evt) {
  evt.preventDefault();
  const text = document.getElementById('meme-text');
  text.style.top = calculateNewTop(evt.y, text);
  text.style.left = calculateNewLeft(evt.x, text);
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

function addBorder(evt) {
  const border = window.getComputedStyle(evt.currentTarget).getPropertyValue('outline');
  container.style.border = border;
  [borderWidth] = border.match(/\d+(?=px)/);
  updateContainerSize();
}

function addFireBorderButtonEvent() {
  const fire = document.getElementById('fire');
  fire.addEventListener('click', addBorder);
}
function addWaterBorderButtonEvent() {
  const water = document.getElementById('water');
  water.addEventListener('click', addBorder);
}
function addEarthBorderButtonEvent() {
  const earth = document.getElementById('earth');
  earth.addEventListener('click', addBorder);
}

function addBorderButtonsEvents() {
  addFireBorderButtonEvent();
  addWaterBorderButtonEvent();
  addEarthBorderButtonEvent();
}

function addPrebuiltMeme(evt) {
  memeImage.src = evt.target.src;
  addImageEvents(memeImage);
}

function addPrebuiltMemeEvents() {
  const prebuiltMemes = document.querySelectorAll('.prebuilt-meme');
  Array.from(prebuiltMemes).forEach((meme) => {
    meme.addEventListener('click', addPrebuiltMeme);
  });
}

function addInputEvents() {
  addTextInputEvents();
  addImageInputEvents();
  addTextEvents();
  addBorderButtonsEvents();
  addPrebuiltMemeEvents();
}

window.onload = () => {
  addInputEvents();
};
