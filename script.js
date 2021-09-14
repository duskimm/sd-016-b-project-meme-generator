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
  memeImage: getOne('#meme-image'),
}

function saveMemeText() {
  staticElement.textInput.addEventListener('keyup', (event) => {
    user.memeText = event.target.value;
  });
}

/* funções saveMemeImgPath e applyMemeImg foram feitas utilizando estas referências:
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

function startMemes() {
  buttonMemeInput();
}

window.onload = () => {
  startMemes();
};
