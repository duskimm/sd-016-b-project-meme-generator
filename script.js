const getInput = document.querySelector('#text-input');
const getText = document.querySelector('#meme-text');
const getImg = document.querySelector('#meme-insert');
const memeImagem = document.querySelector('#meme-image');
const memecontainer = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

memecontainer.style.border = '1px solid black';

getInput.addEventListener('keyup', () => {
  getText.innerHTML = getInput.value;
});

getImg.addEventListener('change', (event) => {
  const urlImg = URL.createObjectURL(event.target.files[0]);
  memeImagem.src = `${urlImg}`;
});

fire.addEventListener('click', () => {
  memecontainer.style.border = '3px dashed red';
});
water.addEventListener('click', () => {
  memecontainer.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  memecontainer.style.border = '6px groove green';
});

const getPai = document.querySelector('#divPai');
getPai.addEventListener('click', (event) => {
  memeImagem.src = `${event.target.src}`;
});
