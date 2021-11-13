const input = document.getElementById('text-input');
const span = document.getElementById('meme-text');

const loadFile = (event) => {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
};

input.addEventListener('input', (event) => {
  span.textContent = event.target.value;
});
