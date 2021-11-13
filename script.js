const input = document.getElementById('text-input');
const span = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

const loadFile = (event) => {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
};

input.addEventListener('input', (event) => {
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
