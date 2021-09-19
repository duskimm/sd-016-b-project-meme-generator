const textInput2 = document.getElementById('text-input');

function clearText() {
  const textArea = document.getElementById('meme-text');
  textArea.innerText = '';
}

function memeText() {
  const textInput = document.getElementById('text-input').value;
  const texto = document.getElementById('meme-text');
  texto.innerText = textInput;
}

function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Aplicar Texto';
  document.body.appendChild(button);
}
createButton();

textInput2.addEventListener('change', memeText);

function searchImg(event) {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
}
const imgInsert = document.getElementById('meme-insert');

imgInsert.addEventListener('change', searchImg);
