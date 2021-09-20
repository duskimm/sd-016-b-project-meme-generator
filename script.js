const textInput2 = document.getElementById('text-input');

// Função para limpar o texto anterior.
function clearText() {
  const textArea = document.getElementById('meme-text');
  textArea.innerText = '';
}

// Função para inserir o novo texto digitado.
function memeText() {
  const textInput = document.getElementById('text-input').value;
  const texto = document.getElementById('meme-text');
  texto.innerText = textInput;
}
textInput2.addEventListener('change', memeText);

// Função para alterar a imagem.
function searchImg(event) {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
}
const imgInsert = document.getElementById('meme-insert');

imgInsert.addEventListener('change', searchImg);


// function createButton() {
//   const button = document.createElement('button');
//   button.innerText = 'Aplicar Texto';
//   document.body.appendChild(button);
// }
// createButton();