function mostraTexto(e) {
  document.querySelector('#meme-text').innerText = e.target.value;
}

function atualizaFoto(e) {
  if (e.target.classList.contains('memes')) {
    document.querySelector('#meme-image-container').style.backgroundImage = `url(${e.target.src})`;
  }
}

function configurar() {
  document.querySelector('#text-input').addEventListener('input', mostraTexto);
  document.querySelector('#meme-1').addEventListener('click', atualizaFoto);
}

window.onload = configurar;

// REQUISITOS FALTANTES
// carregar imagem
// botões de bordas

// Linha em branco é de graça né linter
