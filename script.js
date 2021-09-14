function insertText(event) {
  document.getElementById('meme-text').innerText = event.target.value;
}

document.getElementById('text-input').addEventListener('keyup', insertText);

// Função que adiciona imagem

function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.readAsDataURL(this.files[0]);
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
  }
  // Créditos: Matheus Battisti em horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
}

document.getElementById('meme-insert').addEventListener('change', readImage);

const container = document.getElementById('meme-image-container');

const buttons = document.getElementsByTagName('button');

function addBorder(event) {
  const className = event.target.innerText.toLowerCase();

  if (container.className !== className) {
    container.className = className;
  } else {
    container.className = 'border';
  }
}

for (let index = 0; index < buttons.length; index += 1) {
  buttons[index].addEventListener('click', addBorder);
}

const readyMemes = document.getElementsByClassName('ready-images');

function addReadyMeme(event) {
  const img = event.target.src;

  document.getElementById('meme-image').src = img;
}

for (let index = 0; index < readyMemes.length; index += 1) {
  readyMemes[index].addEventListener('click', addReadyMeme);
}
