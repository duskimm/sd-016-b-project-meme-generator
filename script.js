const inputIMG = document.getElementById('meme-insert');
const inputTXT = document.getElementById('text-input');
const span = document.getElementById('meme-text');
const output = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

inputIMG.onchange = () => {
  const [file] = inputIMG.files;
  if (file) {
    output.src = URL.createObjectURL(file);
  }
};

inputTXT.addEventListener('input', (event) => {
  span.textContent = event.target.value;
});

fire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

water.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});

meme1.addEventListener('click', (event) => {
  output.src = event.target.src;
});

meme2.addEventListener('click', (event) => {
  output.src = event.target.src;
});

meme3.addEventListener('click', (event) => {
  output.src = event.target.src;
});

meme4.addEventListener('click', (event) => {
  output.src = event.target.src;
});
