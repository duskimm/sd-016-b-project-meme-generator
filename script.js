function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function removeOfHtml(fatherElement, sonElement) {
  fatherElement.removeChild(sonElement);
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

function addMultiplesEvents(element, eventsName, listener) {
  const events = eventsName.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
}

function addMultiplesEventsAndListeners(arr, eventsName, listener) {
  const events = eventsName.split(' ');

  arr.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, listener, false);
    });
  });
}

const user = {
  memeImage: '',
  memeText: '',
}

const staticElement = {
  textInput: getOne('#text-input'),
  memeInsert: getOne('#meme-insert'),
  memeContainer: getOne('#meme-image-container'),
  memeImage: getOne('#meme-image'),
  memeText: getOne('#meme-text'),
  borderButtons: getAll('.border'),
  memeTemplates: getAll('.meme-template'),
}

const memeTemplates = {
  meme1: './imgs/meme-1.png',
  meme2: './imgs/meme-2.png',
  meme3: './imgs/meme-3.png',
  meme4: './imgs/meme-4.png',
}

function saveMemeText(event) {
  user.memeText = event.target.value;
}

function applyMemeText() {
  staticElement.memeText.innerText = user.memeText;
}

function inputMemeAtt() {
  staticElement.textInput.addEventListener('keyup', (event) => {
    saveMemeText(event);
    applyMemeText();
  });
}

/* As funções saveMemeImgPath e applyMemeImg foram feitas utilizando estas referências:
https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
https://github.com/tryber/sd-016-b-project-meme-generator/pull/1/files
https://developer.mozilla.org/en-US/docs/Web/API/FileList */

function saveMemeImgPath(event) {
  if (event.target.files[0]) {
    user.memeImage = URL.createObjectURL(event.target.files[0]);
  }
}

function applyMemeImg() {
  staticElement.memeImage.style.backgroundImage = `url(${user.memeImage})`;
}

function buttonMemeInput() {
  staticElement.memeInsert.addEventListener('input', (event) => {
    saveMemeImgPath(event);
    applyMemeImg();
  });
}

function fireBorder() {
  staticElement.memeContainer.style.border = '3px dashed red';
}

function waterBorder() {
  staticElement.memeContainer.style.border = '5px double blue';
}

function earthBorder() {
  staticElement.memeContainer.style.border = '6px groove green';
}

function applyBorder(event) {
  switch(event.target.id){
    case('fire'):
      fireBorder();
      break
    case('water'):
      waterBorder();
      break
    case('earth'):
      earthBorder();
      break
    default:
      alert('Erro ao selecionar a borda!');
  }
}

function buttonsBorder() {
  addMultiplesListeners(staticElement.borderButtons, 'click', applyBorder)
}

function firstMeme() {
  staticElement.memeImage.style.backgroundImage = `url(${memeTemplates.meme1})`;
}

function secondMeme() {
  staticElement.memeImage.style.backgroundImage = `url(${memeTemplates.meme2})`;
}

function thirdMeme() {
  staticElement.memeImage.style.backgroundImage = `url(${memeTemplates.meme3})`;
}

function fourthMeme() {
  staticElement.memeImage.style.backgroundImage = `url(${memeTemplates.meme4})`;
}

function applyTemplateMeme(event) {
  switch(event.target.id){
    case('meme-1'):
      firstMeme();
      break
    case('meme-2'):
      secondMeme();
      break
    case('meme-3'):
      thirdMeme();
      break
    case('meme-4'):
      fourthMeme();
      break
    default:
      alert('Erro ao selecionar meme!');
  }
}

function buttonsMeme() {
  addMultiplesListeners(staticElement.memeTemplates, 'click', applyTemplateMeme)
}

function startMemes() {
  inputMemeAtt();
  buttonMemeInput();
  buttonsBorder();
  buttonsMeme();
}

window.onload = () => {
  startMemes();
};
