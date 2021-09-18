let uploadedImg = '';

function memeTxt() {
  const memeText = document.querySelector('#text-input');
  const memT = memeText.value;
  const memeTx = document.querySelector('#meme-text');
  memeTx.innerText = memT;
}

const memeText = document.querySelector('#text-input');
memeText.addEventListener('input', memeTxt);

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

// function tstImg(event) {
//   const image = document.getElementById('output');
//   image.src = URL.createObjectURL(event.target.files[0]);
// }

// const test = document.querySelector('#meme-insert');
const test = document.querySelector('#meme-insert');
test.addEventListener('change', memeImg);
