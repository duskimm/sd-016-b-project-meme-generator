function updateMemeText(evt) {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = evt.target.value;
}

function addTextInputEvents() {
  const textInput = document.getElementById('text-input');
  textInput.addEventListener('input', updateMemeText);
}

function addInputEvents() {
  addTextInputEvents();
}

window.onload = () => {
  addInputEvents();
};
