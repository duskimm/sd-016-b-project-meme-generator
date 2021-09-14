let textInput = document.getElementById('text-input');

function insertText(event) {
  document.getElementById('meme-text').innerText = event.target.value;
}

textInput.addEventListener('keyup', insertText);

let imageInput = document.getElementById('meme-insert');

// Função que adiciona imagem

function readImage() {
  if (this.files && this.files[0]) {
    let file = new FileReader();
    file.readAsDataURL(this.files[0]);
    file.onload = function(e) {
      document.getElementById("meme-image").src = e.target.result;
    };
  }
  // Créditos: Matheus Battisti em horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
}

document.getElementById("meme-insert").addEventListener("change", readImage);

let container = document.getElementById('meme-image-container');

let borderClasses = ['fire-border', 'water-border', 'earth-border'];

let buttons = document.getElementsByTagName('button');

function addBorder(event) {
  let className = event.target.innerText.toLowerCase();

  if (container.className !== className) {
    container.className = className;
  } else {
    container.className = 'border';
  }
}

for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', addBorder);
}

let readyMemes = document.getElementsByClassName('ready-images');

function addReadyMeme(event) {
  let img = event.target.src;

  document.getElementById('meme-image').src = img;
}

for (let index = 0; index < readyMemes.length; index += 1) {
  readyMemes[index].addEventListener('click', addReadyMeme);
}