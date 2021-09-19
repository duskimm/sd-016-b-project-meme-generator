const pegaInput = document.getElementById('text-input');
const getFire = document.getElementById('fire');
const getWater = document.getElementById('water');
const getEarth = document.getElementById('earth');
const getDiv = document.getElementById('meme-image-container');
const recebeImg = document.getElementById('meme-insert');
const procuraSRC = document.getElementById('meme-image');

function textArea() {
  pegaInput.addEventListener('input', (event) => {
    const pegaDiv = document.getElementById('meme-text');
    pegaDiv.innerHTML = event.target.value;
  });
}
textArea();

// https://codepen.io/vanessametonini/pen/zLmzNY && lógica tirada = https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
// https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
function pegaURL(event) {
  procuraSRC.src = URL.createObjectURL(event.target.files[0]);
}

function pegarImg(event) {
  const evento = event.target.src;
  recebeImg.src = evento;
}

function fire() {
  getDiv.style.border = '3px dashed red';
}

function water() {
  getDiv.style.border = '5px double blue';
}

function earth() {
  getDiv.style.border = '6px groove green';
}

function imgs() {
  const divImgs = document.querySelector('.pre');
  divImgs.addEventListener('click', (event) => {
    const evento = event.target.src;
    procuraSRC.src = evento;
  });
}
imgs();

getFire.addEventListener('click', fire);
getWater.addEventListener('click', water);
getEarth.addEventListener('click', earth);
recebeImg.addEventListener('click', pegarImg);
recebeImg.addEventListener('change', pegaURL);
