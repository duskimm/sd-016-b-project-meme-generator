function mostraTexto(e) {
  document.querySelector('#meme-text').innerText = e.target.value;
}

function atualizaFoto(e) {
  if (e.target.classList.contains('memes')) {
    document.querySelector('#meme-image-container').style.backgroundImage = `url(${e.target.src})`;
  }
}

function novaImagem() {
  // https://pt.stackoverflow.com/questions/383341/utiliza%C3%A7%C3%A3o-do-input-file-com-js
  const reader = new FileReader();
  reader.readAsDataURL(document.querySelector('#meme-insert').files[0]);
  reader.onload = () => {
    document.querySelector('#meme-image-container').style.backgroundImage = `
    url(${reader.result})`;
  };
}

function configurar() {
  document.querySelector('#text-input').addEventListener('input', mostraTexto);
  document.querySelector('#meme-1').addEventListener('click', atualizaFoto);
  document.querySelector('#meme-insert').addEventListener('change', novaImagem);
}

window.onload = configurar;

// REQUISITOS FALTANTES
// carregar imagem
// botões de bordas

// Linha em branco é de graça né linter
