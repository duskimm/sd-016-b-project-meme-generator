let uploadedImg = '';

function memeTxt() {
  const memeText = document.querySelector('#text-input');
  const memT = memeText.value;
  const memeTx = document.querySelector('#meme-text');
  memeTx.innerText = memT;
}

function memeImg() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadedImg = reader.result;
    document.querySelector(
      '#meme-image'
    ).style.backgroundImage = `url(${uploadedImg})`;
  });
  reader.readAsDataURL(this.files[0]);
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

function test3() {
  for (let i = 1; i < 5; i += 1) {
    let memDivImg = document.querySelector(`#meme-${i}`);
    memDivImg.style.backgroundImage = `url(./imgs/meme-${i}.png)`;
  }
}

function useMeme(e) {
  const et = e.target;
  const etBg = et.style.backgroundImage;
  if (etBg) {
    document.querySelector('#meme-image').style.backgroundImage = etBg;
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

window.onload = test3;
// function tstImg(event) {
//   const image = document.getElementById('output');
//   image.src = URL.createObjectURL(event.target.files[0]);
// }

// background-image: url(./imgs/css-logo.png);
