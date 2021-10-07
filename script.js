const photoText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const firstImg = document.getElementById('meme-1');
const secondImg = document.getElementById('meme-2');
const thirdImg = document.getElementById('meme-3');
const fourthImg = document.getElementById('meme-4');
const output = document.getElementById('meme-image');

function printText () {
  if (photoText.value !== '') {
    memeText.innerText = photoText.value;
  }
}
photoText.addEventListener('keyup', printText);

// função loadFile retirada desse link, não entendi 100% dela, mas funcionou https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};

fireButton.addEventListener('click', () => {
  imgContainer.className = 'fire';
});

waterButton.addEventListener('click', () => {
  imgContainer.className = 'water';
});

earthButton.addEventListener('click', () => {
  imgContainer.className = 'earth';
});

firstImg.addEventListener('click', (event) => {
  const targets = event.target;
  if (targets.src !== undefined) {
    output.src = targets.src;
  }
});

secondImg.addEventListener('click', (event) => {
  const targets = event.target;
  if (targets.src !== undefined) {
    output.src = targets.src;
  }
});

thirdImg.addEventListener('click', (event) => {
  const targets = event.target;
  if (targets.src !== undefined) {
    output.src = targets.src;
  }
});

fourthImg.addEventListener('click', (event) => {
  const targets = event.target;
  if (targets.src !== undefined) {
    output.src = targets.src;
  }
});
