let textInput = document.getElementById('text-input');

function insertText(event) {
  document.getElementById('meme-text').innerText = event.target.value;
}

textInput.addEventListener('keyup', insertText);

let imageInput = document.getElementById('meme-insert');

// Função que adiciona imagem

function readImage() {
  if (this.files && this.files[0]) {
    let file = new FileReader();
    file.readAsDataURL(this.files[0]);
    file.onload = function(e) {
      document.getElementById("meme-image").src = e.target.result;
    };
  }
  // Créditos: Matheus Battisti em horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
}

document.getElementById("meme-insert").addEventListener("change", readImage);