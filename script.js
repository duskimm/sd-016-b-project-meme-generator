function memeTxt() {
  const memeText = document.querySelector('#text-input');
  const memT = memeText.value;
  const memeTx = document.querySelector('#meme-text');
  memeTx.innerText = memT;
}

function memeImg(event) {
  const imageSrc = URL.createObjectURL(event.target.files[0]);
  const memImage = document.querySelector('#meme-image');
  memImage.src = `${imageSrc}`;
}

function border(event) {
  const meDiv = document.querySelector('.meme_container');
  const eTar = event.target;
  const eBorCol = window.getComputedStyle(eTar);
  const corBor = eBorCol.getPropertyValue('background-color');
  if (this.id === 'fire') {
    meDiv.style.border = `3px dashed ${corBor}`;
  } else if (this.id === 'water') {
    meDiv.style.border = `5px double ${corBor}`;
  } else if (this.id === 'earth') {
    meDiv.style.border = `6px groove ${corBor}`;
  }
}

// function test3() {
//   for (let i = 1; i < 5; i += 1) {
//     const memDivImg = document.querySelector(`#meme-${i}`);
//     memDivImg.style.backgroundImage = `url(./imgs/meme-${i}.png)`;
//   }
// }

function useMeme(e) {
  const et = e.target;
  const etBg = et.src;
  console.log(etBg);
  if (etBg) {
    document.querySelector('#meme-image').src = `${etBg}`;
  }
}

const test = document.querySelector('#meme-insert');
test.addEventListener('change', memeImg);
const memeText = document.querySelector('#text-input');
memeText.addEventListener('input', memeTxt);

const redBtn = document.querySelector('#fire');
redBtn.addEventListener('click', border);
const greenBtn = document.querySelector('#water');
greenBtn.addEventListener('click', border);
const blueBtn = document.querySelector('#earth');
blueBtn.addEventListener('click', border);
const imgCon = document.querySelector('.img_container');
imgCon.addEventListener('click', useMeme);

// window.onload = test3;
// function tstImg(event) {
//   const image = document.getElementById('output');
//   image.src = URL.createObjectURL(event.target.files[0]);
// }

// background-image: url(./imgs/css-logo.png);
// ./imgs/meme-1.png