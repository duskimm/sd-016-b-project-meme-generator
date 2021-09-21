const textInput2 = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const buttonContainer = document.getElementById('button-container');

// Função para inserir o novo texto digitado.
function memeText() {
  const textInput = document.getElementById('text-input').value;
  const texto = document.getElementById('meme-text');
  texto.innerText = textInput;
}
textInput2.addEventListener('keyup', memeText);

// Função para alterar a imagem.
function searchImg(event) {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
}
const imgInsert = document.getElementById('meme-insert');
// Evento para alterar a imagem.
imgInsert.addEventListener('change', searchImg);

// Função para criar botões.
function createButton(name, id) {
  const button = document.createElement('button');
  button.innerText = name;
  button.id = id;
  buttonContainer.appendChild(button);
}
createButton('Fire', 'fire');
const fireButton = document.getElementById('fire');
fireButton.style.backgroundColor = 'red';

// Evento para o botão Fire.
fireButton.addEventListener('click', () => {
//  const container = document.getElementById('meme-image-container');
  if (container.className !== 'fire') {
    container.className = 'fire';
  } else {
    container.className = 'defaultBorder';
  }
});

// Funcão para criar e adicionar evento ao botão water.
createButton('Water', 'water');
const waterButton = document.getElementById('water');
waterButton.style.backgroundColor = 'blue';
waterButton.addEventListener('click', () => {
  if (container.className !== 'water') {
    container.className = 'water';
  } else {
    container.className = 'defaultBorder';
  }
});

// Função para criar e adicionar evento ao botão earth.
createButton('Earth', 'earth');
const earthButton = document.getElementById('earth');
earthButton.style.backgroundColor = 'green';
earthButton.addEventListener('click', () => {
  if (container.className !== 'earth') {
    container.className = 'earth';
  } else {
    container.className = 'defaultBorder';
  }
});

const containerImages = document.getElementById('imagens-memes-reference');

containerImages.addEventListener('click', (event) => {
  const alvo = event.target;
  const img = document.getElementById('meme-image');
  if (alvo.src !== undefined) {
    img.src = alvo.src;
  }
});
