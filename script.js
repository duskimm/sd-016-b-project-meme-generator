const textInput2 = document.getElementById('text-input');

// Função para inserir o novo texto digitado.
function memeText() {
  const textInput = document.getElementById('text-input').value;
  const texto = document.getElementById('meme-text');
  texto.innerText = textInput;
}
textInput2.addEventListener('keyup', memeText);

// Função para alterar a imagem.
const imgInsert = document.getElementById('meme-insert');
function searchImg(event) {
  const img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
  console.log(target.files[0]);
}

imgInsert.addEventListener('change', searchImg);

