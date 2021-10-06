const getInput = document.querySelector('#text-input');
const getText = document.querySelector('#meme-text');
const getImg = document.querySelector('#meme-insert');
const memeImagem = document.querySelector('#meme-image');
const memecontainer = document.querySelector('#meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

// colocar borda inicial no container
memecontainer.style.border = '1px solid black';

getInput.addEventListener('keyup', () => {
  getText.innerHTML = getInput.value;
});

// função para pegar a url do input e colocar no preview
getImg.addEventListener('change', (event) => { // retirado a ideia de usar o URL.createObjectUrl do site https://stackoverflow.com/questions/11708797/inserting-a-file-input-as-an-img-in-the-dom
  const urlImg = URL.createObjectURL(event.target.files[0]);
  memeImagem.src = `${urlImg}`;
});

// botão fire
fire.addEventListener('click', () => {
  memecontainer.style.border = '3px dashed red';
});

// botão water
water.addEventListener('click', () => {
  memecontainer.style.border = '5px double blue';
});

// botão earth
earth.addEventListener('click', () => {
  memecontainer.style.border = '6px groove green';
});

// atualizar o preview com os memes prontos
const getPai = document.querySelector('#divPai');
getPai.addEventListener('click', (event) => {
  memeImagem.src = `${event.target.src}`;
});
